import { BiLogoVisualStudio } from "react-icons/bi";
import { BsBraces } from "react-icons/bs";
import {
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaNpm,
  FaReact,
} from "react-icons/fa";
import {
  SiExpress,
  SiJquery,
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
  const skills = [
    [<FaHtml5 />, "HTML5"],
    [<FaCss3Alt />, "CSS3"],
    [<FaJs />, "JavaScript (ES6+)"],
    [<SiTypescript />, "TypeScript"],
    [<SiNextdotjs />, "Next.js"],
    [<FaDatabase />, "Databases"],
    [<SiVite />, "Vite"],
    [<FaNpm />, "NPM"],
    [<BiLogoVisualStudio />, "VS Code"],
    [<FaReact />, "React"],
    [<SiRedux />, "Redux"],
    [<SiTailwindcss />, "Tailwind CSS"],
    [<FaNodeJs />, "Node.js"],
    [<SiExpress />, "Express"],
    [<SiMongodb />, "MongoDB"],
    [<FaGitAlt />, "Git"],
    [<TbApi />, "API Integration"],
    [<SiJquery />, "jQuery"],
    [<BsBraces />, "OOP"],
    [<SiPostman />, "Postman"],
  ];
  const constraintsRef = useRef(null);

  return (
    <motion.section
      ref={constraintsRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="skills"
      className="p-8 max-w-5xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map(([icon, name], index) => (
          <motion.span
            animate={{
              scale: [1, 1.13, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            drag
            dragConstraints={constraintsRef}
            key={index}
            className="cursor-grab flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-neutral-800 rounded-full text-sm transition-all duration-200 hover:scale-105 dark:hover:text-yellow-400"
          >
            {icon}
            {name}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
