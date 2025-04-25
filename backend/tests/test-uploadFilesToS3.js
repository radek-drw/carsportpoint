import fs from "fs";
import path from "path";
import FormData from "form-data";
import { handler } from "./handler.js"; // Zaimportuj swoją funkcję

async function testHandler() {
  const form = new FormData();
  const filePath = path.join("test-assets", "example.txt"); // <- wrzuć tam jakiś plik testowy
  form.append("file", fs.createReadStream(filePath));

  // Konwertuj dane formularza na bufor
  const formBuffer = await new Promise((resolve, reject) => {
    const chunks = [];
    form.on("data", (chunk) => chunks.push(chunk));
    form.on("end", () => resolve(Buffer.concat(chunks)));
    form.on("error", reject);
    form.pipe(fs.createWriteStream("/dev/null")); // uruchamia form.on("data")
  });

  const event = {
    headers: {
      "content-type": form.getHeaders()["content-type"],
    },
    body: formBuffer.toString("base64"),
    isBase64Encoded: true,
  };

  const response = await handler(event);
  console.log("Response:", response);
}

testHandler().catch(console.error);
