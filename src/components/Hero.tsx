import Profile from "./Profile";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex flex-col gap-5 md:gap-0 px-8 py-13">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-4xl font-bold font-chivo"
      >
        Hi, I'm Kenny Viver
      </motion.h1>
      <Profile />
    </section>
  );
};

export default Hero;
