// models/queries.js
const pool = require('../config/db');

const getCanciones = async () => {
    const query = 'SELECT * FROM canciones ORDER BY id';
    const { rows } = await pool.query(query);
    return rows;
};

const insertCancion = async (titulo, artista, tono) => {
    const query = 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *';
    const values = [titulo, artista, tono];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const updateCancion = async (id, titulo, artista, tono) => {
    const query = 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 RETURNING *';
    const values = [titulo, artista, tono, id];
    const { rows } = await pool.query(query, values);
    return rows[0];
};

const deleteCancion = async (id) => {
    const query = 'DELETE FROM canciones WHERE id = $1';
    await pool.query(query, [id]);
};

module.exports = {
    getCanciones,
    insertCancion,
    updateCancion,
    deleteCancion
};
