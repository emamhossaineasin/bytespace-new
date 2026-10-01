import Image from "next/image";
import CourseCard from "./CourseCard";
import { courses } from "@/data/courses";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export default function GrowthSection() {
  return (
    <section className="bg-[#FAFAFA] from-[#F3FBD8] via-white to-[#E6ECFF] py-24">
      <div className="mx-auto grid w-9/10 items-center gap-6 px-6 lg:grid-cols-2">
        <div className="w-[574px] ">
          <p className="max-w-[80%] text-[20px] md:text-[25px] lg:text-[30px]  xl:text-[44px] font-semibold leading-tight text-[#242528]">
            Your Path to Professional Growth Starts Here!
          </p>
          <p className="mt-6 max-w-[440px] leading-relaxed text-gray-600">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career
            journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new
            career path entirely, we have the resources you need.
          </p>
          <dl className="mt-10 flex gap-12">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse">
                <dt className="mt-1 text-sm text-gray-600">{s.label}</dt>
                <dd className="text-3xl font-medium text-[#0039DE]">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto h-[480px] w-full max-w-[621px] ">
          <div className="absolute left-0 top-0 w-[360px] shadow-xl">
            <CourseCard course={courses[0]} />
          </div>
          <Image
            src="/images/student.png"
            alt="Student with headphones holding a laptop"
            width={600}
            height={700}
            className="absolute bottom-5 right-5 h-[440px] w-auto"
          />
          <div className="absolute right-4 top-[190px] w-[190px] rounded-2xl bg-white p-4 shadow-lg">
            <p className="text-xs text-gray-800">Learning Progress</p>
            <p className="mt-1 text-4xl font-semibold text-gray-900">55%</p>
            <div className="mt-2 h-2 rounded-full bg-gray-100">
              <div className="h-full w-[55%] rounded-full bg-[#C6F432]" />
            </div>
          </div>
          <Image src="/growth/squiggle-lime.svg" alt="" aria-hidden width={200} height={200} className="absolute -right-4 top-10 w-[215px]" />
        </div>
      </div>
    </section>
  );
}