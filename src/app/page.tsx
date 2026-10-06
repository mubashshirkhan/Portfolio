import { Navbar } from "../components/Navbar";
import { About, Certifications, Contact, ContributionGraph, Education, Experience, Footer, Hero, Projects, Skills } from "../components/PortfolioSections";
import { profile } from "../data/profile";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    description: profile.tagline,
    url: "https://www.mubashshir.me",
    email: `mailto:${profile.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" },
    sameAs: [profile.github, profile.linkedin],
    knowsAbout: ["Java", "Spring Boot", "REST APIs", "Backend Development", "Databases", "TypeScript"],
  };

  return <><Navbar /><main><Hero /><ContributionGraph /><About /><Skills /><Experience /><Education /><Certifications /><Projects /><section className="resume-cta section"><div><p className="eyebrow">Keep in touch</p><h2>Let&apos;s build something <span>meaningful.</span></h2></div><a className="button primary" href="/resume/Mubashshir-Khan-Azam-Khan-Resume.docx" download>Download resume</a></section><Contact /></main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></>;
}
