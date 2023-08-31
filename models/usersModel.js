const mongoose = require('../config/mongodb');
const bcrypt = require("bcrypt");

const usersSchema = mongoose.Schema({
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

usersSchema.pre("save", function(next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});


const usersModel = mongoose.model("Users", usersSchema);

module.exports = usersModel;