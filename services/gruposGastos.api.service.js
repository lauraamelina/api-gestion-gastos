import connectToDatabase from "./connection.js";

const getGruposGastosByUserId = async (idUser) => {
    try {
        const connection = await connectToDatabase()
        const [gruposGasto] = await connection.execute(`
            SELECT gg.* 
            FROM gruposGastos gg
            JOIN usuariosGruposGastos ug ON gg.idGrupoGasto = ug.idGrupoGasto
            WHERE ug.idUsuario = ?
        `, [idUser]);
        await connection.end()
        if (gruposGasto.length === 0) {
            throw new Error('El usuario no tiene Grupo de Gastos')
        }
        return gruposGasto;
    } catch (err) {
        throw err
    }
}

const addGrupoGasto = async (idUser, nombreGrupoGasto) => {
    try {
        const connection = await connectToDatabase();
        const [result] = await connection.execute(`
            INSERT INTO gruposGastos (nombre) VALUES (?)
        `, [nombreGrupoGasto]);

        const idGrupoGasto = result.insertId;

        await connection.execute(`
            INSERT INTO usuariosGruposGastos (idUsuario, idGrupoGasto) VALUES (?, ?)
        `, [idUser, idGrupoGasto]);

        await connection.end();
    } catch (err) {
        throw err;
    }
};

export {
    getGruposGastosByUserId,
    addGrupoGasto
}