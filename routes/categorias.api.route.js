import { Router } from 'express'
import * as controller from '../controllers/categorias.api.controller.js'


const route = Router()

route.get('/', controller.getAllCategories)

export default route 