var express = require('express');
var router = express.Router();
var productController = require('../controller/product');
var authConttoller = require('../controller/auth');

router.post('/', authConttoller.userAuthenticate, productController.createProduct);
router.get('/:id', productController.getProduct);
router.get('/', productController.getAllProduct);
router.patch('/:id', authConttoller.userAuthenticate, productController.updateProduct);
router.delete('/:id', authConttoller.userAuthenticate, productController.deleteProduct);

module.exports = router;