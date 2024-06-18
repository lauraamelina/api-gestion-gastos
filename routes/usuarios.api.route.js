import express from 'express'
import * as userController from '../controllers/usuarios.api.controller.js'

const route = express.Router()

route.get('/:id', userController.getUserById)
route.post('/', userController.createUser)

export default route