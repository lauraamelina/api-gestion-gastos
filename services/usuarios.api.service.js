import connectToDatabase from "./connection.js";
import bcrypt from 'bcrypt'

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
        console.error(err)
        throw err
    }
}

const createUser = async (newUser) => {
    try {
        const connection = await connectToDatabase()
        const [users] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [newUser.email])
        if (users.length > 0) {
            throw new Error('Ya existe un usuario con ese email')
        }
        const passwordHash = await bcrypt.hash(newUser.password, 10)
        await connection.execute('INSERT INTO usuarios(email, password, nombre) VALUES (?,?,?)',
            [newUser.email, passwordHash, newUser.nombre]
        )
        await connection.end()
    } catch (error) {
        throw error
    }
}

export {
    getUserById,
    createUser
}