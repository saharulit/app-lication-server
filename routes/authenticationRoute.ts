import { Router } from 'express';
import {
  loginUser,
  registerUser,
  logoutUser,
} from '../controllers/authenticationController';

const authenticationRoute = Router();
authenticationRoute.post('/register', registerUser);
authenticationRoute.post('/login', loginUser);
authenticationRoute.post('/logout', logoutUser);

export default authenticationRoute;
