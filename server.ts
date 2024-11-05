import express from 'express';
import { connectMongoDB } from './connect';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import appliedJobRoutes from './routes/appliedJobRoutes';
import authenticationRoute from './routes/authenticationRoute';
import { authenticate } from './auth.middleware';
import companyRoutes from './routes/companyRoutes';

dotenv.config();

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || '';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

connectMongoDB(DB_CONNECTION_STRING);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ['http://localhost:5173', 'https://app-lication.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// Routes
app.use('/api/auth', authenticationRoute);
app.use('/api/applied-jobs', authenticate, appliedJobRoutes);
app.use('/api/companies', authenticate, companyRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('Hey from the server !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
