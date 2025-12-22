"use client";
import RegistrationForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  const handleRegister = (userData) => {
    console.log("Register attempt:", userData);
  };

  return (
    <div>
      <h2>Register</h2>
      <RegistrationForm onRegister={handleRegister} />
    </div>
  );
}