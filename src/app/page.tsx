import { Navbar } from "../components/Navbar";
import { About, Certifications, Contact, ContributionGraph, Education, Experience, Footer, Hero, Projects, Skills } from "../components/PortfolioSections";

export default function Home() {
  return <><Navbar /><main><Hero /><ContributionGraph /><About /><Skills /><Experience /><Education /><Certifications /><Projects /><section className="resume-cta section"><div><p className="eyebrow">Keep in touch</p><h2>Let&apos;s build something <span>meaningful.</span></h2></div><a className="button primary" href="/resume/Mubashshir-Khan-Azam-Khan-Resume.docx" download>Download resume</a></section><Contact /></main><Footer /></>;
}
