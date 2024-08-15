import express from 'express';
import { connectMongoDB } from './connect';
import dotenv from 'dotenv';
import appliedJobRoutes from './routes/appliedJobRoutes';

dotenv.config();

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING || '';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

connectMongoDB(DB_CONNECTION_STRING);

app.use('/api', appliedJobRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Hey from the server !');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
