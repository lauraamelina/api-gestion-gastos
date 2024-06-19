import { Router } from 'express'
import * as controller from '../controllers/subcategorias.api.controller.js'


const route = Router()

route.get('/', controller.getAllSubCategories)
route.get('/:id', controller.getSubCategoriesById)

export default route 