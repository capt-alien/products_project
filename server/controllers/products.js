let Product = require('mongoose').model('Product');
let errorHandler = require('./helpers/error-Handler');


module.exports = {
    index(req, res){
        Product.find(req.body)
        .then(products=>res.json(products)) //spits out json
        .catch(errorHandler.bind(res));
    },
    // CREATE
    create(req,res){
        Product.create(req.body)
        .then(product => res.json(product))
        .catch(errorHandler.bind(res));
    },
    // SHOW
    show(req,res){
        Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(errorHandler.bind(res));
    },
    // update
    update(req, res) {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, { new: true })
        .then(product => res.json(product))
        .catch(errorHandler.bind(res));
    },
    // DESTROY
    destroy(req,res){
        Product.findOneAndDelete({_id:req.params.id})
        .then(result => res.json(result))
        .catch(errorHandler.bind(res));
    }
};