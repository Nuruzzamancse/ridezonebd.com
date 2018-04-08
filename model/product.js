var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String},
    description: { type: String },
    picture: { type: String},
    price: { type: String}
});

module.exports = mongoose.model('Product', productSchema);