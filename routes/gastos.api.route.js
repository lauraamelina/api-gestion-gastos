import { Router } from "express";
import * as controller from '../controllers/gastos.api.controller.js'

const route = Router()

route.get('/usuarios/:id', controller.getGastosByUsuarioId)

export default route