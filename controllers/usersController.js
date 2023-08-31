const usersModel = require('../models/usersModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAll = async function(req, res, next) {
    try {
        const users = await usersModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const create = async function(req, res, next) {
    try {
        const checkUser = await usersModel.findOne({ email: req.body.email }).exec();
        if (checkUser) {
            let message = "Existe un usuario con mismo email";
            res.status(200).json(message);
        } else {
            const user = new usersModel(req.body);

            const oSaveUser = await user.save();
            res.status(201).json(oSaveUser);
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
};

const login = async function(req, res, next) {
    try {
        const user = await usersModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: "El email y/o contraseña son incorrectos" });
        };
        if (bcrypt.compareSync(req.body.password, user.password)) {
            const token = jwt.sign({ userId: user._id },
                req.app.get("secretKey"), {
                    expiresIn: "1h",
                }
            );
            res.status(200).json(token);
        } else {
            return res.json({ message: "El email y/o contraseña son incorrectos" })
        };
    } catch (error) {
        next(error)
    };
};


module.exports = {
    create,
    getAll,
    login
};