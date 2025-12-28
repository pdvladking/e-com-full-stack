'use client';
import Input from '../shared/Input';
import ButtonLink from './ButtonLink';

export default function NewsletterSignup() {
  return (
    <section className="w-full bg-neutral-50 max-w-screen mx-auto px-6 py-16 text-center">
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-4">Join Our Newsletter</h2>
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
        <ButtonLink href="/subscribe">Subscribe</ButtonLink>
      </form>
    </section>
  );
}
