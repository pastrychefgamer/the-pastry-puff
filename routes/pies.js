const router = require('express').Router();
const piesCtrl = require('../controllers/pies');

router.get('/pies', piesCtrl.index);

module.exports = router;