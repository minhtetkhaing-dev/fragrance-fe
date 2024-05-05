import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavLinks from "./ui/nav-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fragrance Mart",
  description: "Fragrance Mart",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-slate-950 h-full'>
        <div className="flex items-center">
          <NavLinks/>
        </div>
        <div className="container mx-auto my-5 px-20 h-full">
          {children}
        </div>
      </body>
    </html>
  );
}
