import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "eu-west-1" });

export const handler = async (event) => {
  const body = JSON.parse(event.body);
  const { name, email, phone, subject, message } = body;

  const emailParams = {
    Source: "rdrweski@outlook.com",
    Destination: {
      ToAddresses: ["rdrweski@gmail.com"],
    },
    Message: {
      Subject: {
        Data: "New message from Contact Form",
      },
      Body: {
        Text: {
          Data: `
            Subject: ${subject || "not provided"}
            Name: ${name || "not provided"}
            Email: ${email}
            Phone: ${phone || "not provided"}
            Message: ${message}
            `,
        },
      },
    },
    ReplyToAddresses: [email],
  };

  try {
    const command = new SendEmailCommand(emailParams);
    await ses.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Email sent!" }),
    };
  } catch (error) {
    console.error("SES error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        message: "Error sending email",
        error: error.message,
      }),
    };
  }
};
