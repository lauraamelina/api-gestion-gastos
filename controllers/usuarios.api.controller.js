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

export {
    getUserById
}