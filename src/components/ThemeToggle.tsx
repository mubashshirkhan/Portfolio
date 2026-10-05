"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isLight = stored ? stored === "light" : window.matchMedia("(prefers-color-scheme: light)").matches;
    setLight(isLight);
    document.documentElement.dataset.theme = isLight ? "light" : "dark";
  }, []);
  function toggle() {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    localStorage.setItem("theme", next ? "light" : "dark");
  }
  return <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${light ? "dark" : "light"} theme`}><span>{light ? "☼" : "◐"}</span></button>;
}
