import { profile } from "../data/profile";
import { socialLinks } from "../data/social";
import { skillGroups } from "../data/skills";
import { experiences } from "../data/experience";
import { education } from "../data/education";
import { certifications } from "../data/certifications";
import { projects } from "../data/projects";
import { Icon } from "./Icon";
import { ContributionGraph } from "./ContributionGraph";

export function Hero() {
  return <section className="hero section" id="top"><div className="hero-copy"><p className="eyebrow">Hello, I&apos;m</p><h1>{profile.name}</h1><p className="hero-title">{profile.title}<span>.</span></p><p className="hero-text">{profile.tagline}</p><div className="hero-actions"><a className="button primary" href="#projects">View my work <Icon name="arrow" /></a><a className="button ghost" href="/resume/Mubashshir-Khan-Azam-Khan-Resume.docx" download>Download resume</a></div><div className="social-row">{socialLinks.map((item) => <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><Icon name={item.icon} />{item.label}</a>)}</div></div><div className="hero-art" aria-hidden="true"><div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="geometry"><span className="geometry-square" /><span className="geometry-axis axis-x" /><span className="geometry-axis axis-y" /><span className="geometry-axis axis-z" /></div><div className="art-label">JAVA / SPRING / API</div></div></section>;
}

export function About() {
  return <section id="about" className="section about-section"><div className="section-heading"><p className="eyebrow">A little about me</p><h2>Building with purpose.</h2></div><div className="about-grid"><p className="large-copy">I&apos;m a Java backend developer who enjoys turning complex requirements into reliable, thoughtful software.</p><div><p>{profile.goal}</p><p>My foundation spans backend engineering, databases, frontend interfaces, and the tools that help teams ship with confidence.</p></div></div></section>;
}

export function Skills() {
  return <section id="skills" className="section"><div className="section-heading"><p className="eyebrow">What I work with</p><h2>Technical skills</h2></div><div className="skill-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div className="tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></article>)}</div></section>;
}

export function Experience() {
  return <section id="experience" className="section"><div className="section-heading"><p className="eyebrow">Where I&apos;ve been</p><h2>Work experience</h2></div><div className="timeline">{experiences.map((item) => <article className="timeline-item" key={item.id}><div className="timeline-marker" /><div className="timeline-meta"><span>{item.startDate} — {item.endDate}</span><b>{item.endDate === "Present" ? "PRESENT" : ""}</b></div><div className="timeline-content"><p className="company">{item.company}</p><h3>{item.role}</h3><p className="location">{item.location}</p><ul>{item.description.map((line) => <li key={line}>{line}</li>)}</ul></div></article>)}</div></section>;
}

export function Education() {
  return <section className="section split-section"><div className="section-heading"><p className="eyebrow">Education</p><h2>Foundation for growth.</h2></div><div className="info-panel"><div><h3>{education.degree}</h3><p>{education.status} · CGPA {education.cgpa}</p></div><strong>{education.period}</strong></div></section>;
}

export function Certifications() {
  return <section className="section" id="certifications"><div className="section-heading"><p className="eyebrow">Learning continuously</p><h2>Certifications &amp; training</h2></div><div className="cert-grid">{certifications.map((item, index) => <article className="cert-card" key={item.title}><span className="card-number">0{index + 1}</span><h3>{item.title}</h3><p className="issuer">{item.issuer}</p><p>{item.description}</p></article>)}</div></section>;
}

export function Projects() {
  return <section className="section projects-section" id="projects"><div className="section-heading"><p className="eyebrow">Selected work</p><h2>Projects</h2></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.id}><div className="project-preview"><span>ResQ<span>Net</span></span><small>AI DISASTER RESPONSE SYSTEM</small><div className="signal signal-one" /><div className="signal signal-two" /></div><div className="project-content"><p className="eyebrow">Featured project</p><h3>{project.title} <span>— {project.description}</span></h3>{project.details.map((detail) => <p key={detail}>{detail}</p>)}<div className="tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><div className="project-links">{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <Icon name="external" /></a>}{project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">Live demo <Icon name="arrow" /></a>}</div></div></article>)}</div></section>;
}

export function Contact() {
  return <section className="section contact-section" id="contact"><div className="contact-copy"><p className="eyebrow">Let&apos;s connect</p><h2>Have an idea?<br /><span>Let&apos;s talk.</span></h2><p>Whether you&apos;re building a product or looking for a backend developer, I&apos;d be happy to hear from you.</p><a className="email-link" href={`mailto:${profile.email}`}>{profile.email} <Icon name="arrow" /></a></div><form className="contact-form" action={`mailto:${profile.email}`} method="post" encType="text/plain"><label>Name<input name="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Subject<input name="subject" required placeholder="What&apos;s on your mind?" /></label><label>Message<textarea name="message" required rows={5} placeholder="Tell me a little about it..." /></label><button className="button primary" type="submit">Send message <Icon name="arrow" /></button><small>This form opens your email client. No message is claimed as sent until you submit it.</small></form></section>;
}

export function Footer() {
  return <footer className="footer"><div><span className="brand-mark"><i>I</i>am<span>k</span></span><p>Java Backend Developer building useful things with care.</p></div><div className="footer-socials">{socialLinks.map((item) => <a key={item.label} href={item.href} aria-label={item.label}><Icon name={item.icon} /></a>)}</div><p className="copyright">© 2026 Mubashshir Khan Azam Khan. Built with Next.js, TypeScript &amp; Vercel.</p></footer>;
}

export { ContributionGraph };
