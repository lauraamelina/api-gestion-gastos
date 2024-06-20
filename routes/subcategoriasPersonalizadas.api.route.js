import { Router } from 'express';
import * as controller from '../controllers/subcategoriasPersonalizadas.api.controller.js';
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/usuario/:id', controller.getAllSubCategoriasPersonalizadasByUserId);
route.post('/usuario/:id', controller.createSubCategoriaPersonalizada);
route.get('/:id', controller.getSubCategoriaPersonalizadaById);
route.delete('/:id', controller.deleteSubCategoriaPersonalizada);
route.put('/:id', controller.updateSubCategoriaPersonalizada);
route.get('/categorias-personalizadas/:id', controller.getSubCategoriasByCategoriaPersonalizadaId);

export default route;
