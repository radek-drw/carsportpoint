import { handler } from "../functions/sendContactForm.mjs";

const testEvent = {
  body: JSON.stringify({
    name: "",
    email: "john.doe@example.com",
    phone: "",
    subject: "asdasd",
    message: "adasdasd",
    files: [
      {
        url: "https://s3.amazonaws.com/fake-bucket/sample1.pdf",
        name: "sample1.pdf",
        size: 1048576,
        type: "application/pdf",
      },
      {
        url: "https://s3.amazonaws.com/fake-bucket/image.png",
        name: "image.png",
        size: 5242880,
        type: "image/png",
      },
    ],
    customConfig: {
      name: {
        required: false,
      },
      phone: {
        required: false,
      },
    },
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
