"use client";

import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = ["About", "Skills", "Experience", "Projects", "Contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="navbar"><div className="nav-inner">
    <a className="brand" href="#top" aria-label="Mubashshir Khan home"><span className="brand-mark"><i>I</i>am<span>k</span></span></a>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation menu"><span /><span /></button>
    <nav className={open ? "nav-links open" : "nav-links"} aria-label="Primary navigation">{links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>)}</nav>
    <ThemeToggle />
  </div></header>;
}
