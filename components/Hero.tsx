"use client";

import Image from "next/image";
import AvatarStack from "./AvatarStack";
import Navbar from "./Navbar";
import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";


const shapes = [
  { src: "/hero/squiggle-lime.svg", className: "left-0 top-[245px] w-[270px]" },
  { src: "/hero/squiggle-white.png", className: "left-[215px] top-[477px] w-[175px]" },
  { src: "/hero/ring-white.svg", className: "left-[60px] top-[700px] w-[340px]" },
  { src: "/hero/cylinder-lime.svg", className: "right-0 top-[245px] w-[230px]" },
  { src: "/hero/triangle_white.svg", className: "right-[175px] top-[522px] w-[188px]" },
  { src: "/hero/squiggle_white_r_bottom.svg", className: "right-[70px] top-[700px] w-[330px]" },
];

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/hero/avatars/${n}.png`);

export default function Hero() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) router.push(`/courses?q=${encodeURIComponent(q)}`);
  };

  return (
    <section
      className="relative overflow-hidden bg-[#0039DE]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)]
        bg-[size:calc(100%/12)_calc(100vw/12)]"
    >
      <Navbar />

      {/* Decorative 3D shapes (desktop only) */}
      {shapes.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          aria-hidden
          width={400}
          height={400}
          className={`pointer-events-none absolute h-auto xl:block ${s.className}`}
        />
      ))}

      {/* Heading, subtext, search */}
      <div className="relative mx-auto max-w-[935px] px-6 pt-10 text-center md:pt-14">
        <h1 className="font-Poppins text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-[72px]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="font-Satoshi mx-auto mt-6 max-w-[935px] text-base text-[#E5E6E8] md:text-lg">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>
        <div className="mt-12 md:mt-16 flex items-center w-[581px] mx-auto justify-center gap-4">
          <form onSubmit={handleSubmit} className="mt-6 flex w-[581px] gap-3">
              <input
                type="text"
                required
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Course, topic, creator"
                aria-label="Search query"
                className="h-12 flex-1 rounded-full border border-gray-300 px-5 text-sm bg-white placeholder:text-gray-400 text-black focus:outline-none"
              />
              <button type="submit" className="h-12 rounded-full bg-[#C6F432] px-6 text-sm font-medium text-gray-900 hover:brightness-95">
                Search
              </button>
            </form>
        </div>
      </div>

      {/* Bottom stage: lime circle, student, floating cards */}
      <div className="relative mx-auto mt-10 h-[360px] w-full max-w-[1120px] md:h-[474px]">
        {/* Lime circle; the section's overflow-hidden clips everything below the hero */}
        <div className="absolute left-1/2 top-[35px] aspect-square w-[700px] -translate-x-1/2 rounded-full bg-[#C6F432] md:w-[1120px]" />

        <Image
          src="/hero/student.png"
          alt="Smiling student with headphones holding a laptop"
          width={980}
          height={980}
          priority
          className="absolute bottom-0 left-1/2 h-[510px] w-auto -translate-x-1/2 "
        />

        {/* UI/UX card */}
        <div className="absolute left-[calc(50%-316px)] top-[89px] hidden rounded-2xl bg-white px-4 py-3 shadow-sm md:block">
          <p className="text-lg text-gray-900">UI/UX Design</p>
          <p className="text-xs text-gray-500">200 Courses • 1000+ Students</p>
        </div>

        {/* Learning progress card */}
        <div className="absolute left-[calc(50%+122px)] top-[101px] hidden w-[232px] rounded-2xl bg-white p-4 shadow-sm md:block">
          <p className="text-sm text-gray-800">Learning Progress</p>
          <p className="mt-1 text-5xl font-semibold text-gray-900">55%</p>
          <div className="mt-3 h-2 rounded-full bg-gray-100">
            <div className="h-full w-[55%] rounded-full bg-[#C6F432]" />
          </div>
        </div>

        {/* Happy students card */}
        <div className="absolute left-[calc(50%-392px)] top-[287px] hidden rounded-2xl bg-white p-4 shadow-sm md:block">
          <p className="text-gray-900">Happy Students</p>
          <p className="text-xs text-gray-500">
            4.5 (240) <span className="text-[#C6F432]">★</span>
          </p>
          <div className="mt-2">
            <AvatarStack images={avatars} size={40} label="2K+" />
          </div>
        </div>
      </div>
    </section>
  );
}