const pool = require('../config/db');

const addSong = async (titulo, artista, tono) => {
    const query = 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3)';
    const values = [titulo, artista, tono];
    await pool.query(query, values);
};

const getSongs = async () => {
    const query = 'SELECT * FROM canciones';
    const result = await pool.query(query);
    return result.rows;
};

const updateSong = async (id, titulo, artista, tono) => {
    const query = 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4';
    const values = [titulo, artista, tono, id];
    await pool.query(query, values);
};

const deleteSong = async (id) => {
    const query = 'DELETE FROM canciones WHERE id = $1';
    const values = [id];
    await pool.query(query, values);
};

module.exports = {
    addSong,
    getSongs,
    updateSong,
    deleteSong,
};
