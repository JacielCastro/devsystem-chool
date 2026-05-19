import mysql from 'mysql2'
import dotenv from 'dotenv'

const bdCenexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'BemVindo!',
    database: 'bd_academico',
    charset: 'utf8mb4',
    multipleStatements: true
})
bdCenexao.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao banco de ')
        return
    }
    console.log('Conexão completa');
})

export default bdCenexao  