const router = require('express').Router();
const cakesCtrl = require('../controllers/cakes');

router.get('/cakes', cakesCtrl.index);

module.exports = router;