import Image from "next/image";

const logos = [1, 2, 3, 4, 5].map((n) => `/images/partners/logo-${n}.svg`);

export default function Partners() {
  return (
    <section className="bg-[#F5F5F6] h-[202px] flex items-center">
      <div className="mx-auto w-9/10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 px-6">
        {logos.map((src, i) => (
          <Image key={src} src={src} alt={`Partner ${i + 1}`} width={167} height={41} className="h-9 w-[167px] h-[41px] opacity-80" />
        ))}
      </div>
    </section>
  );
}