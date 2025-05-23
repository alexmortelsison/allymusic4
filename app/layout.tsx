import type { Metadata } from "next";
import { Bungee_Outline, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";
import MobileNavbar from "./component/MobileNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bungee = Bungee_Outline({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ally Music",
  description: "Ally Music Production USA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bungee.className}  antialiased`}
      >
        <Navbar />
        {children}
        <div className="sticky bottom-0 w-full flex items-center justify-center bg-gray-800/20 backdrop-blur-lg py-8 my-4 md:rounded-lg rounded-full shadow-xs shadow-gray-500 lg:hidden">
          <MobileNavbar />
        </div>
      </body>
    </html>
  );
}
