const express = require("express");
const products = require("./products.json")

module.exports = function getRoutes() {
  const router = express.Router();

  router.get('/products', (req, res) => {
    res.status(200).json({ products })
  })

  return router;
};
