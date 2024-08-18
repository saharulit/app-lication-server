import { Router } from 'express';
import {
  loginUser,
  registerUser,
} from '../controllers/authenticationController';

const authenticationRoute = Router();
authenticationRoute.post('/register', registerUser);
authenticationRoute.post('/login', loginUser);

export default authenticationRoute;
