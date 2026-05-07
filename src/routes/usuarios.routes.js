import express from 'express'
import uc from '../controllers/usuarios.controller.js'

const router = express.Router()

router.get("/", uc.listar)
router.get("/:id", uc.filtrarId)
router.post("/", uc.criar)
router.put('/:id', uc.atualizar);
router.delete('/:id', uc.remover)

export default router