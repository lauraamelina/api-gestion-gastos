import connectToDatabase from "./connection.js";

const getUserById = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [user] = await connection.execute('SELECT * from usuarios where idUsuario = ?', [id])
        if (user.length === 0) {
            throw new Error('No se encontró el usuario')
        }
        await connection.end()
        return user
    } catch (err) {
        console.error("Error al encontrar el usuario: ", err)
        throw err
    }
}

export {
    getUserById
}