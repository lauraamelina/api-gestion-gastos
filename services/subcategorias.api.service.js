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

export {
    getAllSubCategories
}