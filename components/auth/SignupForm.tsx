"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import TextField from "../TextField";

type Errors = Partial<Record<"name" | "email" | "password", string>>;

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email, like name@example.com.";
    if (form.password.length < 8) next.password = "Use at least 8 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    // TODO: call your sign-up API here
    setLoading(false);
  };

  return (
    <>
      <p className="mt-2 text-lg text-[#0039DE]">Create an Account</p>
      <h2 className="font-Poppins mt-1 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
        Welcome to ByteSpace
      </h2>

      <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
        <TextField label="Full Name" placeholder="Jamie Davis" autoComplete="name" value={form.name} onChange={update("name")} error={errors.name} />
        <TextField label="Email" type="email" placeholder="designer@example.com" autoComplete="email" value={form.email} onChange={update("email")} error={errors.email} />
        <TextField label="Password" type="password" placeholder="••••••••" autoComplete="new-password" value={form.password} onChange={update("password")} error={errors.password} />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="h-[46px] rounded-full bg-[#C6F432] px-6 text-lg text-gray-900 transition hover:brightness-95 disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Creating account…" : "Continue"}
          </button>
        </div>
      </form>

      <p className="mt-auto pt-12 text-center text-gray-700">
        Already have an account?{" "}
        <Link href="/login" className="text-[#0039DE] hover:underline">
          Login
        </Link>
      </p>
    </>
  );
}