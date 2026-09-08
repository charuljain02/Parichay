import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const navLinks = ["About", "Skills", "Projects", "Contact"];

export const heroSkills = [
  "Frontend Development",
  "Backend Development",
  "DSA & Problem Solving",
  "UI / UX Design",
  "Open Source",
];

export const platforms = [
  "✦ LeetCode",
  "✦ Codeforces",
  "✦ GeeksforGeeks",
  "✦ HackerRank",
  "✦ CodeChef",
  "✦ GitHub",
];

export const stats = [
  { num: "200+", label: "DSA Problems Solved" },
  { num: "10+", label: "Projects Built" },
  { num: "3rd", label: "Year B.Tech CSE" },
  { num: "∞", label: "Cups of Coffee" },
];

export const skills = [
  {
    name: "Frontend",
    desc: "Clean, responsive UIs with modern frameworks and attention to detail.",
    tags: ["React", "HTML/CSS", "JavaScript", "Tailwind"],
  },
  {
    name: "Backend",
    desc: "Scalable server-side logic with RESTful APIs and databases.",
    tags: ["Node.js", "Express", "MongoDB", "SQL"],
  },
  {
    name: "DSA",
    desc: "Strong foundation in data structures, algorithms, and competitive programming.",
    tags: ["C++", "Java", "Trees", "Graphs", "DP"],
  },
  {
    name: "Tools & Dev",
    desc: "Comfortable with modern development workflows and deployment.",
    tags: ["Git", "GitHub", "VS Code", "Linux"],
  },
  {
    name: "UI / UX",
    desc: "Designing clean interfaces with user-first thinking.",
    tags: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    name: "Cloud & Deploy",
    desc: "Deploying projects using modern cloud platforms.",
    tags: ["Vercel", "Netlify", "Firebase"],
  },
];

export const projects = [
  {
    title: "SakshatAI",
    type: "AI Interview Platform",
    color: "#b83942",
    desc:
      "An AI-powered interview preparation platform featuring mock interviews, resume analysis, AI feedback and authentication.",
    tags: ["React", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/charuljain02/SakshatAI",
    live: "https://sakshatai-client.onrender.com/",
  },
{
    title: "BitSnipAI",
    type: "AI UI Component Generator",
    color: "#b83942",
    desc:
      "An AI-powered React UI component generator that helps developers create reusable UI components using natural language.",
    tags: ["React", "Tailwind", "Node.js", "MongoDB", "AI"],
    github: "https://github.com/charuljain02/BitsnipAI",
    live: "https://bitsnipai-4.onrender.com/",
  },
  {
    title: "Bellezaa",
    type: "Beauty Marketplace",
    color: "#b83942",
    desc:
      "A modern beauty and cosmetics e-commerce website with authentication and elegant UI.",
    tags: ["React", "Express", "MongoDB", "CSS"],
    github: "https://github.com/charuljain02/Bellezaa",
    live: "https://bellezaa-delta.vercel.app/",
  },

  {
    title: "Finova",
    type: "Finance Tracker",
    color: "#b83942",
    desc:
      "A personal finance tracker helping users monitor expenses, budgets and insights.",
    tags: ["React", "Node.js", "MongoDB", "Charts"],
    github: "https://github.com/charuljain02/finova",
    live: "https://finova-wheat.vercel.app/",
  },

  {
    title: "Meme Forge Pro",
    type: "Fun Web App",
    color: "#b83942",
    desc:
      "A meme generator allowing users to create, customize and download memes.",
    tags: ["React", "API", "JavaScript"],
    github: "https://github.com/charuljain02/Meme-Generator-App",
    live: "https://meme-generator-app-navy.vercel.app/",
  },

  
  
];

export const contactInfo = [
  {
    icon: FaEnvelope,
    value: "charuljain02@gmail.com",
    link: "mailto:charuljain02@gmail.com",
  },
  {
    icon: FaPhone,
    value: "+91 XXXXXXXXXX",
    link: "tel:+91XXXXXXXXXX",
  },
  {
    icon: FaMapMarkerAlt,
    value: "Jaipur, Rajasthan, India",
    link: null,
  },
  {
    icon: FaGithub,
    value: "github.com/charuljain02",
    link: "https://github.com/charuljain02",
  },
  {
    icon: FaLinkedin,
    value: "linkedin.com/in/charul-jain-880639293",
    link: "https://www.linkedin.com/in/charul-jain-880639293/",
  },
];

export const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },

  {
    title: "Connect",
    links: [
      {
        name: "GitHub",
        href: "https://github.com/charuljain02",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/charul-jain-880639293/",
      },
      {
        name: "Resume",
        href: "/resume.pdf",
      },
    ],
  },
];