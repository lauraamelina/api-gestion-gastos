import connectToDatabase from "./connection";

const getAllCategoriasPersonalizasByUserId = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [categorias] = connection.execute('SELECT * FROM categoriaspersonalizas WHERE idUsuario = ?', [id])
        await connection.end()
        return categorias
    } catch (err) {
        throw err
    }
}

const createCategoriaPersonalizada = async (id, categoria) => {
    try {
        const connection = await connectToDatabase()
        await connection.execute('INSERT INTO categoriaspersonalizadas(nombre, idUsuario) VALUES (?,?)',
            [categoria.nombre, id]
        )
    } catch (err) {
        throw err
    }
}

export {
    getAllCategoriasPersonalizasByUserId,
    createCategoriaPersonalizada
}