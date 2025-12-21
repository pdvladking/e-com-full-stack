"use client";

export default function OrdersTable({ orders = [] }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Customer</th>
          <th>Email</th>
          <th>Total Items</th>
          <th>Total Price</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {orders.length === 0 ? (
          <tr>
            <td colSpan="5">No orders yet</td>
          </tr>
        ) : (
          orders.map((o) => (
            <tr key={o._id}>
              <td>{o.customer.name}</td>
              <td>{o.customer.email}</td>
              <td>{o.cartItems.reduce((sum, i) => sum + i.quantity, 0)}</td>
              <td>
                ${o.cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)}
              </td>
              <td>{o.status || "Pending"}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}