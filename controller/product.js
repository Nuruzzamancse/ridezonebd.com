var Product = require('../model/product');

var createProduct = (req, res, next) => {
    console.log('this is create product');

    var name = req.body.name,
        description = req.body.description,
        price = req.body.price;

    var myProduct = new Product({
        name: name,
        description: description,
        price: price
    });

    myProduct.save((err, product) => {
        if(err) {
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: product
            });
        }
    });
};

var getProduct = (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: product
            });
        }
    });
}

var getAllProduct = (req, res, next) => {
    Product.find( (err, product) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: product
            });
        }
    });
}

var updateProduct = (req, res, next) => {
    var name = req.body.name,
        description = req.body.description,
        price = req.body.price;

    Product.findById(req.params.id, (err, product) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;

            product.save((err, product) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {
                    return res.status(200).json({
                        success: true,
                        data: product
                    });
                }
            });
        }
    });
}

var deleteProduct = (req, res, next) => {
    Product.findByIdAndRemove(req.params.id, (err) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                message: "Product deleted",
                success: true
            });
        }
    });
}

module.exports = {
    createProduct,
    getAllProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
