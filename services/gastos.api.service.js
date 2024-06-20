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

const addGasto = async (data) => {
    const {
        idCategoria,
        idSubCategoria,
        idCategoriaPersonalizada,
        idSubcategoriaPersonalizada,
        detalle,
        monto,
        idUsuario,
        idGrupoGasto,
        fecha
    } = data;

    try {
        const connection = await connectToDatabase();
        if (idCategoria && idSubCategoria) {
            const [existingCategoria] = await connection.execute('SELECT * FROM categorias WHERE idCategoria = ?', [idCategoria]);
            const [existingSubCategoria] = await connection.execute('SELECT * FROM subCategorias WHERE idSubCategoria = ?', [idSubCategoria]);
            if (existingCategoria.length === 0 || existingSubCategoria.length === 0) {
                await connection.end();
                throw new Error('La categoría o subcategoría no existe');
            }
        } else if (idCategoriaPersonalizada && idSubcategoriaPersonalizada) {
            const [existingCategoriaPersonalizada] = await connection.execute('SELECT * FROM categoriasPersonalizadas WHERE idCategoriaPersonalizada = ?', [idCategoriaPersonalizada]);
            const [existingSubCategoriaPersonalizada] = await connection.execute('SELECT * FROM subCategoriasPersonalizadas WHERE idSubCategoriaPersonalizada = ?', [idSubcategoriaPersonalizada]);
            if (existingCategoriaPersonalizada.length === 0 || existingSubCategoriaPersonalizada.length === 0) {
                await connection.end();
                throw new Error('La categoría personalizada o subcategoría personalizada no existe');
            }
        } else {
            await connection.end();
            throw new Error('Debe proporcionar una categoría y subcategoría o una categoría personalizada y subcategoría personalizada');
        }

        await connection.execute(`
            INSERT INTO gastos (detalle, monto, idUsuario, idGrupoGasto, fecha, idCategoria, idSubCategoria, idCategoriaPersonalizada, idSubcategoriaPersonalizada) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [detalle, monto, idUsuario, idGrupoGasto, fecha, idCategoria || null, idSubCategoria || null, idCategoriaPersonalizada || null, idSubcategoriaPersonalizada || null]);

        await connection.end();
    } catch (err) {
        throw err;
    }
}

const deleteGasto = async (id) => {
    try {
        const connection = await connectToDatabase()
        const [gasto] = await connection.execute('SELECT * FROM gastos WHERE idGasto = ?', [id]);
        if (gasto.length === 0) {
            throw new Error('El gasto no existe');
        }
        await connection.execute('DELETE FROM gastos WHERE idGasto = ?', [id])
        await connection.end()
    } catch (err) {
        throw err
    }
}

export {
    getGastosByUsuarioId,
    addGasto,
    deleteGasto
}