const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3333;
const client = require('../db/connect');

app.use(express.json());
app.use(cors());
client.connect();

app.get('/getCustomers', async (req, res) => {
  try {
    const data = await client.query('SELECT $1::text as message', ['Teste']);
    return res.json({message: data.rows[0].message});
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => console.log('running...'));
