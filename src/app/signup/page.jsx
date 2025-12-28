'use client';
import Input from '@/components/shared/Input';
import ButtonLink from '@/components/ui/ButtonLink';
import { useState } from 'react';

export default function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-neutral-800 mb-2">Create your account</h1>
        <p className="text-sm text-neutral-500 mb-6">Join us and start your journey</p>

        <form className="flex flex-col gap-4">
          <Input
            label="Name"
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Input
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <Input
            label="Confirm Password"
            type="password"
            value={form.confirm}
            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          />

          <ButtonLink href="#" variant="primary" size="md">
            Sign Up
          </ButtonLink>
        </form>

        <p className="mt-4 text-sm text-neutral-600">
          Already have an account?{' '}
          <ButtonLink href="/login" variant="secondary" size="sm">
            Login
          </ButtonLink>
        </p>
      </div>
    </div>
  );
}
