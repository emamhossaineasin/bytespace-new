import Image from "next/image";
import Link from "next/link";

const shapes = [
  { src: "/cta/top_left.svg", className: "left-0 top-[0px] xl:w-[285px] lg:w-[200px] md:w-[180px] w-[150px]" },
  { src: "/cta/white_squiggle.svg", className: "lg:left-[178px] md:left-[120px] left-[80px] top-[5px] xl:w-[175px] lg:w-[130px] md:w-[110px] w-[100px]" },
  { src: "/cta/white_cone.svg", className: "top-[200px] top-6 xl:w-[130px] lg:w-[100px] md:w-[80px] w-[60px]" },
  { src: "/cta/lime_triangle.svg", className: "lg:right-[195px] md:right-[120px] right-[80px] top-6 xl:w-[178px] lg:w-[130px] md:w-[100px] w-[75px]" },
  { src: "/cta/lime_ring.svg", className: "left-[40px] bottom-[0px] xl:w-[330px] lg:w-[245px] md:w-[180px] w-[135px]" },
  { src: "/cta/lime_squiggle.svg", className: "right-4 bottom-0 xl:w-[270px] lg:w-[200px] md:w-[150px] w-[112.5px]" },
  { src: "/cta/white_cylinder.svg", className: "right-[0px] top-[6px] xl:w-[200px] lg:w-[150px] md:w-[112.5px] w-[84.375px]" },
];

export default function CTA() {
  return (
    <section className="bg-grid relative overflow-hidden xl:py-25 lg:py-15 py-10 text-center text-white bg-[#003BE2] bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_2px,transparent_2px)]
    bg-[size:calc(100%/12)_calc(100vw/12)]">
      {shapes.map((s) => (
        <Image
          key={s.src}
          src={s.src}
          alt=""
          aria-hidden
          width={300}
          height={300}
          className={`pointer-events-none absolute hidden h-auto sm:block ${s.className}`}
        />
      ))}

      <div className="relative mx-auto w-7/10 px-6 text-center">
        <div className="mx-auto w-7/10">
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