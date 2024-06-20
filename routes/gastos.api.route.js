import { Router } from "express";
import * as controller from '../controllers/gastos.api.controller.js'
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/usuarios/:id', controller.getGastosByUsuarioId)
route.post('/', controller.addGasto)
route.delete('/:id', controller.deleteGasto)
route.put('/:id', controller.updateGasto)

export default route