import { handler } from "../functions/getCompanies.mjs";

handler()
  .then((response) => {
    console.log("Response:", JSON.parse(response.body));
  })
  .catch((error) => {
    console.error("Error:", error);
  });
