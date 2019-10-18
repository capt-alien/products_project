let fs = require('fs');
let path = require('path');
let mongoose = require('mongoose');

// connect to Mongodb
mongoose.connect('mongodb://localhost/products',
                {useNewUrlParser: true, useUnifiedTopology: true})

// Create variable that points to models folder
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js') >= 0){
        require(models_path + '/' + file);
    }
})
