import type { Metadata } from "next";
import "./globals.css";
import { profile } from "../data/profile";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.mubashshir.me";
const siteTitle = `${profile.name} — ${profile.title}`;
const siteDescription = `${profile.title} in ${profile.location}. ${profile.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${profile.name}`,
  },
  description: siteDescription,
  keywords: [
    "Mubashshir Khan",
    "Java Backend Developer",
    "Spring Boot Developer",
    "backend developer in Hyderabad",
    "Java developer portfolio",
    "REST API developer",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    locale: "en_IN",
    images: [{ url: "/logo/iamk-reference.png", alt: `${profile.name} portfolio logo` }],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/logo/iamk-reference.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
