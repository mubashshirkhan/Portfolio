import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Mubashshir Khan — Java Backend Developer",
  description: "Java Backend Developer focused on scalable, secure and high-performance backend systems with Java and Spring Boot.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    title: "Mubashshir Khan — Java Backend Developer",
    description: "Building scalable backend systems and modern web applications with Java & Spring Boot.",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary",
    title: "Mubashshir Khan — Java Backend Developer",
    description: "Building scalable backend systems and modern web applications with Java & Spring Boot.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
