import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { handler } from "../functions/uploadFilesToS3.mjs";

// In ESM, manually define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function testUploadHandler() {
  const testFilePath = path.join(__dirname, "test-assets", "example.txt");

  // Read the file content into a Buffer
  const fileContent = fs.readFileSync(testFilePath);

  const boundary = "----WebKitFormBoundary7MA4YWxkTrZu0gW";

  // Manually construct a multipart/form-data body
  const multipartBody =
    `--${boundary}\r\n` +
    `Content-Disposition: form-data; name="file"; filename="example.txt"\r\n` +
    `Content-Type: text/plain\r\n\r\n` +
    fileContent +
    `\r\n--${boundary}--\r\n`;

  // Convert multipart body to a Buffer
  const bodyBuffer = Buffer.from(multipartBody);

  // Simulate an API Gateway event
  const event = {
    headers: {
      "content-type": `multipart/form-data; boundary=${boundary}`,
    },
    body: bodyBuffer.toString("base64"),
    isBase64Encoded: true,
  };

  const response = await handler(event);

  console.log("Status:", response.statusCode);
  console.log("Response:", JSON.parse(response.body));
}

testUploadHandler().catch(console.error);
