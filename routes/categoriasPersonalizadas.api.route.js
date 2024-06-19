import { Router } from 'express';
import * as controller from '../controllers/categoriasPersonalizadas.controller.js';

const route = Router();

route.get('/user/:id', controller.getAllCategoriasPersonalizadasByUserId);
route.post('/user/:id', controller.createCategoriaPersonalizada);
route.get('/:id', controller.getCategoriaPersonalizadaById);
route.delete('/:id', controller.deleteCategoriaPersonalizada);
route.put('/:id', controller.updateCategoriaPersonalizada);

export default route;
