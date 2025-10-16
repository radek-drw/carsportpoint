import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { v4 as uuidv4 } from 'uuid';

const dynamoClient = new DynamoDBClient({ region: 'eu-west-1' });
const TABLE_NAME = 'companies';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export const handler = async (event) => {
  const data = JSON.parse(event.body);
  const { name, address, phone, opening_hours, images } = data;

  const item = {
    id: { S: uuidv4() },
    name: { S: name },
    address: { S: address },
    phone: { S: phone },
    opening_hours: { S: opening_hours },
    images: { L: images.map((image) => ({ S: image })) },
  };

  const command = new PutItemCommand({
    TableName: TABLE_NAME,
    Item: item,
  });

  try {
    await dynamoClient.send(command);

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({ message: 'Company details saved successfully' }),
    };
  } catch (error) {
    console.error('Error saving data to DynamoDB:', error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: 'Failed to save data',
        details: error.message,
      }),
    };
  }
};
