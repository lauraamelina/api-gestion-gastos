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

export {
    getGastosByUsuarioId
}