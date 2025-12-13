import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("[DB] Using existing MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("[DB] Attempting MongoDB connection...");
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB,
    })
    .then((mongoose) => {
      console.log("[DB] ✅ MongoDB connected!");
      return mongoose;
    })
    .catch((error) => {
      console.error("[DB] ❌ Connection error:", error);
      throw error;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;