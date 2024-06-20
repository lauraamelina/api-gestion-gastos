import express from 'express'
import * as controller from '../controllers/gruposGastos.api.controller.js'

const route = express.Router()

route.get('/usuarios/:id', controller.getGruposGastosByUserId)
route.post('/usuarios/:id', controller.addGrupoGasto);

export default route