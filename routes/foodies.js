const router = require('express').Router();
const foodiesCtrl = require('../controllers/foodies');

router.get('/foodies', foodiesCtrl.index);
router.get('/foodies/new', foodiesCtrl.new);
router.post('/foodies/create', foodiesCtrl.create);

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;