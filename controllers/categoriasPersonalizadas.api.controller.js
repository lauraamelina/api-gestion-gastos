import * as service from '../services/categoriasPersonalizadas.api.service.js';

const getAllCategoriasPersonalizadasByUserId = async (req, res) => {
    const idUser = req.params.id;
    try {
        const response = await service.getAllCategoriasPersonalizadasByUserId(idUser);
        return res.status(200).json({ status: true, data: response });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const createCategoriaPersonalizada = async (req, res) => {
    const idUser = req.params.idUser;
    const categoria = req.body;
    try {
        await service.createCategoriaPersonalizada(idUser, categoria);
        return res.status(201).json({ status: true, message: "Categoria personalizada creada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const getCategoriaPersonalizadaById = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await service.getCategoriaPersonalizadaById(id);
        return res.status(200).json({ status: true, data: response });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const deleteCategoriaPersonalizada = async (req, res) => {
    const id = req.params.id;
    try {
        await service.deleteCategoriaPersonalizada(id);
        return res.status(200).json({ status: true, message: "Categoria personalizada eliminada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

const updateCategoriaPersonalizada = async (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;
    try {
        await service.updateCategoriaPersonalizada(id, nombre);
        return res.status(200).json({ status: true, message: "Categoria personalizada actualizada con éxito" });
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message });
    }
};

export {
    getAllCategoriasPersonalizadasByUserId,
    createCategoriaPersonalizada,
    getCategoriaPersonalizadaById,
    deleteCategoriaPersonalizada,
    updateCategoriaPersonalizada
};
