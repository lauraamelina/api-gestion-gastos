import connectToDatabase from "./connection.js";

const getAllSubCategories = async () => {
    try {
        const connection = await connectToDatabase()
        const [subcategorias] = await connection.execute('SELECT * FROM subcategorias')
        await connection.end()
        return subcategorias
    } catch (err) {
        throw err;
    }
}

const getSubCategoriesById = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [subcategoria] = await connection.execute('SELECT * FROM subcategorias where idSubCategoria = ?', [id])
        await connection.end()
        return subcategoria
    } catch (err) {
        throw err;
    }
}

const getSubCategoriaByCategoriaId = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [subcategorias] = await connection.execute('SELECT * FROM subcategorias where idCategoria = ?', [id])
        await connection.end()
        return subcategorias
    } catch (err) {
        throw err;
    }
}

export {
    getAllSubCategories,
    getSubCategoriesById,
    getSubCategoriaByCategoriaId
}