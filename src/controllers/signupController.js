import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function signup({ name, email, password }) {
  await connectDB();

  if (!name || !email || !password) {
    throw new Error("Name, email, and password are required");
  }

  const existing = await User.findOne({ email });
  if (existing) {
    throw new Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = await User.create({
    name,
    email,
    password: passwordHash,
  });

  const safeUser = {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };

  const token = jwt.sign(
    { id: user._id, email: user.email },
    process.env.JWT_SECRET, 
    { expiresIn: "1h" }
  );

  console.log("[Signup] Inserted user:", safeUser);

  return { safeUser, token };
}