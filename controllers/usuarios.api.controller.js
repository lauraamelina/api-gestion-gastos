import * as userService from '../services/usuarios.api.service.js'

const getUserById = async (req, res) => {
    const id = req.params.id
    try {
        const user = await userService.getUserById(id);
        return res.status(200).json({ status: true, data: user })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

const createUser = async (req, res) => {
    const user = req.body
    try {
        await userService.createUser(user);
        return res.status(201).json({ status: true, message: 'Usuario creado' })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

const updateUser = async (req, res) => {
    const id = req.params.id
    const user = req.body
    try {
        const newUser = await userService.updateUser(id, user);
        return res.status(200).json({ status: true, data: newUser })
    } catch (err) {
        return res.status(500).json({ status: false, error: err.message })
    }
}

export {
    getUserById,
    createUser,
    updateUser
}