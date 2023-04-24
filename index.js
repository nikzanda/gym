const express = require('express');
const path = require('path');
const dotenv = require('dotenv-safe');

const productRouter = require('./src/routers/product.router');

dotenv.config({
  allowEmptyValues: true,
  path: path.join(__dirname, `.env.${process.env.NODE_ENV || 'development'}`),
});

const PORT = process.env.APP_PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productRouter);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});
