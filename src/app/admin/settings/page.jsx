"use client";
import { useState } from "react";
import SettingsForm from "@/components/admin/SettingsForm";

export default function AdminSettings() {
  const [settings, setSettings] = useState({
    storeName: "Rawhide Leathers",
    currency: "USD",
  });

  const handleSave = (newSettings) => {
    setSettings(newSettings);
    alert("Settings saved!");
  };

  return (
    <div>
      <h2>Admin Settings</h2>
      <SettingsForm initialSettings={settings} onSave={handleSave} />
    </div>
  );
}