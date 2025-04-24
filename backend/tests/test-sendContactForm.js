import { handler } from "../functions/sendContactForm.mjs";

const testEvent = {
  body: JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123456789",
    subject: "Request for Proposal",
    message: "Hello, I would like to learn more about your services.",
    files: [
      {
        url: "https://s3.amazonaws.com/fake-bucket/sample1.pdf",
        name: "sample1.pdf",
        size: 1048576,
      },
      {
        url: "https://s3.amazonaws.com/fake-bucket/image.png",
        name: "image.png",
        size: 5242880,
      },
    ],
  }),
};

handler(testEvent)
  .then((response) => {
    const parsed = JSON.parse(response.body);
    console.log("Status:", response.statusCode);
    console.log("Response:", parsed);
  })
  .catch((error) => {
    console.error("Caught error:", error);
  });
