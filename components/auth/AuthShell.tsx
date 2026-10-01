import { courses } from "@/data/courses";
import Image from "next/image";
import Link from "next/link";
import AvatarStack from "../AvatarStack";
import CourseCard from "../CourseCard";

const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/hero/avatars/${n}.png`);

type Props = { title: string; subtitle: string; children: React.ReactNode };

export default function AuthShell({ title, subtitle, children }: Props) {
  return (
    <main
      className="min-h-screen bg-[#0039DE]
        bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_2px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_2px)]
        bg-[size:calc(100%/12)_calc(100vw/12)]"
    >
      <div className="mx-auto grid max-w-86/100 gap-12 px-6 py-10 lg:grid-cols-[1fr_580px] lg:gap-16 lg:py-[34px] ">
        {/* Left: intro + visual */}
        <div>
          <Link href="/" aria-label="ByteSpace home" className="inline-block">
            <Image src="/signup/logo.svg" alt="ByteSpace logo" width={30} height={32} />
          </Link>

          <p className="font-Poppins mt-14 text-[20px] font-semibold text-white">{title}</p>
          <p className="font-Satoshi mt-4 max-w-[480px] text-[18px] font-normal leading-relaxed text-white/90">{subtitle}</p>

          <div className="relative mt-16 hidden h-[560px] w-[500px] lg:block" aria-hidden="true">
            <div className="absolute left-0 top-[90px] w-[373px] h-[384px]">
              <CourseCard course={courses[1]} />
            </div>
            <div className="absolute left-[111px] top-0 w-[373px] h-[384px] shadow-2xl">
              <CourseCard course={courses[2]} />
            </div>
            <Image src="/signup/circle_lime.svg" alt="" width={200} height={200} className="absolute left-[25px] top-[12px] w-[146px]" />
            <Image src="/signup/triangle_lime.svg" alt="" width={250} height={250} className="absolute -left-10 top-[400px] w-[188px]" />
            <div className="absolute left-[204px] top-[435px] w-[280px] rounded-2xl bg-[#C6F432] p-4">
              <p className="text-gray-900">Happy Students</p>
              <p className="text-xs text-gray-700">
                4.5 (240) <span className="text-[#0039DE]">★</span>
              </p>
              <div className="mt-2">
                <AvatarStack images={avatars} size={40} label="2K+" />
              </div>
            </div>
            <Image src="/hero/squiggle-white.svg" alt="" width={250} height={250} className="absolute left-[350px] top-[320px] w-[175px]" />
          </div>
        </div>

        {/* Right: form card */}
        <div className="flex flex-col rounded-3xl bg-white p-8 sm:p-16 lg:mt-[86px] lg:min-h-[784px]">{children}</div>
      </div>
    </main>
  );
}