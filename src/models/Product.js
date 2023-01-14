const mongoose = require('mongoose')

const  ProductSchema= new mongoose.Schema({
    productName: {
       type: String,
       required: true
    },
    productDescription: {
        type: String,
    }, 
    productPrice: {
        type: Number,
        required: true
    }, 
    productQuantity: {
        type: Number,
        required: true
    }, 
    productImage: {
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
})


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
