var Category = require('../model/category');



var createCategory = (req, res, next) => {

    console.log('this is create product');



    var
        //picture = req.file.filename ,
        category = req.body.category



    var myCategory = new Category({
        category: category
    });
    myCategory.save((err, category) => {
        console.log('In save');
        if(err) {
            console.log('In save error ' + err);
            return res.status(404).json({

                message: err,
                success: false
            });
        }
        else {

            return res.status(200).json({
                success: true,
                data: category
            });


        }
    });




};


var getCategory = (req, res, next) => {
    Category.findById(req.params.id, (err, category) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: category
            });
        }
    });
}

var getAllCategory = (req, res, next) => {
    Category.find( (err, category) => {
        if(err){
            return res.status(404).json({
                message: err,
                success: false
            });
        }
        else {
            return res.status(200).json({
                success: true,
                data: category
            });
        }
    });
}

var updatecategory = (req, res, next) => {


            console.log('In upload yes');

            var category = req.body.category;

            Category.findById(req.params.id, (err, categorY) => {
                if(err){
                    return res.status(404).json({
                        message: err,
                        success: false
                    });
                }
                else {

                    categorY.category = category || categorY.category;

                    categorY.save((err, category) => {
                        if(err){
                            return res.status(404).json({
                                message: err,
                                success: false
                            });
                        }
                        else {
                            return res.status(200).json({
                                success: true,
                                data: category
                            });
                        }
                    });
                }
            });

}

var deletecategory = (req, res, next) => {
    Category.findByIdAndRemove(req.params.id, (err) => {
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

    createCategory,
    getCategory,
    getAllCategory,
    updatecategory,
    deletecategory

}
