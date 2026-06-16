import {
  BadgeCheck,
  Boxes,
  BrainCircuit,
  BriefcaseBusiness,
  Code2,
  Database,
  GraduationCap,
  Layers3,
  MonitorSmartphone,
  RadioTower,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const profile = {
  name: "Saurabh Tiwari",
  headline: "Frontend Developer | React.js Developer | MERN Stack Developer",
  location: "Gurugram, Haryana",
  phone: "+91 8948905711",
  email: "saurabh.t.vbspu@gmail.com",
  summary:
    "Frontend developer focused on React.js, Next.js, TypeScript, Tailwind CSS, and MERN stack development. I have worked on live product pages, inventory interfaces, API-connected screens, and real-time WebRTC applications.",
  links: {
    email: "mailto:saurabh.t.vbspu@gmail.com",
    phone: "tel:+918948905711",
    linkedin: "https://www.linkedin.com/in/saurabh-tiwari-a3296b227/",
    github: "https://github.com/SAURABHTIWARIVBSPU",
    portfolio: "https://saurabh-tiwari.netlify.app/",
    resume: "/assets/saurabh-tiwari-resume.pdf",
  },
};

export const heroMetrics = [
  { value: "1+", label: "Year Experience" },
  { value: "3", label: "Live Projects" },
  { value: "React", label: "Primary Frontend Stack" },
  { value: "MERN", label: "Full-Stack Workflow" },
];

export const focusAreas: Array<{
  icon: LucideIcon;
  title: string;
  copy: string;
}> = [
  {
    icon: MonitorSmartphone,
    title: "Frontend Development",
    copy: "Responsive pages, reusable components, clean layouts, and UI implementation from product requirements.",
  },
  {
    icon: RadioTower,
    title: "Real-Time Features",
    copy: "Meeting rooms, WebRTC media, Socket.io signaling, chat flows, reconnect states, and screen sharing.",
  },
  {
    icon: Workflow,
    title: "Product Integration",
    copy: "API integration, browser fixes, listing flows, inventory screens, and deployment on Vercel/Netlify.",
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Anslation",
    location: "Gurugram, Haryana",
    date: "Sep 2025 - Present",
    icon: BriefcaseBusiness,
    points: [
      "Promoted from intern to full-time frontend developer after consistent delivery and ownership.",
      "Worked on AltFTool product sections including tools, extensions, software/game listings, and inventory pages.",
      "Built responsive cards, listing layouts, filters, and product interfaces using React, Next.js, TypeScript, and Tailwind CSS.",
      "Integrated APIs, fixed cross-browser UI issues, and improved layout consistency across product pages.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Prodigy InfoTech",
    location: "Remote",
    date: "May 2024 - Nov 2024",
    icon: Code2,
    points: [
      "Developed responsive web pages using HTML, CSS, JavaScript, and React.js.",
      "Created reusable UI components and improved mobile responsiveness in assigned tasks.",
      "Worked with Git, GitHub, debugging, deployment, and frontend implementation workflows.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Microsoft Learn Student Ambassadors India",
    location: "Remote",
    date: "Oct 2024 - Nov 2024",
    icon: Layers3,
    points: [
      "Contributed to frontend and backend tasks using HTML, CSS, JavaScript, React.js, Node.js, and Python.",
      "Supported debugging, performance improvements, and feature implementation for web projects.",
    ],
  },
];

export const projects = [
  {
    title: "AltFTool",
    subtitle: "Digital Toolkit Platform",
    href: "https://www.altftool.com",
    icon: Boxes,
    accent: "blue",
    outcome: "Tools, extensions, inventory, and listing UI",
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    points: [
      "Worked on product-facing sections for online tools, Chrome extensions, software, games, and productivity resources.",
      "Built responsive listing cards, inventory layouts, and reusable UI sections.",
      "Improved mobile spacing, visual consistency, and usability across high-visibility pages.",
    ],
  },
  {
    title: "Alt+F Meet",
    subtitle: "Browser Meeting Room App",
    href: "https://altfmeet.vercel.app",
    icon: RadioTower,
    accent: "teal",
    outcome: "Private rooms, screen sharing, chat, and media controls",
    tags: ["React.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    points: [
      "Built private meeting rooms with WebRTC media and Socket.io signaling.",
      "Implemented pre-join camera/mic checks, invite links, chat, screen sharing, and participant state.",
      "Added responsive meeting controls and handled reconnect states for desktop and mobile users.",
    ],
  },
  {
    title: "Omegal",
    subtitle: "Random Text and Video Room Platform",
    href: "https://omegal-sand.vercel.app",
    icon: Sparkles,
    accent: "coral",
    outcome: "Queue matching, isolated rooms, and real-time chat",
    tags: ["React.js", "WebRTC", "Socket.io", "Tailwind CSS"],
    points: [
      "Developed random text and video rooms with queue-based matching and isolated private sessions.",
      "Built text mode, video mode, next-partner flow, private signaling, and disconnect handling.",
      "Created clear session states for matching, connected, disconnected, and next-partner flows.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL"],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Material-UI",
      "Bootstrap",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    icon: ServerCog,
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io", "WebRTC"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Database Design"],
  },
  {
    title: "Tools",
    icon: Rocket,
    skills: [
      "Git",
      "GitHub",
      "npm",
      "Vercel",
      "Netlify",
      "Postman",
      "VS Code",
      "CI/CD",
      "Figma",
    ],
  },
];

export const education = {
  icon: GraduationCap,
  degree: "Bachelor of Technology in Information Technology",
  school: "Veer Bahadur Singh Purvanchal University",
  location: "Jaunpur, India",
  date: "Nov 2021 - Dec 2025",
  gpa: "GPA: 7.0/10",
};

export const certifications = [
  {
    icon: BadgeCheck,
    title: "GirlScript Summer of Code Contributor",
    copy: "Open-source contributor with practical Git and collaboration experience.",
  },
  {
    icon: ShieldCheck,
    title: "Prodigy InfoTech Web Development Internship",
    copy: "Frontend and web development internship certification.",
  },
  {
    icon: BrainCircuit,
    title: "Google GenAI & Cloud Certifications",
    copy: "Prompt Engineering, Large Language Models, Responsible AI, and Google Cloud Foundations.",
  },
  {
    icon: Sparkles,
    title: "GeeksforGeeks Campus Ambassador",
    copy: "Community building, technical outreach, and student mentoring experience.",
  },
];
