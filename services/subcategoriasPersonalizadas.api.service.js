import connectToDatabase from "./connection.js";

const getAllSubCategoriasPersonalizadasByUserId = async (idUsuario) => {
    try {
        const connection = await connectToDatabase();
        const [subCategorias] = await connection.execute('SELECT * FROM subCategoriasPersonalizadas WHERE idUsuario = ?', [idUsuario]);
        await connection.end();
        return subCategorias;
    } catch (err) {
        throw err;
    }
};

const createSubCategoriaPersonalizada = async (idUsuario, subCategoria) => {
    try {
        const connection = await connectToDatabase();
        await connection.execute('INSERT INTO subCategoriasPersonalizadas (nombre, idUsuario, idCategoriaPersonalizada) VALUES (?, ?, ?)', [subCategoria.nombre, idUsuario, subCategoria.idCategoriaPersonalizada]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

const getSubCategoriaPersonalizadaById = async (id) => {
    try {
        const connection = await connectToDatabase();
        const [subCategoria] = await connection.execute('SELECT * FROM subCategoriasPersonalizadas WHERE idSubCategoriaPersonalizada = ?', [id]);
        await connection.end();
        return subCategoria;
    } catch (err) {
        throw err;
    }
};

const deleteSubCategoriaPersonalizada = async (id) => {
    try {
        const connection = await connectToDatabase();
        await connection.execute('DELETE FROM subCategoriasPersonalizadas WHERE idSubCategoriaPersonalizada = ?', [id]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

const updateSubCategoriaPersonalizada = async (id, nombre) => {
    try {
        const connection = await connectToDatabase();
        await connection.execute('UPDATE subCategoriasPersonalizadas SET nombre = ? WHERE idSubCategoriaPersonalizada = ?', [nombre, id]);
        await connection.end();
    } catch (err) {
        throw err;
    }
};

const getSubCategoriasByCategoriaPersonalizadaId = async (idCategoriaPersonalizada) => {
    try {
        const connection = await connectToDatabase();
        const [subCategorias] = await connection.execute('SELECT * FROM subCategoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [idCategoriaPersonalizada]);
        await connection.end();
        return subCategorias;
    } catch (err) {
        throw err;
    }
};

export {
    getAllSubCategoriasPersonalizadasByUserId,
    createSubCategoriaPersonalizada,
    getSubCategoriaPersonalizadaById,
    deleteSubCategoriaPersonalizada,
    updateSubCategoriaPersonalizada,
    getSubCategoriasByCategoriaPersonalizadaId
};
