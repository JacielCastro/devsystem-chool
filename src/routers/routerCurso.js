import express from 'express'
import path from 'path'
import {criarCurso, listarCursos, buscarCursos, atualizarCurso, atualizarDados, removerCurso} from '../controllers/controlleCurso.js'

const routerCurso = express()// Chamando o framework express

routerCurso.get('/cadastro',)

export default routerCurso