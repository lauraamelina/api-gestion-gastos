import connectToDatabase from "./connection.js";

const getAllCategoriasPersonalizadasByUserId = async (id) => {
    try {
        const connection = await connectToDatabase();
        const [categorias] = await connection.execute('SELECT * FROM categoriasPersonalizadas WHERE idUsuario = ?', [id]);
        await connection.end();
        return categorias;
    } catch (err) {
        throw err;
    }
};

const createCategoriaPersonalizada = async (id, categoria) => {
    try {
        const connection = await connectToDatabase();
        await connection.execute('INSERT INTO categoriasPersonalizadas (nombre, idUsuario) VALUES (?, ?)', [categoria.nombre, id]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

const getCategoriaPersonalizadaById = async (id) => {
    try {
        const connection = await connectToDatabase();
        const [categoria] = await connection.execute('SELECT * FROM categoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [id]);
        await connection.end();
        return categoria;
    } catch (err) {
        throw err;
    }
};

const deleteCategoriaPersonalizada = async (id) => {
    try {
        const connection = await connectToDatabase();
        const [categoria] = await connection.execute('SELECT * FROM categoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [id]);
        if (categoria.length === 0) {
            throw new Error('Categoría personalizada no encontrada');
        }
        await connection.execute('DELETE FROM categoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [id]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

const updateCategoriaPersonalizada = async (id, nombre) => {
    try {
        const connection = await connectToDatabase();
        const [categoria] = await connection.execute('SELECT * FROM categoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [id]);
        if (categoria.length === 0) {
            throw new Error('Categoría personalizada no encontrada');
        }
        await connection.execute('UPDATE categoriasPersonalizadas SET nombre = ? WHERE idCategoriaPersonalizada = ?', [nombre, id]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

export {
    getAllCategoriasPersonalizadasByUserId,
    createCategoriaPersonalizada,
    getCategoriaPersonalizadaById,
    deleteCategoriaPersonalizada,
    updateCategoriaPersonalizada
};
