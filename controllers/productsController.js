const getAll = function(req, res, next) {
    const products = [{
            id: 10,
            name: 'Platillo Zildijan Crash 16`"`',
            price: 125,
            currency: 'USD'

        },
        {
            id: 20,
            name: 'Doble Pedal DW5000',
            price: 350,
            currency: 'USD'

        }, {
            id: 30,
            name: 'Paral tipo Boom',
            price: 180,
            currency: 'USD'

        }
    ];
    res.json(products);
}
module.exports = {
    getAll
};