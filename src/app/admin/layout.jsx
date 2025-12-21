"use client";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AdminHeader />
      <div style={{ display: "flex", flex: 1}}></div>
      <AdminSidebar />
      <main style={{ flex: 1, padding: "1rem" }}>
        {children}
      </main>
    </div>
  );
}