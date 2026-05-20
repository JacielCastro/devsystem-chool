import express from 'express'
import { criarCurso, cadastrarCurso } from '../controllers/controllerCursoORM.js'
//import {criarCurso, listarCursos, buscarCursos, atualizarCurso,removerCurso, alterarCurso, cadastrarCurso, } from '../controllers/controlleCurso.js'

const routerCurso = express()// Chamando o framework express

// ROTA PARA CADASTRAR CURSO 
routerCurso.get('/cadastro',cadastrarCurso)
// ROTA PARA ADICIONAR CURSO
routerCurso.post('/curso', criarCurso)
// ROTA PARA MOSTRAR TODOS OS CURSOS 
//routerCurso.get('/cursos', listarCursos)
// ROTA PARA BUSCAR UM CURSO PELO NOME DO CURSO 
//routerCurso.get('/curso/:curso', buscarCursos)
// ROTA PARA ATUALIZAR TODOS OS DAODS DO CURSO
//routerCurso.put('/curso/:cod', atualizarCurso)
// ROTA PARA RMOVER  CURSO PELO CÓDIGO
//routerCurso.delete('/curso/:cod', removerCurso)
// ATUALIZAR UM OU MAIS DADOS DO CURSO
//routerCurso.path('/curso:cod', alterarCurso)

export default routerCurso