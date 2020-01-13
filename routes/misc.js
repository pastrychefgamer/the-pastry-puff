const router = require('express').Router();
const miscCtrl = require('../controllers/misc');

router.get('/misc', miscCtrl.index);

module.exports = router;