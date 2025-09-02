import Image from "next/image";

const galleryImages = [
  {
    src: "https://placehold.co/800x500?text=Live+1",
    alt: "THINK TWICE live with crowd hands raised",
    caption: "Thank you Orlando — August 2025",
  },
  {
    src: "https://placehold.co/800x500?text=Live+2",
    alt: "Vocalist screaming into mic under red lighting",
    caption: "Lead vocals mid-set, intense energy",
  },
  {
    src: "https://placehold.co/800x500?text=Live+3",
    alt: "Full band on stage with color lighting",
    caption: "Full band lineup, opening for Attack Attack!",
  },
  {
    src: "https://placehold.co/800x500?text=Live+4",
    alt: "Drummer mid-performance with sticks in motion",
    caption: "Locked in on drums. Pure rhythm.",
  },
];

export default function LiveGalleryPage() {
  return (
    <main className="bg-[#0B0B0F] text-white min-h-screen">
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="https://placehold.co/1600x900?text=Live+Hero"
          alt="THINK TWICE live with crowd"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
            FINDING PEACE IN THE MISERY
          </h1>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6 p-8">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-lg">
            <Image
              src={img.src}
              alt={img.alt}
              width={800}
              height={500}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/60 p-3 text-sm text-white">
              {img.caption}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

