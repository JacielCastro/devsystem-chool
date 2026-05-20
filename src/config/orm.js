import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './src/database/database.sqlite'

})

const Conectar = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar com o banco de dados:', error);
    }
};

const Sincronizar = async () => {
    try {
        await sequelize.sync({ force: false });
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
};

export const sincronizarBD = async () => {
    try {
        await sequelize.sync({ force: false });
        console.log('Banco de dados sincronizado com sucesso!');
        
    } catch (error) {
        console.error('Erro ao sincronizar o banco de dados:', error);
    }
}

// CHAMANDO A FUNÇÃO DE CONEXÃO COM O BANCO DE DADOS
Conectar();

export default sequelize;