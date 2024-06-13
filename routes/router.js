// routes/routes.js
const express = require('express');
const router = express.Router();
const {
  getCancionesController,
  insertCancionController,
  updateCancionController,
  deleteCancionController,
  home
} = require('../controllers/controller');


router.get('/', home);
router.get('/canciones', getCancionesController);
router.post('/cancion', insertCancionController);
router.put('/cancion/:id', updateCancionController);
router.delete('/cancion', deleteCancionController);

module.exports = router;
