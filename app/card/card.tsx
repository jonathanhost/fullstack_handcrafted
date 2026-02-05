import Image from "next/image";

export default function Card({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: { src: string; height: number; width: number; alt: string };
}) {
  return (
    <section className="shadow-xl flex flex-col gap-5 rounded-md md:w-full md:h-full">
      <div className="w-full h-2/3">
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          className="shadow-xl rounded-t-md h-full w-full"
          alt={image.alt}
        />
      </div>
      <div className="h-1/3 p-3">
        <h3 className="font-bold">{title}</h3>
        <p>{description}</p>
      </div>
    </section>
  );
}
