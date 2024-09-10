import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.modal';
import { IUser } from '../models/type';

// Register a new user
export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ firstName, lastName, email, password } as IUser);
    await newUser.save();

    const token = generateToken(newUser._id.toString());

    // Set the JWT as a cookie
    res.cookie('token', token, {
      httpOnly: true, // Prevent access via JavaScript
      secure: process.env.NODE_ENV === 'production', // Set Secure flag if in production
      sameSite: 'strict', // Helps against CSRF attacks
      maxAge: 60 * 60 * 1000, // 1 hour in milliseconds
    });

    return res.status(201).json({ user: newUser });
  } catch (error) {
    return res.status(500).json({ message: 'Error registering user', error });
  }
};

// Login user
export const loginUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    console.log('starting login');
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString());
    console.log('user match - success login');
    // Set the JWT as a cookie
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000,
    });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Error logging in', error });
  }
};

// Generate JWT
const generateToken = (id: string): string => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '1h',
  });
};
