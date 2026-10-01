import Image from "next/image";

type Props = { images: string[]; size?: number; label?: string };

export default function AvatarStack({ images, size = 28, label = "26+" }: Props) {
  return (
    <div className="flex items-center">
      {images.map((src, i) => (
        <Image
          key={`${src}-${i}`}
          src={src}
          alt=""
          width={size}
          height={size}
          style={{ width: size, height: size }}
          className="-ml-2 rounded-full border-2 border-white object-cover first:ml-0"
        />
      ))}
      <span
        style={{ width: size, height: size, fontSize: size * 0.32 }}
        className="-ml-2 flex items-center justify-center rounded-full border-2 border-white bg-[#C6F432] font-semibold text-gray-900"
      >
        {label}
      </span>
    </div>
  );
}
