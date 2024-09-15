import express from 'express';
import { connectMongoDB } from './connect';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import appliedJobRoutes from './routes/appliedJobRoutes';
import authenticationRoute from './routes/authenticationRoute';
import protectedRoutes from './routes/protected.routes';
import { authenticate } from './auth.middleware';

dotenv.config();

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || '';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

connectMongoDB(DB_CONNECTION_STRING);

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://app-lication.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    credentials: true,
  })
);
app.set('trust proxy', true);

// Routes
app.use('/api/auth', authenticationRoute);
// app.use('/api', protectedRoutes);
app.use('/api/applied-jobs', authenticate, appliedJobRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hey from the server !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
