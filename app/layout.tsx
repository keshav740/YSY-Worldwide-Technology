import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/app/components/main/StarBackground";
import Navbar from "@/app/components/main/Navbar";
import Footer from "@/app/components/main/Footer";
import Contact from "@/app/components/sub/Contact";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YSY WorldWide Technology",
  description: "This is Our portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
