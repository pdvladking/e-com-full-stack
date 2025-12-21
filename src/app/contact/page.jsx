"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Contact</h1>
        <p className="text-sm text-neutral-500 mb-6">
          Let’s connect and craft something meaningful together.
        </p>

        <form className="flex flex-col gap-4">
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
            <ButtonLink href="#" variant="primary" size="md">
              Send Message
            </ButtonLink>
          </div>
        </form>
      </div>
    </div>
  );
}