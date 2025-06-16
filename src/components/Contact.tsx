import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="contact"
      className="p-8 max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-6 text-gray-600 dark:text-gray-300">
        I'd love to hear from you! Whether you have a question, project idea, or
        just want to say hello — feel free to reach out.
      </p>

      <div className="mb-8 flex gap-3 text-xl text-gray-600 dark:text-gray-300">
        <a
          href="mailto:kennyviver@gmail.com"
          className="hover:text-black dark:hover:text-white"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/KennyAle"
          target="_blank"
          className="hover:text-black dark:hover:text-white"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://ca.linkedin.com/kenny.viver"
          target="_blank"
          className="hover:text-black dark:hover:text-white"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded placeholder:text-gray-500 dark:placeholder:text-gray-400 text-black dark:text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 border rounded placeholder:text-gray-500 dark:placeholder:text-gray-400 text-black dark:text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 border rounded h-32 placeholder:text-gray-500 dark:placeholder:text-gray-400 text-black dark:text-white"
        />
        <button
          type="submit"
          className="cursor-pointer bg-black text-white px-4 py-2 rounded hover:bg-gray-800 dark:hover:bg-white dark:hover:text-black transition"
        >
          Send
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
