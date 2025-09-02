import Image from "next/image";
import links from "../links.json";

export default function Home() {
  return (
    <main style={{ background: "#0B0B0F", color: "#fff", minHeight: "100vh" }}>
      <section style={{ textAlign: "center", padding: "2rem 1rem" }}>
        <Image
          src="https://placehold.co/1200x800?text=Hero"
          alt="THINK TWICE hero"
          width={1200}
          height={800}
          priority
        />
        <h1 style={{ fontSize: "2.5rem", marginTop: "1rem" }}>THINK TWICE</h1>
        <div style={{ marginTop: "0.5rem" }}>
          {links.socials.map((s) => (
            <a
              key={s.href}
              href={s.href}
              style={{ margin: "0 0.5rem", display: "inline-block" }}
            >
              {s.source}
            </a>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          />
        </div>
      </section>

      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {[
          "https://placehold.co/400x266?text=Gallery+1",
          "https://placehold.co/400x266?text=Gallery+2",
          "https://placehold.co/400x266?text=Gallery+3",
        ].map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Gallery image ${i + 1}`}
            width={400}
            height={266}
          />
        ))}
      </section>
    </main>
  );
}
