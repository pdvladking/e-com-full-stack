"use client";
import { useState } from "react";

export default function OrdersTable({ orders, onUpdate, onDelete }) {
  const [editingOrder, setEditingOrder] = useState(null);

  const handleStatusChange = (e) => {
    setEditingOrder({ ...editingOrder, status: e.target.value });
  };

  return (
    <div>
      {editingOrder ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onUpdate(editingOrder);
            setEditingOrder(null);
          }}
        >
          <h3>Edit Order Status</h3>
          <select value={editingOrder.status} onChange={handleStatusChange}>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
          <button type="submit">Save</button>
          <button type="button" onClick={() => setEditingOrder(null)}>
            Cancel
          </button>
        </form>
      ) : (
        <table border="1" cellPadding="8">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Total Items</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6">No orders yet</td>
              </tr>
            ) : (
              orders.map((o) => (
                <tr key={o._id}>
                  <td>{o.customer.name}</td>
                  <td>{o.customer.email}</td>
                  <td>{o.cartItems.reduce((sum, i) => sum + i.quantity, 0)}</td>
                  <td>
                    ${o.cartItems.reduce(
                      (sum, i) => sum + i.price * i.quantity,
                      0
                    )}
                  </td>
                  <td>{o.status}</td>
                  <td>
                    <button onClick={() => setEditingOrder(o)}>Edit</button>
                    <button onClick={() => onDelete(o._id)}>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}