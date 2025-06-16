import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Movie Web App",
    subtitle: "Web 2 - Midterm Project",
    description:
      "Responsive movie site using TMDB API with dark/light mode, trending titles, and search functionality.",
    stack: [
      "React",
      "Tailwind CSS",
      "TMDB API",
      "Dark Mode",
      "Responsive Design",
    ],
    img: "/my-portfolio-challenge/movie.png",
    live: "https://kennyale.github.io/web-2-midterm-project-KennyAle/",
    repo: "https://github.com/KennyAle/web-2-midterm-project-KennyAle",
  },
  {
    title: "Shopping Web App",
    subtitle: "React JS - Midterm Project",
    description:
      "Full-stack store with user auth, admin dashboard, cart, and Stripe integration for test payments.",
    stack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "Authentication",
      "Admin Dashboard",
    ],
    img: "/my-portfolio-challenge/letspicnic.png",
    live: "https://letspicnic.com",
    repo: "https://github.com/KennyAle/lets-picnicp",
  },
  {
    title: "EmpowerNow Website",
    subtitle: "Coaching & Consulting Brand",
    description:
      "Landing page for a coaching brand, built with Astro and optimized for SEO and accessibility.",
    stack: [
      "Astro",
      "HTML5",
      "CSS3",
      "Font Awesome",
      "Responsive Design",
      "SEO",
      "EmailJS",
    ],
    img: "/my-portfolio-challenge/empowernow.png",
    live: "https://empowernowconsulting.com/",
    repo: "https://github.com/KennyAle/empowernow",
  },
  {
    title: "Weather Dashboard",
    subtitle: "Real-Time Weather App",
    description:
      "Vanilla JS weather app using OpenWeather API with a clean and responsive UI.",
    stack: ["JavaScript", "CSS", "OpenWeather API", "Responsive Design"],
    img: "/my-portfolio-challenge/weather.png",
    live: "https://kennyale.github.io/weather-app/",
    repo: "https://github.com/KennyAle/weather-app",
  },
  {
    title: "To-Do List App",
    subtitle: "Task Manager",
    description:
      "Simple to-do app with persistent local storage. Add, edit, and delete tasks easily.",
    stack: ["React", "Local Storage", "JavaScript", "CSS", "Responsive Design"],
    img: "/my-portfolio-challenge/todo-app.webp",
    live: "https://kennyale.github.io/todo-app/",
    repo: "https://github.com/KennyAle/todo-app",
  },
];

const Projects = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="projects"
      className="p-8 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div ref={constraintsRef} className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            drag
            dragConstraints={constraintsRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            key={index}
            className="bg-white dark:bg-black/50 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-48 object-contain rounded-t-lg"
            />
            <div className="p-4 flex flex-col flex-1 space-y-2 cursor-grab">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-pretty text-sm text-gray-500 dark:text-gray-400">
                {project.subtitle}
              </p>
              <p className="text-pretty text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 pt-3">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-neutral-800 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto ml-auto pt-4">
                {project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live
                  </a>
                )}
                {project.repo !== "#" && (
                  <a
                    href={project.repo}
                    target="_blank"
                    className="flex items-center text-blue-500 hover:underline"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
