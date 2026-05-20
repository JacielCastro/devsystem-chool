import sequelize from "../config/orm.js";
import { DataTypes } from "sequelize";

const Curso = sequelize.define('Curso', {
    
    idCurso:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    
    cod:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true
        }
    },
    
    curso:{
        type: DataTypes.STRING,
        allowNull: false
    },
    ch:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    
}

);

export default Curso;