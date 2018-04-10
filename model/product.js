var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String},
    code:{type: String},
    description: { type: String },
    picture: { type: String},
    price: { type: String},
    category: {type: String},
    availability: {typ: Number}
});

module.exports = mongoose.model('Product', productSchema);