let products = require('./../controllers/products');


module.exports = function(app){
    // get one
    app.get('/products/', products.index)
    // post
    app.post('/products/', products.create)
    // get one
    app.get('/products/:id', products.show)
    // update
    app.put('/products/:id', products.update)
    // delete
    app.delete('/products/:id', products.destroy)

}