const mongoose = require("mongoose");
require('./config')

const productSchema = new mongoose.Schema({
name: String,
price: Number,
brand: String,
category: String
})

module.exports= mongoose.model("product", productSchema);