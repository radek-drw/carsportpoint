import { handler } from "./getCompanies.js";

handler()
  .then((response) => {
    console.log("Response:", JSON.parse(response.body));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
