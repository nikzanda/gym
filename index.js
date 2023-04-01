import express from "express"
import { productRouter } from "./src/routers/index.js";

const app = express();

app.use('/products', productRouter);

const PORT = 3000
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
})