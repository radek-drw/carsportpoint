import axios from 'axios';

const SEND_CONTACT_FORM_URL =
  'https://qxzl1w9qrh.execute-api.eu-west-1.amazonaws.com/sendContactForm';

export const sendContactForm = async (formData) => {
  const response = await axios.post(SEND_CONTACT_FORM_URL, formData);

  if (!response.data.success) {
    throw new Error('Form submission failed on server');
  }

  return response.data;
};
