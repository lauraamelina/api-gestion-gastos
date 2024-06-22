import * as service from '../services/gruposGastos.api.service.js'
import { getUserByEmail } from '../services/usuarios.api.service.js'

const getGruposGastosByUserId = async (req, res) => {
    const idUser = req.params.id
    try {
        const response = await service.getGruposGastosByUserId(idUser)
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

const addGrupoGasto = async (req, res) => {
    const idUser = req.params.id;
    const { nombre } = req.body;
    try {
        await service.addGrupoGasto(idUser, nombre);
        return res.status(201).json({ status: true, message: "Grupo de gasto añadido con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const removeGrupoGasto = async (req, res) => {
    const idUser = req.params.userId;
    const idGrupoGasto = req.params.id;
    try {
        await service.removeGrupoGasto(idUser, idGrupoGasto);
        return res.status(200).json({ status: true, message: "Grupo de gasto eliminado con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const updateGrupoGasto = async (req, res) => {
    const idGrupoGasto = req.params.id;
    const { nombre } = req.body;
    try {
        await service.updateGrupoGasto(idGrupoGasto, nombre);
        return res.status(200).json({ status: true, message: "Grupo de gasto actualizado con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};
const shareGrupoGastoByEmail = async (req, res) => {
    const { idGrupoGasto, emailUsuario } = req.body;
    const idUsuario = req.user.idUsuario;
    try {
        const existingRelation = await service.checkUserInGrupoGasto(idUsuario, idGrupoGasto);
        if (!existingRelation) {
            return res.status(403).json({ status: false, error: 'No tienes permisos para compartir este grupo de gasto' });
        }

        const existingGrupoGasto = await service.getGrupoGastoById(idGrupoGasto);
        if (!existingGrupoGasto) {
            return res.status(404).json({ status: false, error: 'El grupo de gasto no existe' });
        }

        const usuario = await getUserByEmail(emailUsuario);
        if (!usuario) {
            return res.status(404).json({ status: false, error: 'Usuario no encontrado' });
        }

        await service.shareGrupoGasto(usuario.idUsuario, idGrupoGasto);

        res.status(200).json({ status: true, message: `Grupo de gasto compartido con éxito con ${emailUsuario}` });
    } catch (error) {
        console.error('Error al compartir grupo de gasto:', error);
        res.status(500).json({ status: false, error: error.message });
    }
};
export {
    getGruposGastosByUserId,
    addGrupoGasto,
    removeGrupoGasto,
    updateGrupoGasto,
    shareGrupoGastoByEmail
}