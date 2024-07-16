
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AnimatedTooltipPreview from "@/components/abovenav";
import Logo from "@/components/ui/logo";
import CustomFooter from "@/components/CustomFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Suvidha Foundation",
  description: "Internship Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Logo />
          <Navbar/>
          <AnimatedTooltipPreview/>
              {children}
        <CustomFooter/>
      </body>
    </html>
  );
}