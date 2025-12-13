export async function login({ email, password }) {
  await connectDB();
  console.log("[Login] Received:", { email, password });

  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  const user = await User.findOne({ email });
  console.log("[Login] Found user:", user);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.passwordHash);
  console.log("[Login] Password match:", isMatch);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
}