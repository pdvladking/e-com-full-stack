"use client";

export default function UsersTable({ users, onBlock, onDelete }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="4">No users yet</td>
          </tr>
        ) : (
          users.map((u) => (
            <tr key={u._ud}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.status}</td>
              <td>
                <button onClick={() => onBlock(u._id)}>
                  {u.status === "Active" ? "Block" : "Unblock"}
                </button>
                <button onClick={() => onDelete(u._id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}