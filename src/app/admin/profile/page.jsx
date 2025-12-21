"use client";
import { useState } from "react";
import ProfileForm from "@/components/admin/ProfileForm";

export default function AdminProfile() {
  const [profile, setProfile] = useState({
    name: "Raju",
    email: "raju@example.com",
    password: "",
  });

  const handleSave = (newProfile) => {
    setProfile(newProfile);
    alert("Profile updated!");
  };

  return (
    <div>
      <h2>Admin Profile</h2>
      <ProfileForm initialProfile={profile} onSave={handleSave} />
    </div>
  );
}