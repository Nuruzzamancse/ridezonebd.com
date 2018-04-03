var express = require('express');
var router = express.Router();
var userController = require('../controller/user');
var authController = require('../controller/auth');

router.post('/', userController.createUser);
router.get('/', authController.adminAuthenticate, userController.getAllUser);
router.get('/:id', authController.adminAuthenticate, userController.getUser);
router.delete('/:id', authController.adminAuthenticate, userController.deleteUser);
router.patch('/:id', authController.adminAuthenticate, userController.updateUser);

module.exports = router;