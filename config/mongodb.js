const mongoose = require('mongoose');

mongoose
    .connect(`mongodb://127.0.0.1:27017/TP_UNIDAD2`)
    .then(() => {
        console.log("Conectado");
    })
    .catch((error) => console.log(error));

module.exports = mongoose;