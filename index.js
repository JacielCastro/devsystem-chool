import express, { Router } from 'express'
import routerCurso from './src/routers/routerCurso.js'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'

const app = express() // UTILIZANDO O EXPRESS

dotenv.config()

app.use(express.json()) // middleware para fazer o parsear JSON  no corpo da requisições
app.use(express.urlencoded({extended: true})) // middleware para fazer o parsear dados de formularios ()
app.use('/curso', routerCurso) // USANDO AS ROTAS DE CURSO HTTP://LOCALHOST:3000/CURSO/ENDEREÇO_DA_ROTA 
app.use(morgan(com))



app.use(routerCurso)

app.get('/',(req,res) => {
    res.send('<h1> Página Inicial </h1>')
})

app.listen(PORT,HOST,() =>{
    console.log(`Servidor em execução em http://${HOST}:${PORT}`);
})