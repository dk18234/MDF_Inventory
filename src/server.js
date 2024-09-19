const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

// PostgreSQL connection setup
const pool = new Pool({
  user: 'your_user',
  host: 'localhost',
  database: 'ondemand',
  password: '9599',
  port: 5432,
});

const app = express();
app.use(bodyParser.json());

app.post('/add-product', (req, res) => {
  const { productName, productQuantity } = req.body;

  const query = 'INSERT INTO mdf1 (name, numberofitems) VALUES ($1, $2)';
  pool.query(query, [productName, productQuantity], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`Product added with Name: ${productName}`);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
