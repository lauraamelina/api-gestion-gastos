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

const getGrupoGastoById = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [grupoGasto] = await connection.execute(`
            SELECT * 
            FROM gruposGastos 
            WHERE idGrupoGasto = ?
        `, [id]);
        await connection.end()
        if (grupoGasto.length === 0) {
            throw new Error('No existe el grupo gasto')
        }
        return grupoGasto;
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

const removeGrupoGasto = async (idUser, idGrupoGasto) => {
    try {
        const connection = await connectToDatabase();
        const [existingRelation] = await connection.execute(`
            SELECT * FROM usuariosGruposGastos WHERE idUsuario = ? AND idGrupoGasto = ?
        `, [idUser, idGrupoGasto]);

        if (existingRelation.length === 0) {
            await connection.end();
            throw new Error('La relación entre usuario y grupo de gasto no existe');
        }
        await connection.execute(`
            DELETE FROM usuariosGruposGastos WHERE idUsuario = ? AND idGrupoGasto = ?
        `, [idUser, idGrupoGasto]);
        await connection.execute(`
            DELETE FROM gruposGastos WHERE idGrupoGasto = ?
        `, [idGrupoGasto]);

        await connection.end();
    } catch (err) {
        throw err;
    }
};

const updateGrupoGasto = async (idGrupoGasto, nombre) => {
    try {
        const connection = await connectToDatabase();
        const [result] = await connection.execute(`
            UPDATE gruposGastos SET nombre = ? WHERE idGrupoGasto = ?
        `, [nombre, idGrupoGasto]);
        await connection.end();
        if (result.affectedRows === 0) {
            throw new Error('El grupo de gasto no existe');
        }
    } catch (err) {
        throw err;
    }
};

const shareGrupoGasto = async (idUser, idGrupoGasto) => {
    try {
        const connection = await connectToDatabase();

        const [existingRelation] = await connection.execute(`
            SELECT * FROM usuariosGruposGastos WHERE idUsuario = ? AND idGrupoGasto = ?
        `, [idUser, idGrupoGasto]);

        if (existingRelation.length > 0) {
            await connection.end();
            throw new Error('El usuario ya está asociado a este grupo de gasto');
        }

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
    getGrupoGastoById,
    addGrupoGasto,
    removeGrupoGasto,
    updateGrupoGasto,
    shareGrupoGasto
}