import { DataTypes } from "sequelize";
import { sequelize } from "../DB/Conexion.js";


const Etiqueta = sequelize.define('Etiqueta', { 
    idEtiqueta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreEtiqueta: {
        type: DataTypes.STRING(50),
        allowNull: false
        },
});

Etiqueta.hasMany(Etiqueta, {foreignKey: 'id_etiqueta'});

export default Etiqueta;