// controllers/controller.js
const {
    getCanciones,
    insertCancion,
    updateCancion,
    deleteCancion
} = require('../models/queries');


const home = (req, res) =>{
    res.sendFile(__dirname + 'views/index.html')
};

const getCancionesController = async (req, res) => {
    try {
        const canciones = await getCanciones();
        res.json(canciones);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener las canciones');
    }
};

const insertCancionController = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    try {
        const nuevaCancion = await insertCancion(titulo, artista, tono);
        res.json(nuevaCancion);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al insertar la canción');
    }
};

const updateCancionController = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    try {
        const cancionActualizada = await updateCancion(id, titulo, artista, tono);
        res.json(cancionActualizada);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar la canción');
    }
};

const deleteCancionController = async (req, res) => {
    const { id } = req.query;
    try {
        await deleteCancion(id);
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al eliminar la canción');
    }
};

module.exports = {
    getCancionesController,
    insertCancionController,
    updateCancionController,
    deleteCancionController,
    home
};
