import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="p-8 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-pretty">
        I’m a passionate web developer with a strong foundation in front-end and
        back-end technologies. I’ve built dynamic web apps using modern tools
        like React and Node.js, with a focus on performance, accessibility, and
        clean UI/UX.
      </p>
    </motion.section>
  );
};

export default About;
