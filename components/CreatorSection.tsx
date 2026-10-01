import { CircleCheck } from "lucide-react";
import Image from "next/image";
import AvatarStack from "./AvatarStack";

const points = ["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"];
const avatars = [1, 2, 3, 4, 5, 6, 7].map((n) => `/hero/avatars/${n}.png`);

export default function CreatorSection() {
  return (
    <section className="bg-[#FAFAFA] from-[#E6ECFF] via-white to-[#F3FBD8] py-24">
      <div className="mx-auto grid w-9/10 items-center gap-6 px-6 lg:grid-cols-2">
        <div className="relative mx-auto h-[520px] w-full max-w-[700px] ">
          <div className="absolute left-0 top-0 w-[232px] h-[119px] rounded-2xl bg-[#0039DE] p-4 text-white shadow-lg">
            <p className="text-sm">Total Revenue</p>
            <p className="text-[10px] text-white/70">July 1-31</p>
            <p className="mt-2 text-2xl font-semibold">$120.29</p>
            <div className="h-[7px] bg-white mt-2 rounded-full">
              <div className="h-full w-[60%] rounded-full bg-[#C6F432]" />
            </div>
          </div>

          <div className="absolute left-0 top-[140px] w-[134px] h-[135px] rounded-2xl bg-[#0039DE] p-4 text-white shadow-lg">
            <p className="text-sm">Year to Date</p>
            <p className="text-[10px] text-white/80">2023</p>
            <p className="mt-2 text-xl font-semibold">$1,200.38</p>
            <span className="mt-2 inline-block rounded-full bg-[#C6F432] px-2 py-1 text-[10px] font-medium text-gray-900">+12$</span>
          </div>
          <Image
            src="/creator/student_female.png"
            alt="Creator with headphones holding a tablet"
            width={800}
            height={800}
            className="absolute bottom-0 h-[596px] w-auto "
          />
          <Image src="/creator/squiggle_lime.svg" alt="" aria-hidden width={200} height={200} className="absolute right-3 top-[80px] w-[185px]" />

          <div className="absolute bottom-16 right-0 rounded-2xl bg-white p-4 shadow-lg">
            <p className="text-sm text-gray-900">Happy Students</p>
            <p className="text-xs text-gray-500">
              4.5 (240) <span className="text-[#C6F432]">★</span>
            </p>
            <div className="mt-2">
              <AvatarStack images={avatars} size={36} />
            </div>
          </div>
        </div>

        <div className=" ml-5">
          <h2 className="max-w-[360px] text-[25px] lg:text-[35px]  xl:text-[44px] font-semibold leading-tight text-[#242528]">Create &amp; Manage Courses Easily.</h2>
          <p className="mt-6 max-w-[460px] leading-relaxed text-gray-600">
            <strong className="text-gray-900">ByteSpace</strong> supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-gray-800">
                <CircleCheck className="h-5 w-5 fill-[#0039DE] text-white" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}