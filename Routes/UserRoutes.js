
import { getUsers, createUser} from '../Controller/UserController.js';
import express from 'express';


const  routeruser = express.Router();

routeruser.get('/users', getUsers);
routeruser.post('/users', createUser);



export { routeruser };

