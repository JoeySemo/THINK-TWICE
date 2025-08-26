import Image from 'next/image';
import { Oswald, Inter } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function Live() {
  return (
    <main className={`${inter.className} bg-[#0B0B0F] text-[#F5F7FA]`}>
      <section className="relative h-[60vh] flex items-center justify-center">
        <Image
          src="/thinktwice/photos/live-2025/crowd-engagement.png"
          alt="Crowd engaging with the band during live performance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className={`${oswald.className} relative z-10 text-4xl md:text-6xl tracking-wide text-center`}>
          FINDING PEACE IN THE MISERY
        </h1>
      </section>

      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Image 1 */}
        <figure className="group relative overflow-hidden rounded-lg">
          <Image
            src="/thinktwice/photos/live-2025/vocalist-closeup.png"
            alt="Close-up of the vocalist singing passionately"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Vocalist close-up
          </figcaption>
        </figure>

        {/* Image 2 */}
        <figure className="group relative overflow-hidden rounded-lg">
          <Image
            src="/thinktwice/photos/live-2025/full-band-stage.png"
            alt="Full band performing on stage under lights"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Full band on stage
          </figcaption>
        </figure>

        {/* Image 3 */}
        <figure className="group relative overflow-hidden rounded-lg">
          <Image
            src="/thinktwice/photos/live-2025/drummer-action.png"
            alt="Drummer captured mid-action"
            width={500}
            height={500}
            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          <figcaption className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-transparent p-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
            Drummer in action
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

