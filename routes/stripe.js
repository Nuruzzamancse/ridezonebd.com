let express = require('express'),
    router = express.Router(),
    stripeController = require('../controller/stripe');
router.post('/charge', stripeController.confirmPayment);

module.exports = router;