import Image from "next/image";

const galleryImages = [
  {
    src: "/thinktwice/photos/live-2025/vocalist-closeup.png",
    alt: "Vocalist mid-scream with hand raised",
    caption: "Lead vocals mid-set, intense energy",
  },
  {
    src: "/thinktwice/photos/live-2025/full-band-stage.png",
    alt: "Full band on stage with color lighting",
    caption: "Full band lineup, opening for Attack Attack!",
  },
  {
    src: "/thinktwice/photos/live-2025/drummer-action.png",
    alt: "Drummer playing on stage with motion blur",
    caption: "Locked in on drums. Pure rhythm.",
  },
];

export default function LiveGalleryPage() {
  return (
    <main className="bg-[#0B0B0F] text-[#F5F7FA] font-inter">
      <section className="relative w-full h-[80vh]">
        <Image
          src="/thinktwice/photos/live-2025/crowd-engagement.png"
          alt="THINK TWICE crowd raising lights during set"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white font-oswald text-4xl md:text-6xl text-center">
            FINDING PEACE IN THE MISERY
          </h1>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 p-6">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-xl">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-sm">
              {img.caption}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
