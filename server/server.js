const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors'); // Import the cors middleware
const app = express();

app.get('/api', (req, res) => {
  res.json({ 'name': ['one', 'two', 'three'] });
});


app.use(cors());
app.use(bodyParser.json());

app.get('/api/clientPost', (req, res) => {
  const clientData = {
    "api_key": "27f4ea3c-4f85-4748-ab57-36d4d6c14ab3",
    "applicant_first_name": "string",
    "applicant_last_name": "string",
    "applicant_birthday": "2023-02-22",
    "applicant_ssn": "2365",
    "applicant_tribal_id": "string",
    "applicant_alt_contact_name": "string",
    "applicant_last_name_two": "string",
    "applicant_middle_name": "string",
    "applicant_suffix": "string",
    "service_street_address_one": "string",
    "service_street_address_two": "string",
    "service_zip_code": "32564",
    "service_city": "string",
    "service_state": "string",
    "program_code": " IMPORTANT **",
    "phone_number": "0987654321",
    "email": "string",
    "is_tablet_approved_and_paid": "true",
    "best_way_to_communicate": "string@gmail.com",
    "service_same_as_mailing": "true",
    "payment_type": "string",
    "payment_processor": "string",
    "payment_id":"string:",
    "mailing_street_address_one": "string",
    "mailing_street_address_two": "string",
    "mailing_city": "string",
    "mailing_state": "string: 2 characters",
    "mailing_zip_code": "65473",
    "bqp_birthday": "2021-02-21",
    "bqp_first_name": "string",
    "bqp_last_name": "string",
    "bqp_middle_name": "string",
    "bqp_ssn": "4324",
    "bqp_suffix": "string",
    "bqp_tribal_id": "string",
    "bqp_alt_name": "string",
    "bqp_last_name_two": "string"
};

  const externalServerUrl = 'https://www.whoopconnect.com/api/affiliate/test/CreateOrder/';
  const username = 'db91e4b5-9b27-4f4c-8e68-32694ea97f36';
  const password = '52853e03-102f-4a21-b44c-55d32482fb32';
  const base64Credentials = Buffer.from(`${username}:${password}`).toString('base64');

  axios.post(externalServerUrl, clientData, {
    headers: {
      Authorization: `Basic ${username}:${password}`,
      'Content-Type': 'application/json',
    },
  })
  .then(response => {
    res.json({ resultFromExternalServer: response.data });
  })
  .catch(error => {
    console.error('Error in second POST request:', error.status_code);
    res.status(500).json({ message: `Internal Server Error ${error}` });
  });

  // res.status(200).json({ message: `POST request received successfully${clientData}` });
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});