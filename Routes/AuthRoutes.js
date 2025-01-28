import { login } from '../Controller/AuthController.js';
import express from 'express';

const routerauth = express.Router();

routerauth.post('/login', login);

export { routerauth };