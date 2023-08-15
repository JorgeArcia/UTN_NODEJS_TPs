const mongoose = require('../config/mongodb');

const productShema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    currency: {
        type: String
    },
    amount: {
        type: Number
    }
});

const productsModel = mongoose.model("Products", productShema);

module.exports = productsModel;