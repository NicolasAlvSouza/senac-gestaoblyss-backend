import express from 'express'
import uc from '../controllers/usuarios.controller.js'

const router = express.Router()

router.get("/", uc.listar)

export default router