import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zizar - Ingénierie Audiovisuelle & Systèmes IP",
  description: "Freelance spécialisé en ingénierie audiovisuelle, vidéo/audio sur IP (2110, NDI, AES67), certifié AWS Solution Architect et DANTE Level 3. Consulting, gestion de projets et opérateur polyvalent.",
  keywords: ["ingénierie audiovisuelle", "vidéo IP", "audio IP", "ST2110", "NDI", "AES67", "DANTE", "AWS", "consulting audiovisuel", "broadcast", "production vidéo"],
  authors: [{ name: "Zizar" }],
  creator: "Zizar",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zizar.fr",
    title: "Zizar - Ingénierie Audiovisuelle & Systèmes IP",
    description: "Expert en ingénierie audiovisuelle et systèmes IP. Consulting, gestion de projets et renforts techniques pour broadcasters et production vidéo.",
    siteName: "Zizar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zizar - Ingénierie Audiovisuelle & Systèmes IP",
    description: "Expert en ingénierie audiovisuelle et systèmes IP",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
