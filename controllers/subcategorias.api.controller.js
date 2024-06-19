import * as service from '../services/subcategorias.api.service.js'

const getAllSubCategories = async (req, res) => {
    try {
        const response = await service.getAllSubCategories()
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

const getSubCategoriesById = async (req, res) => {
    const id = req.params.id
    try {
        const response = await service.getSubCategoriesById(id)
        return res.status(200).json({ status: true, data: response })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

export {
    getAllSubCategories,
    getSubCategoriesById
}