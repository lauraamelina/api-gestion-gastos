import { Router } from 'express'
import * as userController from '../controllers/usuarios.api.controller.js'
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/:id', userController.getUserById)
route.put('/:id', userController.updateUser)

export default route