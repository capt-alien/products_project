let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
    name: {
        type:String,
        trim: true,
        required:[true, "You need to name your new product"],
        minlength:[4, "Name needs at least 4 Char."]
    },
    quantity: {
        type: Number,
        required:[true, "You need to have product in stock to enter it in"],
        min:[1, "you need to have at least one in stock"]
    },
    price:{
        type: Number,
        required:[true, "You need a price for your product"],
        min:[1, "Products need to cost more than $1"]
    }
}, {timestamp:true});

// Model
mongoose.model('Product', productSchema);
