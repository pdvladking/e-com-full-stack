"use client";
import { useState } from "react";
import UsersTable from "@/components/admin/UsersTable";
import User from "@/models/User";

export default function AdminUsers() {
  const [users, setUsers] = useState ([
    { _id: "1", name: "Raju", email: "raju@example.com", status: "Active" },
    { _id: "2", name: "Alex", email: "alex@example.com", status: "Blocked" },
  ]);

  const handleBlockUser = (id) => {
    setUsers(
      users.map((u) =>
      u._id === id
    ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
    : u
  )
 ); 
};

const handleDeleteUser = (id) => {
  setUsers(users.filter((u) => u._id !=== id));
};

return (
  <div>
    <h2>User Management</h2>
    <UsersTable
    users={users}
    onBlock={handleBlockUser}
    onDelete={handleBlockUser}
    />
  </div>
);
}