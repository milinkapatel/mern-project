import express from "express";
import { connectDB } from "./config/db.js";
import cros from "cors";

import productRoutes from "./routes/product.route.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cros());

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:"+PORT);
});
