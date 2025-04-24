import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";

const ssmClient = new SSMClient({ region: "eu-west-1" });

export const handler = async (event) => {
  try {
    // Retrieve parameter from Parameter Store
    const param = await ssmClient.send(
      new GetParameterCommand({
        Name: "/amplify/shared/d15pql8ca0vxrn/GOOGLE_MAPS_API_KEY",
        WithDecryption: true,
      })
    );

    const apiKey = param.Parameter.Value;

    if (!apiKey) {
      throw new Error("API Key is missing.");
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Secret retrieved successfully" }),
    };
  } catch (error) {
    console.error("Error retrieving secret:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
