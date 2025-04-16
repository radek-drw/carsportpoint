import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { v4 as uuidv4 } from "uuid";
import busboy from "busboy";

const s3 = new S3Client({ region: "eu-west-1" });
const BUCKET_NAME = "contact-form-file-uploads-csp";

export const handler = async (event) => {
  try {
    const contentType =
      event.headers["Content-Type"] || event.headers["content-type"];
    if (!contentType.startsWith("multipart/form-data")) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid content type" }),
      };
    }

    const bb = busboy({ headers: { "content-type": contentType } });

    const fileUploadPromises = [];

    bb.on("file", (fieldname, file, info) => {
      const { filename, mimeType } = info;
      const shortUuid = uuidv4().split("-")[0];
      const fileKey = `${shortUuid}_${filename}`;

      const chunks = [];

      file.on("data", (data) => {
        chunks.push(data);
      });

      file.on("end", () => {
        const fileBuffer = Buffer.concat(chunks);
        const uploadPromise = s3
          .send(
            new PutObjectCommand({
              Bucket: BUCKET_NAME,
              Key: fileKey,
              Body: fileBuffer,
              ContentType: mimeType,
            }),
          )
          .then(() => {
            return `https://${BUCKET_NAME}.s3.eu-west-1.amazonaws.com/${fileKey}`;
          });

        fileUploadPromises.push(uploadPromise);
      });
    });

    const result = await new Promise((resolve, reject) => {
      bb.on("finish", async () => {
        try {
          const urls = await Promise.all(fileUploadPromises);
          resolve(urls);
        } catch (err) {
          reject(err);
        }
      });

      bb.on("error", reject);

      bb.end(
        Buffer.from(event.body, event.isBase64Encoded ? "base64" : "utf8"),
      );
    });

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify({ success: true, urls: result }),
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST",
      },
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
