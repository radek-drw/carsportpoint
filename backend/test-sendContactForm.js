import { handler } from "./sendContactForm.mjs";

const testEvent = {
  body: JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123456789",
    subject: "Request for Proposal",
    message: "Hello, I would like to learn more about your services.",
  }),
};

handler(testEvent)
  .then((response) => {
    console.log("Response:", JSON.parse(response.body));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
