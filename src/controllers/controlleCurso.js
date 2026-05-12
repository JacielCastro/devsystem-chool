import path from 'path'
import {cursos} from '../models/modelCurso.js'
import {v4 as uuid} from 'uuid'

const cursos = lerCursos()

// Função cadastrar cursos 1
export const cadastrarCurso= (req,res) => {
    res.sendFile(path.resolve(''))
}
// Função criando curso 1
export const criarCurso= (req,res) => {

    routerCurso.post('/curso', (req, res) => {  
    
    const {cod, curso, ch, tipo} = req.body // desestruturação da requisição  
    const cursoNovo = {cod, curso, ch, tipo}

    cursos.push(cursoNovo)
    
   res.status(200).json({mensagem: 'Dados enviados!', cursoNovo})
})
}
// Função listar cursos 1
export function listarCursos(req,res) {
    
    res.status(200).json(cursos)
}

// Função buscar cursos 1
export const buscarCursos = (req, res) => {
    const cursoEncontrado = cursos.find(c => c.curso === req.params.curso)

    if(!cursoEncontrado){
      return res.status(500).json({mensagem: 'Curso não encontrado'})
    }
    
    res.status(200).json({mensagem: 'Curso Encontrado: ', cursoEncontrado})
}

// Função atualizar um dado expercífico Curso 1
export const atualizarCurso = (req,res) =>{

    routerCurso.patch('/curso/:cod', (req, res) => {
    const cursoEncontrado = cursos.find(c => c.cod === req.params.cod)

    if(!cursoEncontrado){
      return res.status(400).json({mensagem: 'Curso não encontrado!'})
    }

    const {cod, curso, ch, tipo} = req.body

    if(curso !== undefined && curso !== null  && curso !== '') {
        cursoEncontrado.curso = curso
    }
    if ( ch !== undefined && ch !== null  && ch !== '' ){
            cursoEncontrado.ch = Number(ch)
    }
    if(tipo !== undefined && tipo !== null  && tipo !== ''){
        cursoEncontrado.tipo = tipo  
    }
    
    const cursoAtual = {
        cod: cod,  
        curso: cursoEncontrado.curso, 
        ch: cursoEncontrado.ch, 
        tipo: cursoEncontrado.tipo}

    res.status(200).json({mensagem: 'Curso Encontrado: ', cursoAtual})
})
}

// Função atulizar todos os dados 1
export const alterarCurso = (req, res) => {
    const cursoEncontrado = cursos.find(c => c.cod === req.params.cod)

    if(!cursoEncontrado){
      return res.status(400).json({mensagem: 'Curso não encontrado!'})
    }

    const {cod, curso, ch, tipo} = req.body

    if (curso !== undefined && curso !== null && curso !== '') {
        cursoEncontrado.curso = curso
    }
    if (ch !== undefined && ch !== null && ch !== '') {
        cursoEncontrado.ch = Number(ch) 
    }
    if (tipo !== undefined && tipo !== null && tipo !=='') {
        cursoEncontrado.tipo = tipo
    }

    const cursoAtual = {
    cod: cod,    
    curso: cursoEncontrado.curso,
    ch: cursoEncontrado.ch,
    tipo: cursoEncontrado.tipo
    }  

    res.status(200).json({mensagem: 'Curso Encontrado: ', cursoAtual})
}

// Função Remover cursos 1
export const removerCurso = (req, res) => {
     const cursoEncontrado = cursos.findIndex(c => c.cod === req.params.cod)

    if(cursoEncontrado === -1){
      return res.status(500).json({mensagem: 'Curso não encontrado'})
    }

    cursos.splice(cursoEncontrado, 1)

    res.status(200).json({mensagem: 'Curso Removido com sucesso!', cursos})
}

