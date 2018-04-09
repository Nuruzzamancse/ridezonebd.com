var express = require('express');
var router = express.Router();
var categoryController = require('../controller/category');
var authConttoller = require('../controller/auth');

router.post('/', categoryController.createCategory);
router.patch('/:id', categoryController.updatecategory);
router.get('/:id', categoryController.getCategory);
router.get('/', categoryController.getAllCategory);
//router.patch('/:id', productController.updateProduct);
router.delete('/:id', authConttoller.userAuthenticate, categoryController.deletecategory);

module.exports = router;