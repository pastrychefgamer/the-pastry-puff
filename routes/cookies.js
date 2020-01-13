const router = require('express').Router();
const cookiesCtrl = require('../controllers/cookies');

router.get('/cookies', cookiesCtrl.index);

module.exports = router;