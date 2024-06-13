const { addSong, getSongs, updateSong, deleteSong } = require('../models/queries');

const addSongController = async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body;
        await addSong(titulo, artista, tono);
        res.status(201).send('Canción agregada exitosamente');
    } catch (error) {
        res.status(500).send('Error agregando canción');
    }
};

const getSongsController = async (req, res) => {
    try {
        const songs = await getSongs();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).send('Error obteniendo canciones');
    }
};

const updateSongController = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, artista, tono } = req.body;
        await updateSong(id, titulo, artista, tono);
        res.status(200).send('Canción actualizada exitosamente');
    } catch (error) {
        res.status(500).send('Error actualizando canción');
    }
};

const deleteSongController = async (req, res) => {
    try {
        const { id } = req.query;
        await deleteSong(id);
        res.status(200).send('Canción eliminada exitosamente');
    } catch (error) {
        res.status(500).send('Error eliminando canción');
    }
};

module.exports = {
    addSongController,
    getSongsController,
    updateSongController,
    deleteSongController,
};