import { Building2, Camera, Code, Laptop, Megaphone, PencilRuler } from "lucide-react";
import Link from "next/link";

const paths = [
  { label: "Design", icon: PencilRuler },
  { label: "Development", icon: Code },
  { label: "IT & Software", icon: Laptop },
  { label: "Business", icon: Building2 },
  { label: "Marketing", icon: Megaphone },
  { label: "Photography", icon: Camera },
];

export default function Categories() {
  return (
    <section className="pb-24 bg-white">
      <div className="mx-auto w-9/10 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Explore Diverse Learning Paths at Bytespace</h2>
        <p className="mx-auto mt-4 max-w-[850px] text-gray-500">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans
          various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully
          curated categories.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map(({ label, icon: Icon }) => (
            <Link
              key={label}
              href={`/courses?category=${encodeURIComponent(label)}`}
              className="flex flex-col items-center gap-4 rounded-2xl border border-gray-200 bg-white py-8 shadow-sm transition hover:border-[#0039DE]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#C6F432]">
                <Icon className="h-6 w-6 text-gray-900" aria-hidden />
              </span>
              <span className="text-sm text-gray-900">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}