import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mubashshir Khan — Java Backend Developer",
  description: "Java Backend Developer focused on scalable, secure and high-performance backend systems with Java and Spring Boot.",
  metadataBase: new URL("https://mubashshirkhan.vercel.app"),
  openGraph: { title: "Mubashshir Khan — Java Backend Developer", description: "Building scalable backend systems and modern web applications with Java & Spring Boot.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
