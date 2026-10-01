"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import header_logo from "../public/icons/navbar/Header_Logo.svg";
import ShoppingBag from "../public/icons/navbar/ShoppingBag.png";

const mainLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/#courses" },
  { label: "Creators", href: "/#creators" },
];

const authLinks = [
  { label: "Sign in", href: "/login" },
  { label: "Join us", href: "/signup" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  const linkClass = (href: string) => {
    const active = href === pathname;
    return `font-Satoshi text-[16px] transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6F432] ${
      active ? "font-medium text-white" : "text-white/85"
    }`;
  };

  return (
    <nav className="relative z-50 h-[120px] w-full">
      <div className="mx-auto flex h-full w-86/100 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex flex-1 items-center">
          <Link href="/" aria-label="ByteSpace home">
            <Image src={header_logo} alt="ByteSpace" width={171} height={37} priority />
          </Link>
        </div>

        {/* Center links */}
        <ul className="hidden flex-1 items-center justify-center gap-7 md:flex">
          {mainLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={linkClass(l.href)} aria-current={l.href === pathname ? "page" : undefined}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right links */}
        <div className="hidden flex-1 items-center justify-end gap-7 md:flex">
          {authLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
          <Link href="/cart" aria-label="Shopping cart" className="transition-opacity hover:opacity-80">
            <Image src={ShoppingBag} alt="" width={16} height={20} />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="text-white md:hidden"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full bg-[#0039DE] px-6 pb-6 shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 border-t border-white/15 pt-4">
            {[...mainLinks, ...authLinks, { label: "Cart", href: "/cart" }].map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setOpen(false)} className={`block text-lg ${linkClass(l.href)}`}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}