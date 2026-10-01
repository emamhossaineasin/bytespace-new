"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import TextField from "../TextField";

type Errors = Partial<Record<"email" | "password", string>>;

function FacebookIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M24 12a12 12 0 1 0-13.88 11.85v-8.38H7.08V12h3.04V9.36c0-3 1.8-4.67 4.54-4.67 1.31 0 2.68.24 2.68.24v2.95h-1.51c-1.49 0-1.95.93-1.95 1.87V12h3.32l-.53 3.47h-2.79v8.38A12 12 0 0 0 24 12Z"
      />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.24 10.29v3.9h5.46c-.24 1.4-1.66 4.1-5.46 4.1-3.29 0-5.97-2.72-5.97-6.08s2.68-6.08 5.97-6.08c1.87 0 3.12.8 3.84 1.48l2.62-2.52C17.02 3.52 14.86 2.5 12.24 2.5 6.98 2.5 2.73 6.75 2.73 12s4.25 9.5 9.51 9.5c5.49 0 9.13-3.86 9.13-9.29 0-.62-.07-1.1-.15-1.57l-8.98-.35Z"
      />
    </svg>
  );
}

export default function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email, like name@example.com.";
    if (!form.password) next.password = "Enter your password.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    // TODO: call your sign-in API here
    setLoading(false);
  };

  return (
    <>
      <p className="mt-2 text-lg text-[#0039DE]">Sign In</p>
      <h2 className="font-Poppins mt-1 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">Welcome Back</h2>

      <form onSubmit={handleSubmit} noValidate className="mt-12 space-y-6">
        <TextField label="Email" type="email" placeholder="designer@example.com" autoComplete="email" value={form.email} onChange={update("email")} error={errors.email} />
        <TextField label="Password" type="password" placeholder="••••••••" autoComplete="current-password" value={form.password} onChange={update("password")} error={errors.password} />

        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="h-[46px] rounded-full bg-[#C6F432] px-6 text-lg text-gray-900 transition hover:brightness-95 disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </div>
      </form>

      <div className="mt-14 flex items-center gap-4 text-gray-400">
        <span className="h-px flex-1 bg-gray-200" />
        or
        <span className="h-px flex-1 bg-gray-200" />
      </div>

      <div className="mt-12 flex justify-center gap-4">
        <button type="button" aria-label="Sign in with Facebook" className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-gray-200 text-gray-900 hover:bg-gray-50 cursor-pointer">
          <FacebookIcon />
        </button>
        <button type="button" aria-label="Sign in with Google" className="flex h-[72px] w-[72px] items-center justify-center rounded-2xl border border-gray-200 text-gray-900 hover:bg-gray-50 cursor-pointer">
          <GoogleIcon />
        </button>
      </div>

      <p className="mt-auto pt-12 text-center text-gray-500">
        New user?{" "}
        <Link href="/signup" className="text-[#0039DE] hover:underline">
          Create an account
        </Link>
      </p>
    </>
  );
}