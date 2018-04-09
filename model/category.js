var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({

    category: {type: String}
});

module.exports = mongoose.model('Category', categorySchema);