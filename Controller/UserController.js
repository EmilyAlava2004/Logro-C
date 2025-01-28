import {User} from '../Models/UserModel.js';
import bcrypt from 'bcrypt';

export const getUsers = async (req, res) => {
    try {
      const users = await User.findAll({
        attributes: ['id', 'user', 'email', 'status']
      }
       
      );
      res.json({
        data: users
      });
    } catch (error) {
      res.status(500).json({
        message: 'Error getting users',
        data: {}
      });
    }
  };

export const createUser = async (req, res) => {
    try {
      const { user, password, email } = req.body;
      const encryptedpass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        user: user,
        password: encryptedpass,
        email : email
      });
        res.json(newUser);
         
      }catch (error) {
        res.status(500).json({
          message: 'Error creating user',
          data: {}
        });
      }
    }
