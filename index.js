import express, { Router } from 'express'
import routercurso from 'routercurso'

const app = express() // UTILIZANDO O EXPRESS
const PORT = 3000 // USANDO A PORTA 3000
const HOST = 'localhost' // 127.0.0.1

app.use(express.json()) // middleware para fazer o parsear JSON  no corpo da requisições
app.use(express.urlencoded({extended: true})) // middleware para fazer o parsear dados de formularios ()
app.use('/curso', routerCurso) // USANDO AS ROTAS DE CURSO HTTP://LOCALHOST:3000/CURSO/ENDEREÇO_DA_ROTA 

app.get('/',(req,res) => {
    res.send('<h1> Página Inicial </h1>')
})

app.listen(PORT,HOST,() =>{
    console.log(`Servidor em execução em http://${HOST}:${PORT}`);
})