const express = require('express');
const router = express.Router();
const roomsCtrl = require('../controllers/rooms');

router.post('/', roomsCtrl.create);
router.get('/', roomsCtrl.index);
router.get('/:id', roomsCtrl.show);
router.post('/:id/comments', roomsCtrl.addComment);

module.exports = router;