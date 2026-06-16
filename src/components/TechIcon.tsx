type TechIconProps = {
  skill: string;
};

const skillMeta: Record<string, { label: string; color: string; mark: "atom" | "db" | "nodes" | "code" | "box" }> = {
  JavaScript: { label: "JS", color: "#f7df1e", mark: "code" },
  TypeScript: { label: "TS", color: "#3178c6", mark: "code" },
  Java: { label: "JV", color: "#e63b2e", mark: "code" },
  HTML5: { label: "H5", color: "#e34f26", mark: "box" },
  CSS3: { label: "C3", color: "#1572b6", mark: "box" },
  SQL: { label: "SQL", color: "#0055ff", mark: "db" },
  "React.js": { label: "R", color: "#61dafb", mark: "atom" },
  "Next.js": { label: "N", color: "#1a1a1a", mark: "box" },
  Redux: { label: "RX", color: "#764abc", mark: "nodes" },
  "Tailwind CSS": { label: "TW", color: "#38bdf8", mark: "nodes" },
  "Material-UI": { label: "UI", color: "#007fff", mark: "box" },
  Bootstrap: { label: "B", color: "#7952b3", mark: "box" },
  "Responsive Design": { label: "RD", color: "#10b981", mark: "box" },
  "Node.js": { label: "ND", color: "#5fa04e", mark: "nodes" },
  "Express.js": { label: "EX", color: "#1a1a1a", mark: "nodes" },
  "REST APIs": { label: "API", color: "#0055ff", mark: "nodes" },
  JWT: { label: "JWT", color: "#e63b2e", mark: "box" },
  "Socket.io": { label: "IO", color: "#1a1a1a", mark: "nodes" },
  WebRTC: { label: "RTC", color: "#ffcc00", mark: "nodes" },
  MongoDB: { label: "MDB", color: "#47a248", mark: "db" },
  MySQL: { label: "MY", color: "#00758f", mark: "db" },
  "Database Design": { label: "DB", color: "#8b5cf6", mark: "db" },
  Git: { label: "G", color: "#f05032", mark: "nodes" },
  GitHub: { label: "GH", color: "#1a1a1a", mark: "nodes" },
  npm: { label: "npm", color: "#cb3837", mark: "box" },
  Vercel: { label: "▲", color: "#1a1a1a", mark: "box" },
  Netlify: { label: "NF", color: "#00ad9f", mark: "nodes" },
  Postman: { label: "PM", color: "#ff6c37", mark: "nodes" },
  "VS Code": { label: "VS", color: "#007acc", mark: "code" },
  "CI/CD": { label: "CI", color: "#ffcc00", mark: "nodes" },
  Figma: { label: "FG", color: "#a259ff", mark: "nodes" },
};

export function TechIcon({ skill }: TechIconProps) {
  const meta = skillMeta[skill] ?? {
    label: skill.slice(0, 2).toUpperCase(),
    color: "#0055ff",
    mark: "box" as const,
  };
  const foreground = meta.color === "#1a1a1a" ? "#ffffff" : "#1a1a1a";

  return (
    <svg
      aria-hidden="true"
      className="tech-icon"
      viewBox="0 0 40 40"
      role="img"
      focusable="false"
    >
      <rect x="3" y="3" width="34" height="34" rx="7" fill={meta.color} />
      <rect x="3" y="3" width="34" height="34" rx="7" fill="none" stroke="#1a1a1a" strokeWidth="3" />
      {meta.mark === "atom" ? (
        <>
          <ellipse cx="20" cy="20" rx="13" ry="5" fill="none" stroke={foreground} strokeWidth="2" />
          <ellipse cx="20" cy="20" rx="13" ry="5" fill="none" stroke={foreground} strokeWidth="2" transform="rotate(60 20 20)" />
          <ellipse cx="20" cy="20" rx="13" ry="5" fill="none" stroke={foreground} strokeWidth="2" transform="rotate(120 20 20)" />
          <circle cx="20" cy="20" r="2.8" fill={foreground} />
        </>
      ) : null}
      {meta.mark === "db" ? (
        <>
          <ellipse cx="20" cy="13" rx="10" ry="4.5" fill="none" stroke={foreground} strokeWidth="2.4" />
          <path d="M10 13v12c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5V13" fill="none" stroke={foreground} strokeWidth="2.4" />
          <path d="M10 21c0 2.5 4.5 4.5 10 4.5s10-2 10-4.5" fill="none" stroke={foreground} strokeWidth="2.4" />
        </>
      ) : null}
      {meta.mark === "nodes" ? (
        <>
          <circle cx="13" cy="14" r="3.6" fill={foreground} />
          <circle cx="27" cy="14" r="3.6" fill={foreground} />
          <circle cx="20" cy="27" r="3.6" fill={foreground} />
          <path d="M16 15h8M15 17l4 7M25 17l-4 7" fill="none" stroke={foreground} strokeWidth="2.2" />
        </>
      ) : null}
      {meta.mark === "code" ? (
        <>
          <path d="M16 14l-6 6 6 6M24 14l6 6-6 6" fill="none" stroke={foreground} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 12l-4 16" fill="none" stroke={foreground} strokeWidth="2.8" strokeLinecap="round" />
        </>
      ) : null}
      {meta.mark === "box" ? (
        <text x="20" y="25" textAnchor="middle" fill={foreground} fontSize="10" fontWeight="900" fontFamily="Arial, sans-serif">
          {meta.label}
        </text>
      ) : null}
    </svg>
  );
}
