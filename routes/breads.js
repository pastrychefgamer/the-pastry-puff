const router = require('express').Router();
const breadsCtrl = require('../controllers/breads');

router.get('/breads', breadsCtrl.index);

module.exports = router;