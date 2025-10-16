import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import busboy from 'busboy';

const s3Client = new S3Client({ region: 'eu-west-1' });
const BUCKET_NAME = 'contact-form-file-uploads-csp';
const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
};

export const handler = async (event) => {
  const contentType = event.headers['Content-Type'] || event.headers['content-type'];

  if (!contentType?.startsWith('multipart/form-data')) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Invalid content type' }),
    };
  }

  try {
    const bb = busboy({ headers: { 'content-type': contentType } });
    const uploads = [];

    bb.on('file', (fieldname, file, { filename, mimeType }) => {
      const key = `${uuidv4().split('-')[0]}_${filename}`;
      const chunks = [];

      file.on('data', (chunk) => chunks.push(chunk));
      file.on('end', () => {
        const buffer = Buffer.concat(chunks);
        const upload = s3Client
          .send(
            new PutObjectCommand({
              Bucket: BUCKET_NAME,
              Key: key,
              Body: buffer,
              ContentType: mimeType,
            })
          )
          .then(() => `https://${BUCKET_NAME}.s3.eu-west-1.amazonaws.com/${key}`);

        uploads.push(upload);
      });
    });

    const fileUrls = await new Promise((resolve, reject) => {
      bb.on('finish', () => resolve(Promise.all(uploads)));
      bb.on('error', reject);

      bb.end(Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8'));
    });

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: true, urls: fileUrls }),
    };
  } catch (err) {
    console.error('Upload error:', err);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ success: false, error: err.message }),
    };
  }
};
