import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
  try {
    // Específicamente usando la dirección IPv4 de localhost (127.0.0.1)
    const mongoUri = MONGODB_URI.replace("mongodb://localhost", "mongodb://127.0.0.1");
    
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};
