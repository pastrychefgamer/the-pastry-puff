const router = require('express').Router();
const foodiesCtrl = require('../controllers/foodies');

router.get('/foodies', foodiesCtrl.index);
router.post('/posts', foodiesCtrl.addPost);
router.delete('/posts/:id', foodiesCtrl.delPost);
router.get('/:id', foodiesCtrl.show);

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
// }

module.exports = router;