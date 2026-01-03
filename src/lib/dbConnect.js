import mongoose from "mongoose";

async function dbConnect() {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("✅ MongoDB connected");
    } catch (err) {
      console.error("❌ MongoDB connection error.", err.message);
      throw err;
    }
  }
}

export default dbConnect;