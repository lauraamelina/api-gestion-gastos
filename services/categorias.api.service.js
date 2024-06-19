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

export {
    getAllCategories
}