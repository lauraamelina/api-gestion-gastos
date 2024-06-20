import { Router } from 'express'
import * as controller from '../controllers/subcategorias.api.controller.js'
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/', controller.getAllSubCategories)
route.get('/:id', controller.getSubCategoriesById)
route.get('/categorias/:id', controller.getSubCategoriaByCategoriaId)

export default route 