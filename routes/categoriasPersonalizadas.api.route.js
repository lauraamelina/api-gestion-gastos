import { Router } from 'express';
import * as controller from '../controllers/categoriasPersonalizadas.api.controller.js';

const route = Router();

route.get('/usuario/:id', controller.getAllCategoriasPersonalizadasByUserId);
route.post('/usuario/:id', controller.createCategoriaPersonalizada);
route.get('/:id', controller.getCategoriaPersonalizadaById);
route.delete('/:id', controller.deleteCategoriaPersonalizada);
route.put('/:id', controller.updateCategoriaPersonalizada);

export default route;
