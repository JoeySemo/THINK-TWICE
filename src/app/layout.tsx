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
  title: "Think Twice - Make Better Decisions",
  description: "Think Twice is an intelligent decision-making platform that helps you analyze, evaluate, and choose with confidence. Make better decisions with our advanced tools and insights.",
  keywords: ["decision making", "analysis", "evaluation", "choices", "think twice"],
  authors: [{ name: "Joseph Knittel" }],
  openGraph: {
    title: "Think Twice - Make Better Decisions",
    description: "Make better decisions with our intelligent decision-making platform. Analyze, evaluate, and choose with confidence.",
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
