import mongoose from 'mongoose';

export const connectMongoDB = async (connString: string) => {
  try {
    await mongoose.connect(connString);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB:', (err as Error).message);
    throw err;
  }
};
