import { DataTypes } from "sequelize";
import { sequelize } from "../DB/Conexion.js";


export const User = sequelize.define('User', { 
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user : {
        type: DataTypes.STRING,
        allowNull: false
    },
    password : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    status : {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, 
{
    // Para desactivar los campos createdAt y updatedAt que sequelize genera por defecto para cada modelo lo desactivamos de la siguiente línea de código
    timestamps: false
  }
);

export default User;

