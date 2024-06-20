import * as service from '../services/gastos.api.service.js'

const getGastosByUsuarioId = async (req, res) => {
    const id = req.params.id
    try {
        const response = await service.getGastosByUsuarioId(id)
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

const addGasto = async (req, res) => {
    const data = req.body;
    try {
        const response = await service.addGasto(data)
        return res.status(201).json({ status: true, message: "Gasto añadido correctamente" })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
}

const deleteGasto = async (req, res) => {
    const id = req.params.id
    try {
        const response = await service.deleteGasto(id)
        return res.status(200).json({ status: true, message: "Gasto eliminado correctamente" })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

export {
    getGastosByUsuarioId,
    addGasto,
    deleteGasto
}