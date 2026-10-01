"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AvatarStack from "./AvatarStack";
import Navbar from "./Navbar";


const shapes = [
  { src: "/hero/squiggle-lime.svg", className: "left-0 lg:top-[245px] top-[200px] xl:w-[270px] lg:w-[200px] md:w-[150px] w-[100px]" },
  { src: "/hero/squiggle-white.svg", className: "xl:left-[215px] lg:left-[125px] top-[477px] xl:w-[175px] lg:w-[130px] md:w-[100px] w-[75px]" },
  { src: "/hero/ring-white.svg", className: "left-[60px] top-[700px] xl:w-[340px] lg:w-[250px] md:w-[200px] w-[150px]" },
  { src: "/hero/cylinder-lime.svg", className: "right-0 lg:top-[245px] top-[200px] xl:w-[230px] lg:w-[170px] md:w-[130px] w-[100px]" },
  { src: "/hero/triangle_white.svg", className: "xl:right-[175px] lg:right-[80px] right-[40px] xl:top-[522px] lg:top-[500px] top-[500px] xl:w-[188px] lg:w-[140px] w-[100px]" },
  { src: "/hero/squiggle_white_r_bottom.svg", className: "right-[70px] top-[700px] xl:w-[330px] lg:w-[245px] md:w-[180px] w-[135px]" },
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
        <div className="">
          <p className=" xl:text-[72px] lg:text-[56px] md:text-[48px] sm:text-[40px] text-[32px] font-semibold leading-[1.15] text-white sm:text-5xl">
          Get Access to Hundreds Courses Available
          </p>
          <p className="font-Satoshi mx-auto mt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] text-base text-[#E5E6E8] lg:w-full md:w-[80%] sm:w-[90%] w-full">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>
        </div>
        
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
          src="/images/student.png"
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