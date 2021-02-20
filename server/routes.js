require('dotenv').config()
const express = require("express");
const products = require("./products.json")

module.exports = function getRoutes() {
  const router = express.Router();

  router.get('/products', getProducts)
  router.get('/products/:productId', getProduct)

  return router;
};

function getProducts(req, res) {
  res.status(200).json({ products })
}

function getProduct(req, res) {
  const { productId } = req.params
  const product = products.find(product => product.id === productId)
  try {
    if (!product) {
      throw Error(`No product found for id: ${productId}`)
    }
    res.status(200).json({ product })
  } catch (error) {
    return res.status(400).json({ statusCode: 404, message: error.message })
  }
}
