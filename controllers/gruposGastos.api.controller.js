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

export {
    getGruposGastosByUserId
}