const productModel = require('../models/productsModel');

// getAll
const getAll = async function(req, res, next) {
    try {
        console.log(req.query);
        const products = await productModel.find();

        res.status(200).json(products);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

// getById
const getById = async function(req, res, next) {
    try {
        console.log(req.query);
        console.log(req.params.id);
        const product = await productModel.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

// Create
const create = async function(req, res, next) {
    try {
        console.log(req.query);
        const product = new productModel({
            name: req.body.name,
            price: req.body.price,
            currency: req.body.currency,
            amount: req.body.amount
        });

        const oSaveProduct = await product.save();
        res.status(200).json(oSaveProduct);
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

//  Update
const update = async function(req, res, next) {
    try {
        console.log(req.params.id);
        console.log(req.body);
        console.log(req.query);
        await productModel.updateOne({ _id: req.params.id }, req.body);

        res.status(204).send("Update product success");
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

// Delete
const deleteProductById = async function(req, res, next) {
    try {
        console.log(req.params.id);
        console.log(req.query);
        await productModel.deleteOne({ _id: req.params.id });

        res.status(200).json();
    } catch (error) {
        console.log(error);
        res.status(400).json(error.message);
    }
};

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteProductById
};