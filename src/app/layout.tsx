import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Think Twice - Official Band Website",
  description: "Official website for Think Twice band. Stream 'Recovery' and 'Time' on all major platforms. Follow @thinktwicefl on Instagram and TikTok.",
  keywords: ["think twice", "band", "music", "recovery", "time", "thinktwicefl", "instagram", "tiktok", "jackson savage"],
  authors: [{ name: "Think Twice" }],
  openGraph: {
    title: "Think Twice - Official Band Website",
    description: "Official website for Think Twice band. Stream 'Recovery' and 'Time' on all major platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
