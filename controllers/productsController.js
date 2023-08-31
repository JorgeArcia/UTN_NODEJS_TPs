const productModel = require('../models/productsModel');

// getAll
const getAll = async function(req, res, next) {
    try {
        const products = await productModel.find();

        res.status(200).json(products);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// getById
const getById = async function(req, res, next) {
    try {
        const product = await productModel.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// Create
const create = async function(req, res, next) {
    try {
        const checkProduct = await productModel.findOne({ name: req.body.name }).exec();
        if (checkProduct) {
            let message = "Existe un producto con mismo nombre";
            res.status(200).json(message);
        } else {
            const product = new productModel(req.body);

            const oSaveProduct = await product.save();
            res.status(200).json(oSaveProduct);
        };
    } catch (error) {
        res.status(400).json(error.message);
    }
};

//  Update
const update = async function(req, res, next) {
    try {
        await productModel.updateOne({ _id: req.params.id }, req.body);

        res.status(204).send("Update product success");
    } catch (error) {
        res.status(400).json(error.message);
    }
};

// Delete
const deleteProductById = async function(req, res, next) {
    try {
        await productModel.deleteOne({ _id: req.params.id });

        res.status(200).json();
    } catch (error) {
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