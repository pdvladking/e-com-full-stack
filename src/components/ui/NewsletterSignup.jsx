"use client";
import ButtonLink from "./ButtonLink";
import Input from "./Input";

export default function NewsletterSignup() {
  return (
    <section className="w-full max-w-screen mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Join Our Newsletter
      </h2>
      <p className="text-neutral-600 mb-8 max-w-xl mx-auto">
        Get updates on new drops, exclusive offers, and insider stories-straight to your inbox.
      </p>

      {/* Form */}
      <form className="flex flex-col md:flex-row gap-4 justify-center">
        <Input
        type="email"
        placeholder="Enter your email"
        aria-label="Email address"
        className="flex-1"
        />
        <ButtonLink
        href="/subscribe"
        className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-700 transition"
      >
        Subscribe
      </ButtonLink>
        </form>
    </section>
  );
}