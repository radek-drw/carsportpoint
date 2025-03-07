import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({ region: "eu-west-1" });
const TABLE_NAME = "companies";

export const handler = async (event) => {
  try {
    const command = new ScanCommand({ TableName: TABLE_NAME });
    const data = await client.send(command);

    // Convert each DynamoDB item to standard JSON
    const formattedData = data.Items.map((item) => unmarshall(item));

    return {
      statusCode: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
      body: JSON.stringify(formattedData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error", error: error.message }),
    };
  }
};
