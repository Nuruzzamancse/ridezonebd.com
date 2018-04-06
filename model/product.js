var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: true},
    price: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);