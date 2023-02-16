import mongoose from 'mongoose';
import Logger from '../logger';
import AppError from '../utils/apperror';

const setupDatabase = async () => {
  try {
    const connectionString = process.env.MONGO_URI;

    if (!connectionString) {
      throw new AppError('Empty MongoDB connection string', 500);
    }

    mongoose.set('strictQuery', false);
    await mongoose.connect(connectionString);
    Logger.info('MongoDB Connected successfully!');
  } catch (error) {
    Logger.error('Failed to connect to MongoDB');
    process.exit(1);
  }
};

export default setupDatabase;
