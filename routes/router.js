const express = require('express');
const {
  addSongController,
  getSongsController,
  updateSongController,
  deleteSongController,
} = require('../controllers/controller');

const router = express.Router();

router.post('/cancion', addSongController);
router.get('/canciones', getSongsController);
router.put('/cancion/:id', updateSongController);
router.delete('/cancion', deleteSongController);

module.exports = router;