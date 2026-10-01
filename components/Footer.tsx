"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const toHref = (label: string) => `/${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    // TODO: send `email` to your newsletter API
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="bg-white pt-20">
      <div className="mx-auto w-9/10 ">
        <Link href="/" className="flex items-center gap-2">
          <img src="/icons/footer/footer_logo.svg" alt="ByteSpace" className="h-[37px] w-auto" />
        </Link>
        <div className="mx-auto grid gap-12 px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="mt-4 text-sm text-gray-600">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex max-w-[440px] gap-3 mt-[50px]">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-12 flex-1 rounded-full border border-gray-300 px-5 text-sm focus:border-[#0039DE] focus:outline-none placeholder:text-gray-300 text-black"
              />
              <button type="submit" className="h-12 rounded-full bg-[#C6F432] px-6 text-sm font-medium text-gray-900 hover:brightness-95">
                Subscribe
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500" aria-live="polite">
              {subscribed
                ? "Subscribed. Check your inbox for a confirmation email."
                : "By subscribing, you agree to our Privacy Policy and consent to receive updates from our company."}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col, i) => (
              <ul key={i} className="space-y-4">
                {col.map((label) => (
                  <li key={label}>
                    <Link href={toHref(label)} className="text-sm text-gray-600 hover:text-[#0039DE]">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-4 border-t border-gray-200 py-8 text-xs text-gray-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-gray-900">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}