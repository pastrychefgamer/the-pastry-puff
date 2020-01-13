const router = require('express').Router();
const candiesCtrl = require('../controllers/candies');

router.get('/candies', candiesCtrl.index);

module.exports = router;