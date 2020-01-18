const express = require('express');
const router = express.Router();
const roomsCtrl = require('../controllers/rooms');

router.post('/', roomsCtrl.create);
router.get('/', roomsCtrl.index);
router.get('/:id', isAuthenticated, roomsCtrl.show);
router.post('/:id/comments', isAuthenticated, roomsCtrl.addComment);
router.delete('/:roomId/comments/:commentId', isAuthenticated, roomsCtrl.delete)

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/');
};

module.exports = router;