import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

export const metadata: Metadata = {
  title: "Muhammad Arslan Sarwar | Full-Stack Web Developer",
  description: "Explore the portfolio of Muhammad Arslan Sarwar — a full-stack web developer specializing in modern, scalable web applications built with React, Node.js, and AI integrations.",
};


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 font-sans text-white antialiased")}>{children}</body>
    </html>
  );
}
