import connectToDatabase from "./connection.js";

const getGastosByUsuarioId = async (id) => {
    try {
        const connection = await connectToDatabase();
        const [gastos] = await connection.execute('SELECT * FROM gastos WHERE idUsuario = ?', [id])
        if (gastos.length === 0) {
            throw new Error('El usuario no tiene gastos')
        }
        await connection.end()
        return gastos
    } catch (err) {
        throw err
    }
}

export {
    getGastosByUsuarioId
}