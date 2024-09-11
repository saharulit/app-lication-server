import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { IUser } from './models/type';
import User from './models/user.modal';

interface AuthRequest extends Request {
  user?: IUser;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.cookies.token;
  // console.log(`req: ${s.stringify(req)}`);
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
    return; // Ensure that you return after sending a response
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      id: string;
    };

    // Attach the user to the request object
    const user = await User.findById(decoded.id).select('-password').exec();

    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ message: 'Not authorized, user not found' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};
