// api.js (or any other file)
import axios from 'axios';

export const fetchData = async (apiUrl, requestBody, base64Credentials) => {
  try {
    const response = await axios.post(apiUrl, requestBody, {
      headers: {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/json',
      },
    });

    // Handle the API response data
    console.log(response.data);

    // Return the response data or perform any other actions if needed
    return response.data;
  } catch (error) {
    // Handle errors
    console.error('Error:', error);

    // Optionally rethrow the error or return an error object
    throw error;
  }
};
