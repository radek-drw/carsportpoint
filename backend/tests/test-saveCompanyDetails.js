import { handler } from '../functions/saveCompanyDetails.mjs';

const event = {
  body: JSON.stringify({
    name: 'Test Company',
    address: '123 Test St',
    phone: '123-456-7890',
    opening_hours: '9AM - 5PM',
    images: ['image1.jpg', 'image2.jpg'],
  }),
};

handler(event)
  .then((response) => console.log('Response:', response))
  .catch((error) => console.error('Error:', error));
