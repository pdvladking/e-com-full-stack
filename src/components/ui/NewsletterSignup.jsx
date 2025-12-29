"use client";
import { useState } from "react";
import Input from "../shared/Input";
import Button from "./Button";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-neutral-50 max-w-screen mx-auto px-6 py-16 text-center">
      <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
      <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
        Get updates on new drops, exclusive offers, and insider stories — straight to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-4 justify-center"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          required
        />
        <Button type="submit" variant="primary">
          Subscribe
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-4 text-green-600">Thanks for subscribing!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Something went wrong. Try again.</p>
      )}
    </section>
  );
}