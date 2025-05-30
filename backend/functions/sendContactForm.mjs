import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { validationSchema } from "../../shared/validationSchema.js";

import * as Yup from "yup";

const sesClient = new SESClient({ region: "eu-west-1" });

const formatFileList = (files) => {
  if (!files?.length) return "<li>No files attached</li>";

  return files
    .map(
      ({ url, name, size }) => `
        <li>
          📎 <a href="${url}" target="_blank" rel="noopener noreferrer">${name}</a>
          <span style="font-size:12px; color:gray;"> (${(
            size /
            1024 /
            1024
          ).toFixed(2)} MB)</span>
          &nbsp;|&nbsp;
          <span style="font-size:12px; color:gray;">(Click to download or view the file)</span>
        </li>`
    )
    .join("");
};

export const sendContactForm = async (event) => {
  try {
    console.log("Received event:", JSON.stringify(event, null, 2));
    const body = JSON.parse(event.body);
    console.log("Parsed body:", body);

    const { formData } = body;

    const schema = validationSchema();
    // console.log("formData:", formData);
    // console.log("schema:", schema.describe());
    await schema.validate(formData, { abortEarly: false });

    const { name, email, phone, subject, message, files } = formData;

    const htmlBody = `
      <p><strong>Subject:</strong> ${subject || "not provided"}</p>
      <p><strong>Name:</strong> ${name || "not provided"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "not provided"}</p>
      <p><strong>Message:</strong><br/>${
        message ? message.replace(/\n/g, "<br/>") : "not provided"
      }</p>
      <p><strong>Attached Files:</strong></p>
      <ul>${formatFileList(files)}</ul>
    `;

    const emailParams = {
      Source: "rdrweski@outlook.com",
      Destination: { ToAddresses: ["rdrweski@gmail.com"] },
      Message: {
        Subject: { Data: "New message from Contact Form" },
        Body: { Html: { Data: htmlBody } },
      },
      ReplyToAddresses: [email],
    };

    // 3. Wysyłka emaila
    const command = new SendEmailCommand(emailParams);
    await sesClient.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    // 4. Obsługa błędów walidacji
    if (error instanceof Yup.ValidationError) {
      console.error("Validation error:", error.inner);

      const formattedErrors = error.inner.reduce((acc, err) => {
        if (err.path) acc[err.path] = err.message;
        return acc;
      }, {});

      return {
        statusCode: 400,
        body: JSON.stringify({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        }),
      };
    }

    // 5. Obsługa błędów serwera
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false }),
    };
  }
};
