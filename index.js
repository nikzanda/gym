const express = require('express')
const productRouter = require('./src/routers/product.router.js')

const app = express();

app.use('/products', productRouter);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
})