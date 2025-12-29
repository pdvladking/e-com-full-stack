"use client";
import Input from "@/components/shared/Input";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Contact</h1>
        <p className="text-sm text-neutral-500 mb-6">
          Let&apos;s connect and craft something meaningful together.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            id="name"
            label="Name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Enter your name"
          />

          <Input
            id="email"
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="Enter your email"
          />

          <Input
            id="message"
            label="Message"
            type="textarea"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Write your message..."
          />

          <div className="mt-4 text-center">
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </div>
        </form>

        {status && (
          <p className="mt-4 text-sm text-center text-neutral-600">{status}</p>
        )}
      </div>
    </div>
  );
}