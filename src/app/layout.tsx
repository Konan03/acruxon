import type { Metadata } from "next";
import localFont from "next/font/local";
import { site } from "@/config/site";
import "./globals.css";

const inter = localFont({
  src: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acruxon | Soluciones Tecnológicas",
  description: site.description,
  openGraph: { title: "Acruxon | Soluciones Tecnológicas", description: site.description, type: "website", locale: "es_CO", siteName: site.name },
  icons: { icon: "/acruxon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es" className={inter.variable}><body>{children}</body></html>;
}
