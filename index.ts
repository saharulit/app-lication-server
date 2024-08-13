import express from 'express';
import { connectMongoDB } from './connect';

const DB_CONNECTION_STRING =
  'mongodb+srv://saharulit:34iyjFvEzjzs1PbE@backenddb.qluby.mongodb.net/?retryWrites=true&w=majority&appName=backendDB';
const app = express();

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});

connectMongoDB(DB_CONNECTION_STRING);

app.get('/', (req, res) => {
  res.send('hey from server 22');
});
