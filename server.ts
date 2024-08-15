import express from 'express';
import { connectMongoDB } from './connect';
import dotenv from 'dotenv';
import appliedJobRoutes from './routes/appliedJobRoutes';

// Load environment variables from .env file
dotenv.config();

// Access environment variables
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || '';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
connectMongoDB(DB_CONNECTION_STRING);

// Use the imported routes
app.use('/api', appliedJobRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hey from the server !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
