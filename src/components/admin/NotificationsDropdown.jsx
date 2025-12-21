"use client";
import { useState } from "react";

export default function NotificationsDropdown({ notification = []}) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <button onClick={() => setOpen(!open)}>
        Notifications ({notifications.length})
      </button>

      {open && (
        <div style={{
          position: "absolute",
          right: 0,
          top: "100%",
          background: "#fff",
          border: "1px solid #ccc",
          padding: "1rem",
          width: "250px",
          zIndex:10,
        }}
        >
          <h4>Notifications</h4>
          {notification.length === 0 ? (
            <p>No new notifications</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0}}>
              {notification.map((n, idx) => (
                <li key={idx} style={{ marginBottom: "0m5rem"}}>
                  <strong>{n.type}:</strong> {n.message}
                </li>
              ))}
            </ul>
          )}
          </div>
      )}
    </div>
  );
}