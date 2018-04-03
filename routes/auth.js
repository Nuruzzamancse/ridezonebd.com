var express = require('express'),
    router = express.Router(),
    authController = require('../controller/auth');

router.post('/login', authController.userLogin);

module.exports = router;