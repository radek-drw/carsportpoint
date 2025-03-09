import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from "uuid"; // Importing uuid to generate a unique ID

// Initialize DynamoDB client
const client = new DynamoDBClient({ region: "eu-west-1" });
const TABLE_NAME = "companies"; // The name of your DynamoDB table

export const handler = async (event) => {
  const data = JSON.parse(event.body); // Receiving data from the form
  const { name, address, phone, opening_hours, images } = data; // Destructuring the data

  const item = {
    id: uuidv4(), // Use uuidv4 to generate a unique ID
    name,
    address,
    phone,
    opening_hours,
    images, // If you are uploading images, ensure they have links to S3
  };

  // Prepare the PutItem command to insert data into DynamoDB
  const command = new PutItemCommand({
    TableName: TABLE_NAME,
    Item: item, // The item to be inserted
  });

  try {
    // Send the command to DynamoDB
    await client.send(command);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Company details saved successfully" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to save data" }),
    };
  }
};
