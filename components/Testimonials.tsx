import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#E6ECFF] via-white to-[#F3FBD8] py-24">
      <div className="mx-auto w-9/10 px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <h2 className="max-w-[550px] lg:text-[44px] md:text-[35px] sm:text-[28px] font-semibold leading-tight text-gray-900">
            Discover What Our Community Is Saying
          </h2>
          <p className="leading-relaxed text-gray-600 lg:text-[18px] md:">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly
            from those who have experienced the transformative journey of learning and creating on our platform.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white p-7 shadow-sm">
              <Image src={t.avatar} alt="" width={75} height={75} className="h-14 w-14 rounded-full object-cover" />
              <figcaption className="mt-5">
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-[#0039DE]">{t.role}</p>
              </figcaption>
              <blockquote className="mt-5 leading-relaxed text-gray-600">&ldquo;{t.quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}