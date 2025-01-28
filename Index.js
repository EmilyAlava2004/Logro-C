import express from 'express';
import { sequelize } from './DB/Conexion.js';
import dotenv from 'dotenv';
import {  routeruser } from './Routes/UserRoutes.js';
import { routeretiqueta } from './Routes/EtiquetaRoute.js';
import { routecontacto } from './Routes/ContactoRoutes.js';
import {routerauth} from './Routes/AuthRoutes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', routeruser);
app.use('/api', routeretiqueta);
app.use('/api', routecontacto);
app.use('/api', routerauth);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alert: false });
    const server = app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });

    server.on('error', (error) => {
      if (error.code === 'EADDRINUSE') {
        console.error(`Port ${port} is already in use.`);
      } else {
        console.error(`Error: ${error}`);
      }
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

main();