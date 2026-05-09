import path from 'path'
import {cursos} from '../models/modelCurso.js'


// Função cadastrar cursos
 export const cadastrarCurso= (req,res) => {
    res.sendFile(path.resolve(''))
 }
// Função criando curso 
export const criarCurso= (req,res) => {

    routerCurso.post('/curso', (req, res) => {  
    
    const {cod, curso, ch, tipo} = req.body // desestruturação da requisição  
    const cursoNovo = {cod, curso, ch, tipo}

    cursos.push(cursoNovo)
    
   res.status(200).json({mensagem: 'Dados enviados!', cursoNovo})
})
}

// Função listar cursos
export function listarCursos(req,res) {
    
    res.status(200).json(cursos)
}

// Função buscar cursos
export const buscarCursos = (req, res) => {
    const cursoEncontrado = cursos.find(c => c.curso === req.params.curso)

    if(!cursoEncontrado){
      return res.status(500).json({mensagem: 'Curso não encontrado'})
    }
    
    res.status(200).json({mensagem: 'Curso Encontrado: ', cursoEncontrado})
}

// Função atualizar um dado expercífico Curso 
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

// Função atulizar todos os dados
export const atualizarDados = (req, res) => {
    const cursoEncontrado = cursos.find(c => c.cod === req.params.cod)

    if(!cursoEncontrado){
      return res.status(500).json({mensagem: 'Curso não encontrado!'})
    }

    const {cod, curso, ch, tipo} = req.body

    if(!curso || !ch || !tipo) {
        return res.status(400).json({mensagem: 'Preencha todos os dados!'})
    }

    cursoEncontrado.curso = curso
    cursoEncontrado.ch = ch
    cursoEncontrado.tipo = tipo  
    
    const cursoAtual = {cod, curso, ch, tipo}

    res.status(200).json({mensagem: 'Curso Encontrado: ', cursoAtual})
}

// Função Remover cursos
export const removerCurso = (req, res) => {
     const cursoEncontrado = cursos.findIndex(c => c.cod === req.params.cod)

    if(cursoEncontrado === -1){
      return res.status(500).json({mensagem: 'Curso não encontrado'})
    }

    cursos.splice(cursoEncontrado, 1)

    res.status(200).json({mensagem: 'Curso Removido com sucesso!', cursos})
}

