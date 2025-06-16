import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="fixed w-full top-0 z-50 bg-white dark:bg-black shadow flex justify-center md:justify-between items-center px-6 py-4"
    >
      <h1 className="text-xl font-bold hidden md:block font-chivo">
        <a href="#">Kenny Viver</a>
      </h1>
      <div className="flex font-semibold items-center gap-5">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#projects" className="hover:underline">
          Projects
        </a>
        <a href="#skills" className="hover:underline">
          Skills
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
