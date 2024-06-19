import * as service from '../services/subcategoriasPersonalizadas.api.service.js'

const getAllSubCategoriasPersonalizadasByUserId = async (req, res) => {
    const idUsuario = req.params.id;
    try {
        const response = await service.getAllSubCategoriasPersonalizadasByUserId(idUsuario);
        return res.status(200).json({ status: true, data: response });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const createSubCategoriaPersonalizada = async (req, res) => {
    const idUsuario = req.params.id;
    const subCategoria = req.body;
    try {
        await service.createSubCategoriaPersonalizada(idUsuario, subCategoria);
        return res.status(201).json({ status: true, message: "Subcategoría personalizada creada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const getSubCategoriaPersonalizadaById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await service.getSubCategoriaPersonalizadaById(id);
        return res.status(200).json({ status: true, data: response });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const deleteSubCategoriaPersonalizada = async (req, res) => {
    const id = req.params.id;
    try {
        await service.deleteSubCategoriaPersonalizada(id);
        return res.status(200).json({ status: true, message: "Subcategoría personalizada eliminada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const updateSubCategoriaPersonalizada = async (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;
    try {
        await service.updateSubCategoriaPersonalizada(id, nombre);
        return res.status(200).json({ status: true, message: "Subcategoría personalizada actualizada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const getSubCategoriasByCategoriaPersonalizadaId = async (req, res) => {
    const idCategoriaPersonalizada = req.params.id;
    try {
        const response = await service.getSubCategoriasByCategoriaPersonalizadaId(idCategoriaPersonalizada);
        return res.status(200).json({ status: true, data: response });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

export {
    getAllSubCategoriasPersonalizadasByUserId,
    createSubCategoriaPersonalizada,
    getSubCategoriaPersonalizadaById,
    deleteSubCategoriaPersonalizada,
    updateSubCategoriaPersonalizada,
    getSubCategoriasByCategoriaPersonalizadaId
};
