import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "AetherNova Technologies | World-Class Software Agency",
  description: "We build modern websites, web applications, SaaS platforms, healthcare systems, restaurant websites, e-commerce solutions and custom software that helps businesses grow.",
  openGraph: {
    title: "AetherNova Technologies",
    description: "Transforming Ideas Into Powerful Digital Products",
    url: "https://aethernova.com",
    siteName: "AetherNova Technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
