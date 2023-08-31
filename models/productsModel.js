const mongoose = require('../config/mongodb');

const productShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "El campo es obligatorio"],
    },
    price: {
        type: Number,
        required: [true, "El campo es obligatorio"],
    },
    code: {
        type: String,
        required: [true, "El campo es obligatorio"],
    },
    description: {
        type: String,
        required: [true, "El campo es obligatorio"],
    },
    category: {
        type: String,
        required: [true, "El campo es obligatorio"],
    }
});

const productsModel = mongoose.model("Products", productShema);

module.exports = productsModel;