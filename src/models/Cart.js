const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    products:[{ 
       type: mongoose.Schema.Types.ObjectId,
       ref: 'Product'
    }],
    name: {
        type: mongoose.Schema.Types.ObjectId,
        required: 'User'
    },
    adress: {
        street:{
            type: String,
            required: true
        },
        number:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        }
    },
    payment: {
        card: {
            number:{
                type:String
            },
            cvc: {
                type: String
            }
        }
    }
})

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;