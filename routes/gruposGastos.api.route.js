import { Router } from 'express'
import * as controller from '../controllers/gruposGastos.api.controller.js'
import { authorization } from '../middleware/auth.middleware.js'

const route = Router()

route.use(authorization)
route.get('/usuarios/:id', controller.getGruposGastosByUserId)
route.post('/usuarios/:id', controller.addGrupoGasto);
route.put('/:id', controller.updateGrupoGasto);
route.delete('/usuarios/:userId/:id', controller.removeGrupoGasto);
route.post('/share', controller.shareGrupoGastoByEmail);

export default route