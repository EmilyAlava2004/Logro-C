import {createContacto, getcontactos, updateContacto, deletecontacto, getcontactoetiqueta} from '../Controller/ContactoController.js';
import express from 'express';
import authMiddleware from '../Middleware/authMiddleware.js';

const routecontacto = express.Router();

routecontacto.post('/contactos',authMiddleware, createContacto);
routecontacto.get('/contactos', authMiddleware, getcontactos);
routecontacto.put('/contactos/:id',authMiddleware ,updateContacto);
routecontacto.delete('/contactos/:id',authMiddleware, deletecontacto);
routecontacto.get('/contactos/:nometi',authMiddleware, getcontactoetiqueta);
export { routecontacto };
