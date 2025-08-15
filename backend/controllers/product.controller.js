import Product from "../models/product.model.js";
import mongoose from "mongoose";

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    console.log('Fetching products from database', products);
    
    res.status(200).json({success: true, data: products});
  } catch (error) {
    console.log('Error occured while fetching products: ', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
}

const getAllProducts = async (req, res) => {
  const product = req.body;
  console.log('reqeust body: ', req.body);
  
  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false, message: "Please provide all the fields"});
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(301).json({success: true, data: newProduct});
  } catch (error) {
    console.log('Error occured while creating product: ', error.message);
    res.status(500).json({success: false, message: "Server Error"});
    
  }
}

const deleteProduct = async (req, res) => {
  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid product ID"});
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product deleted successfully"});
  } catch (error) {
    console.log('Error occured while deleting product: ', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
  
}

const updateProduct = async (req, res) => {
  const {id} = req.params;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: "Invalid product ID"});
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
    res.status(200).json({success: true, data: updatedProduct});
  } catch (error) {
    console.log('Error occured while updating product: ', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
  
}

export { getProducts , getAllProducts , deleteProduct, updateProduct };