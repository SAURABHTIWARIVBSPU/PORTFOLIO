import { lazy, Suspense, useState } from "react";
import type { FormEvent } from "react";
import {
  ArrowUpRight,
  Code2,
  Download,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";
import { SectionHeading } from "./components/SectionHeading";
import { TechIcon } from "./components/TechIcon";
import {
  certifications,
  education,
  experience,
  focusAreas,
  heroMetrics,
  profile,
  projects,
  skillGroups,
} from "./data/portfolio";

const HeroScene = lazy(() =>
  import("./components/HeroScene").then((module) => ({
    default: module.HeroScene,
  })),
);

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const fadeUp: MotionProps = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
};

function App() {
  const [whatsAppStatus, setWhatsAppStatus] = useState("");

  const handleWhatsAppSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const timeline = String(formData.get("timeline") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hi Saurabh, I came from your portfolio.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      `Timeline: ${timeline}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const url = `https://wa.me/918948905711?text=${encodeURIComponent(
      whatsappMessage,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setWhatsAppStatus("WhatsApp chat opened with your details.");
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen text-slate-950">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Saurabh Tiwari home">
          <span>ST</span>
        </a>
        <div className="brand-copy" aria-hidden="true">
          <strong>Saurabh Tiwari</strong>
          <span>Frontend | React | MERN</span>
        </div>
        <nav className="hidden items-center gap-2 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            className="icon-action"
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub"
            title="GitHub"
          >
            <Code2 size={18} />
          </a>
          <a
            className="icon-action"
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn"
            title="LinkedIn"
          >
            <Network size={18} />
          </a>
          <a
            className="header-cta"
            href={profile.links.resume}
            download="Saurabh-Tiwari-Resume.pdf"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
          <div className="hero-shell">
            <motion.div className="hero-copy" {...fadeUp}>
              <div className="status-pill">
                <Sparkles size={16} />
                <span>Available for frontend and full-stack roles</span>
              </div>
              <h1>{profile.name}</h1>
              <p className="hero-role">{profile.headline}</p>
              <p className="hero-summary">{profile.summary}</p>
              <div className="hero-actions">
                <a className="primary-action" href="#projects">
                  <ArrowUpRight size={18} />
                  <span>View Projects</span>
                </a>
                <a
                  className="secondary-action"
                  href={profile.links.resume}
                  download="Saurabh-Tiwari-Resume.pdf"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
                <a
                  className="whatsapp-action"
                  href="https://wa.me/918948905711"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="contact-strip" aria-label="Contact details">
                <a href={profile.links.phone}>
                  <Phone size={16} />
                  <span>{profile.phone}</span>
                </a>
                <a href={profile.links.email}>
                  <Mail size={16} />
                  <span>{profile.email}</span>
                </a>
                <span>
                  <MapPin size={16} />
                  {profile.location}
                </span>
              </div>
            </motion.div>

            <motion.div
              className="portrait-wrap"
              initial={{ opacity: 0, scale: 0.96, rotate: 0 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            >
              <picture>
                <source
                  type="image/webp"
                  media="(min-width: 920px)"
                  srcSet="/assets/saurabh-profile-960.webp"
                />
                <source
                  type="image/webp"
                  media="(min-width: 540px)"
                  srcSet="/assets/saurabh-profile-640.webp"
                />
                <img
                  src="/assets/saurabh-profile-420.webp"
                  alt="Saurabh Tiwari portrait"
                  width="420"
                  height="560"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </motion.div>
          </div>
          <div className="metric-grid">
            {heroMetrics.map((metric) => (
              <motion.div className="metric-card" key={metric.label} {...fadeUp}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="content-section">
          <SectionHeading
            eyebrow="Core Strengths"
            title="Frontend development, real-time features, and product UI."
            copy="A focused overview of the areas I work on most: responsive interfaces, API-connected screens, reusable components, and live communication flows."
            icon={Sparkles}
          />
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <motion.article className="glass-card focus-card" key={area.title} {...fadeUp}>
                <div className="focus-card-top">
                  <area.icon size={24} />
                  <span>0{index + 1}</span>
                </div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.copy}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section" id="work">
          <SectionHeading
            eyebrow="Experience"
            title="Experience working on real web products."
            copy="Frontend roles and internships where I worked on UI implementation, API integration, debugging, responsive layouts, and deployment-ready features."
          />
          <div className="timeline">
            {experience.map((item) => (
              <motion.article className="timeline-item" key={`${item.company}-${item.role}`} {...fadeUp}>
                <div className="timeline-icon">
                  <item.icon size={20} />
                </div>
                <div className="timeline-card">
                  <div className="card-heading">
                    <div>
                      <h3>{item.role}</h3>
                      <p>
                        {item.company} - {item.location}
                      </p>
                    </div>
                    <span>{item.date}</span>
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <SectionHeading
            eyebrow="Projects"
            title="Projects built with React, Next.js, Tailwind CSS, and WebRTC."
            copy="Live projects from my resume, covering digital tools, browser meeting rooms, random video/text rooms, and reusable frontend patterns."
          />
          <div className="project-grid">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card project-card-${project.accent}`}
                key={project.title}
                {...fadeUp}
              >
                <div className="project-preview" aria-hidden="true">
                  <div className="preview-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="preview-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="preview-chip">{project.outcome}</div>
                </div>
                <div className="project-top">
                  <div className="project-icon">
                    <project.icon size={24} />
                  </div>
                  <span className="project-index">0{index + 1}</span>
                  <a
                    className="visit-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                    title={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a
                  className="project-footer-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Open live project</span>
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <SectionHeading
            eyebrow="Stack"
            title="Technical skills used in daily development."
            copy="Frontend, backend, database, and tooling experience used across internships, live projects, and product sections."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <motion.article className="skill-card" key={group.title} {...fadeUp}>
                <div className="skill-title">
                  <group.icon size={20} />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      <TechIcon skill={skill} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="content-section education-section">
          <SectionHeading
            eyebrow="Education"
            title="Education, certifications, and developer communities."
          />
          <div className="education-grid">
            <motion.article className="education-card" {...fadeUp}>
              <education.icon size={24} />
              <h3>{education.degree}</h3>
              <p>
                {education.school} - {education.location}
              </p>
              <div className="education-meta">
                <span>{education.date}</span>
                <span>{education.gpa}</span>
              </div>
            </motion.article>
            <div className="cert-grid">
              {certifications.map((item) => (
                <motion.article className="cert-card" key={item.title} {...fadeUp}>
                  <item.icon size={20} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <motion.div className="contact-panel" {...fadeUp}>
            <div>
              <div className="eyebrow">
                <Send size={16} />
                <span>Contact</span>
              </div>
              <h2>Tell me what you want to build.</h2>
              <p>
                Fill the form and it will open WhatsApp with your details ready to
                send to Saurabh.
              </p>
              <div className="contact-mini-list">
                <span>React / Next.js UI</span>
                <span>MERN stack</span>
                <span>WebRTC / Socket.io</span>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-row">
                <label>
                  <span>Name</span>
                  <input name="name" type="text" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Project type</span>
                  <select name="projectType" required defaultValue="">
                    <option value="" disabled>
                      Select type
                    </option>
                    <option>Frontend website</option>
                    <option>React / Next.js app</option>
                    <option>MERN stack product</option>
                    <option>WebRTC / real-time app</option>
                  </select>
                </label>
                <label>
                  <span>Timeline</span>
                  <select name="timeline" required defaultValue="">
                    <option value="" disabled>
                      Select timeline
                    </option>
                    <option>Urgent</option>
                    <option>1-2 weeks</option>
                    <option>2-4 weeks</option>
                    <option>Flexible</option>
                  </select>
                </label>
              </div>
              <label>
                <span>Message</span>
                <textarea
                  name="message"
                  placeholder="Share a few details about your project..."
                  rows={5}
                  required
                />
              </label>
              <div className="form-footer">
                <a href={profile.links.email}>
                  <Mail size={16} />
                  <span>Email instead</span>
                </a>
                <button type="submit">
                  <MessageCircle size={18} />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
              {whatsAppStatus ? (
                <p className="form-status" role="status">
                  {whatsAppStatus}
                </p>
              ) : null}
            </form>
          </motion.div>
        </section>

        <footer className="site-footer">
          <span>{profile.name}</span>
          <span>Frontend Developer - React.js - MERN Stack</span>
        </footer>
      </main>
    </div>
  );
}

export default App;
