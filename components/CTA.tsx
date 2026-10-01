import Image from "next/image";
import Link from "next/link";

const shapes = [
  { src: "/cta/top_left.svg", className: "left-0 top-[0px] w-[285px]" },
  { src: "/cta/white_squiggle.svg", className: "left-[178px] top-[5px] w-[175px]" },
  { src: "/cta/white_cone.svg", className: "top-[200px] top-6 w-[130px]" },
  { src: "/cta/lime_triangle.svg", className: "right-[195px] top-6 w-[178px]" },
  { src: "/cta/lime_ring.svg", className: "left-[40px] bottom-[0px] w-[330px]" },
  { src: "/cta/lime_squiggle.svg", className: "right-4 bottom-0 w-[270px]" },
  { src: "/cta/white_cylinder.svg", className: "right-[0px] top-[6px] w-[200px]" },
];

export default function CTA() {
  return (
    <section className="bg-grid relative overflow-hidden py-25 text-center text-white bg-[#003BE2] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_1px)]
    bg-[size:calc(100%/12)_calc(100vw/12)]">
      {shapes.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          aria-hidden
          width={300}
          height={300}
          className={`pointer-events-none absolute hidden h-auto lg:block ${s.className}`}
        />
      ))}

      <div className="relative mx-auto w-7/10 px-6 text-center">
        <div className="mx-auto w-6/10">
          <p className="text-[20px] md:text-[25px] lg:text-[35px]  xl:text-[44px] font-semibold leading-tight">Unlock Your Potential as a Creator with ByteSpace</p>
        
        </div>
        <p className="mt-6 xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-Satosi leading-relaxed text-white/90">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and
          become a part of a community comprising over 10,000 local and international creators. Utilize our Course
          Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <Link
          href="/signup"
          className="mt-10 inline-block rounded-full bg-[#C6F432] px-7 py-3 font-medium text-gray-900 transition hover:brightness-95"
        >
          Join as Creator
        </Link>
      </div>
    </section>
  );
}