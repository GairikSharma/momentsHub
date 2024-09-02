import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://gairiksharma202:0000@authentication.yzgzq.mongodb.net/?retryWrites=true&w=majority&appName=Authentication');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

export default connectDB;