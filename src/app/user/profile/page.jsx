"use client";
import { useState } from "react";
import UserProfile from "@/components/user/UserProfile";

export default function UserProfilePage() {
  const [user, setUser] = useState({
    name: "Ram",
    email: "ram@example.com",
    address: "Samakhusi, Kathmandu",
  });

  const handleUpdate = (updatedUser) => {
    setUser(updatedUser);
    console.log("Profile updated:", updatedUser);
  };

  return (
    <div>
      <h2>User Profile</h2>
      <UserProfile user={user} onUpdate={handleUpdate} />
    </div>
  );
}