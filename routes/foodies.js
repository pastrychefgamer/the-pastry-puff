const router = require('express').Router();
const foodiesCtrl = require('../controllers/foodies');

router.get('/foodies', foodiesCtrl.index);

module.exports = router;