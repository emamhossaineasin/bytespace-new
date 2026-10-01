import { courseAvatars, type Course } from "@/data/courses";
import { Signal, Star } from "lucide-react";
import Image from "next/image";
import AvatarStack from "./AvatarStack";

export default function CourseCard({ course }: { course: Course }) {
  const meta = [`${course.lessons} Lessons`, course.duration, `${course.comments} Comments`];

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-2.5 transition hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image src={course.image} alt="" fill sizes="(min-width: 1024px) 340px, 100vw" className="object-cover" />
        <div className="absolute inset-x-2 bottom-2 flex gap-1.5">
          {meta.map((m) => (
            <span key={m} className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-white backdrop-blur-md">
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="px-1.5 pb-2 pt-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="truncate font-semibold text-gray-900">{course.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm text-gray-500">
            {course.rating}
            <Star className="h-3.5 w-3.5 fill-gray-300 text-gray-300" aria-hidden />
          </span>
        </div>
        <p className="text-xs text-[#0039DE]">by {course.author}</p>

        <div className="mt-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 h-[28px]">
            <Signal className="h-3.5 w-3.5" aria-hidden />
            {course.level}
          </span>
          <AvatarStack images={courseAvatars} />
        </div>

        <p className="mt-3 text-lg font-bold text-[#0039DE]">
          ${course.price}
          <span className="ml-1 text-xs font-normal text-gray-500">/lifetime</span>
        </p>
      </div>
    </article>
  );
}