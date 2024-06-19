import connectToDatabase from "./connection.js";

const getAllCategories = async () => {
    try {
        const connection = await connectToDatabase()
        const [categorias] = await connection.execute('SELECT * FROM categorias')
        await connection.end()
        return categorias
    } catch (err) {
        throw err;
    }
}


const getCategoriesById = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [categoria] = await connection.execute('SELECT * FROM categorias where idCategoria = ?', [id])
        await connection.end()
        return categoria
    } catch (err) {
        throw err;
    }
}

export {
    getAllCategories,
    getCategoriesById
}