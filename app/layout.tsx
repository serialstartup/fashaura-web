import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fashaura AI - Virtual Fashion Try-On",
  description: "Experience the future of fashion with our AI-powered virtual try-on technology. See how clothes look on you before you buy.",
  keywords: "AI, fashion, virtual try-on, artificial intelligence, clothing, style, technology",
  authors: [{ name: "Fashaura AI Team" }],
  creator: "Fashaura AI",
  publisher: "Fashaura AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://fashaura.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fashaura AI - Virtual Fashion Try-On",
    description: "Experience the future of fashion with our AI-powered virtual try-on technology. See how clothes look on you before you buy.",
    url: "https://fashaura.com",
    siteName: "Fashaura AI",
    images: [
      {
        url: "/logo.png",
        width: 1152,
        height: 896,
        alt: "Fashaura AI - Virtual Fashion Try-On",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashaura AI - Virtual Fashion Try-On",
    description: "Experience the future of fashion with our AI-powered virtual try-on technology. See how clothes look on you before you buy.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#c8287b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
