"use client";

import { useState } from "react";
import Link from "next/link";
import CourseCard from "./CourseCard";
import { categories, courses } from "@/data/courses";

export default function FeaturedCourses() {
  const [active, setActive] = useState("Featured");
  const visible = active === "Featured" ? courses : courses.filter((c) => c.category === active);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto xl:w-9/10 px-6">
        <p className="mx-auto max-w-[520px] text-center text-[44px] font-semibold leading-tight text-gray-900">
          Discover Your Passion, Build Your Skills
        </p>
        <p className="mx-auto mt-5 max-w-[720px] text-center text-gray-500">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across
          different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        <div className="mx-auto mt-10 flex max-w-[900px] flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full px-4 py-2 text-sm transition ${
                active === cat ? "bg-[#C6F432] font-medium text-gray-900" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
          <Link href="/courses" className="px-2 py-2 text-sm text-[#0039DE] hover:underline">
            + More
          </Link>
        </div>

        {visible.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="mt-14 text-center text-gray-500">No {active} courses yet. Pick another category or browse all courses.</p>
        )}
      </div>
    </section>
  );
}