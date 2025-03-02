import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Font configuration
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Metadata for SEO
export const metadata: Metadata = {
  title: "Khushi | Premium UI/UX Designer Portfolio",
  description: "Premium UI/UX design portfolio showcasing innovative digital experiences and creative solutions.",
  keywords: ["UI/UX", "Design", "Portfolio", "User Experience", "User Interface", "Digital Design"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className={`${montserrat.className} min-h-screen flex flex-col bg-white text-gray-900`}>
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 