"use client";
import NotificationsDropdown from "./NotificationsDropdown";

export default function AdminHeader() {
  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem",
      borderBottom: "1px solid #ccc",
      background: "#f9f9f9"
    }}>
      <h2>Admin Panel</h2>
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <span>Welcome, Raju</span>
        <NotificationsDropdown notification={mockNotifications} />
        <button>Logout</button>
      </div>
    </header>
  );
}