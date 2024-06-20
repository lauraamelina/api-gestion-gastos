import { Router } from 'express'
import * as controller from '../controllers/categorias.api.controller.js'
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/', controller.getAllCategories)
route.get('/:id', controller.getCategoriesById)

export default route 