import { createEtiqueta, getEtiquetas} from '../Controller/EtiquetaController.js';
import express from 'express';
import authMiddleware from '../Middleware/authMiddleware.js';

const  routeretiqueta = express.Router();

routeretiqueta.post('/etiquetas',authMiddleware, createEtiqueta);
routeretiqueta.get('/etiquetas',authMiddleware, getEtiquetas);

export { routeretiqueta }; 