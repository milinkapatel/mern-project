import express from "express";
import { getProducts , getAllProducts, deleteProduct, updateProduct} from "../controllers/product.controller.js";
const router = express.Router();

// get products

router.get("/", getProducts);

// create products

router.post("/", getAllProducts);

// delete products

router.delete("/:id", deleteProduct);

// update products

router.put("/:id", updateProduct);

export default router;