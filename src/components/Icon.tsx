export function Icon({ name }: { name: "github" | "linkedin" | "mail" | "arrow" | "external" }) {
  if (name === "mail") return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="m4 6 8 6 8-6"/></svg>;
  if (name === "linkedin") return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M6 9v9M6 6.5v.1M10 18v-5a4 4 0 0 1 8 0v5M10 9v9"/></svg>;
  if (name === "arrow") return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M5 12h13M13 6l6 6-6 6"/></svg>;
  if (name === "external") return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 5h5v5M19 5l-8 8"/><path d="M17 13v5H5V6h5"/></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.7c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 20.3 5.6 5.1 5.1 0 0 0 20.2 2S19 1.6 16 3.6a13.4 13.4 0 0 0-7 0C6 1.6 4.8 2 4.8 2a5.1 5.1 0 0 0-.1 3.6A5.5 5.5 0 0 0 3.2 9.4c0 5.4 3.5 6.6 6.8 7a3.4 3.4 0 0 0-1 2.7V22"/></svg>;
}
