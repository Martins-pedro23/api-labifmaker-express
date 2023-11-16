import mongoose from "mongoose";

export const connect_mongodb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/test");
  } catch (error) {
    console.log(`Error connecting to MongoDB: ${error}`);
  }
};
