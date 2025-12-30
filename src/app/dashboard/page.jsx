"use client";

import { useAuth } from "@/components/auth/AuthProvider";
import Button from "@/components/ui/Button";
import SignupForm from "@/components/auth/RegisterForm";
import LoginForm from "@/components/auth/LoginForm";

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-6 text-center">
      {user ? (
        <>
        <h1 className="text-2xl font-bold">
          Welcome, {user.email}
        </h1>
        <p className="text-gray-600">
          You are now logged in. This is your recruiter-grade dashboard.
        </p>
        <Button variant="secondary" onClick={logout} fullWidth>
          Logout
        </Button>
        </>
      ) : (
        <>
        <h1 className="text-2xl font-bold">Welcome to my App</h1>
        <p className="text-gray-600">
          Please sign up or log in to continue.
        </p>
        <SignupForm />
        <LoginForm />
        </>
      )}
    </div>
  );
}