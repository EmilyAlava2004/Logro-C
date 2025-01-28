import { DataTypes } from "sequelize";
import { sequelize } from "../DB/Conexion.js";
import Etiqueta from "./EtiquetaModel.js";

const Contacto = sequelize.define('Contacto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
     correo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_etiqueta: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Contacto.belongsTo(Etiqueta, {foreignKey: 'id_etiqueta'});
export default Contacto;