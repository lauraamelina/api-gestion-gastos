import * as service from '../services/gruposGastos.api.service.js'

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


export {
    getGruposGastosByUserId,
    addGrupoGasto
}