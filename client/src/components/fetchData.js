// api.js (or any other file)
import axios from 'axios';

export const fetchData = async (requestBody) => {
  try {

    // Make the first POST request to the server
    const response = await axios.post('http://localhost:3001/api/client-post', requestBody);

    console.log('Server Response:', response.data);
  } catch (error) {
    console.error('Error in first POST request:', error.message);
  }
};
