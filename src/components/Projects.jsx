import ProjectCard from "./miniComponents/ProjectCard";
import letterbox from "../assets/projects/letterbox.mp4";
import gatewayTourism from "../assets/projects/gatewayTourism.mp4";
import bookmania from "../assets/projects/bookmania.mp4";
import quickfix from "../assets/projects/quickfix.mp4";

const projects = [
  {
    title: "QuickFix",
    videoSrc: quickfix,
    description:
      "A full-stack service booking platform built with the MERN stack. It features OTP-based login/signup, customer & technician dashboards, booking management, and service discovery with filters for price, availability, and category.",
    techStack: [
      "MERN",
      "TailwindCSS",
      "DaisyUI",
      "Zustand",
      "JWT",
      "LocationIQ",
    ],
    github: "https://github.com/yourname/quickfix",
    // demo: "https://yourdomain.com/quickfix",
  },

  {
    title: "Chat App",
    videoSrc: letterbox,
    description:
      "Realtime chat with authentication and custom themes using Socket.IO and Zustand.",
    techStack: ["React", "Zustand", "Express", "Socket.IO"],
    github: "https://github.com/payalkharb1924/fullstack-chat-app",
    demo: "https://letterbox-yuvy.onrender.com/",
  },
  {
    title: "BookMania",
    videoSrc: bookmania,
    description:
      "BookMania is a sleek, distraction-free web app designed for people to plan, write, and organize their books notes chapter-by-chapter.",
    techStack: ["Express", "GoggleOAuth", "PostgreSQL", "EJS", "Node.js"],
    github: "",
    demo: "",
  },
  {
    title: "Gateway Tourism",
    videoSrc: gatewayTourism,
    description:
      "A frontend website for a tourism company, built with HTML, CSS and JavaScript showcasing a responsive design and interactive features.",
    techStack: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/payalkharb1924/GatewayWebsite",
    demo: "https://payalkharb1924.github.io/GatewayWebsite/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
