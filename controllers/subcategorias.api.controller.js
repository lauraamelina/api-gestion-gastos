import * as service from '../services/subcategorias.api.service.js'

const getAllSubCategories = async (req, res) => {
    try {
        const response = await service.getAllSubCategories()
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

export {
    getAllSubCategories,
}