const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/api/client-post', (req, res) => {
  const clientData = req.body;

  console.log('Received data from client:', clientData);

  const externalServerUrl = 'https://www.whoopconnect.com/api/affiliate/test/CreateOrder/';
  const username = 'db91e4b5-9b27-4f4c-8e68-32694ea97f36';
  const password = '52853e03-102f-4a21-b44c-55d32482fb32';
  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

  axios.post(externalServerUrl, clientData, {
    headers: {
      Authorization: `Basic ${base64Credentials}`,
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    res.json({ resultFromExternalServer: response.data });
  })
  .catch(error => {
    console.error('Error in second POST request:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});