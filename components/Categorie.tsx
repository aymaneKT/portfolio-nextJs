import Image from "next/image";

export default function Categorie({
  categorieName,
}: {
  categorieName: string;
}) {
  return (
    <div className="flex items-center gap-4  mb-7 gsap-text">
      <Image
        src="/images/techGif.gif"
        alt="GIF"
        width={35}
        unoptimized
        height={50}
        quality={75}
        loading="lazy"
      />
      <h3 className="uppercase text-xl text-secondary font-semibold ">
        {categorieName}
      </h3>
    </div>
  );
}
