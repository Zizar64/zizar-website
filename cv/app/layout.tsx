import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Lucas Izard - CV Numérique | Ingénieur Broadcast",
  description: "CV numérique de Lucas Izard - Ingénieur Broadcast spécialisé en infrastructures IP, plus de 5 ans d'expérience. Expert en intégration de systèmes, gestion de projets techniques et support.",
  keywords: ["Lucas Izard", "CV", "Ingénieur Broadcast", "infrastructures IP", "SMPTE 2110", "DANTE", "AWS", "AES67", "broadcast engineer"],
  authors: [{ name: "Lucas Izard" }],
  creator: "Lucas Izard",
  openGraph: {
    type: "profile",
    locale: "fr_FR",
    url: "https://cv.zizar.fr",
    title: "Lucas Izard - CV Numérique | Ingénieur Broadcast",
    description: "Ingénieur Broadcast spécialisé en infrastructures IP avec plus de 5 ans d'expérience",
    siteName: "Lucas Izard CV",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Izard - CV Numérique",
    description: "Ingénieur Broadcast spécialisé en infrastructures IP",
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
            <Header />
            <main className="flex-grow">{children}</main>
            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border no-print">
              <div className="max-w-7xl mx-auto px-4">
                <p>© {new Date().getFullYear()} Lucas Izard - Tous droits réservés</p>
                <p className="mt-2">
                  <a href="mailto:lucas.izardpro@gmail.com" className="hover:text-primary-500 transition-colors">
                    lucas.izardpro@gmail.com
                  </a>
                  {" • "}
                  <a href="tel:+33631023080" className="hover:text-primary-500 transition-colors">
                    +33 6 31 02 30 80
                  </a>
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
