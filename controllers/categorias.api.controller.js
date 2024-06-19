import * as service from '../services/categorias.api.service.js'

const getAllCategories = async (req, res) => {
    try {
        const response = await service.getAllCategories()
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

export {
    getAllCategories
}