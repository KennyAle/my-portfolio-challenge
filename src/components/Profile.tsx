import { motion } from "framer-motion";

const Profile = () => {
  const socials = [
    {
      name: "Email",
      href: "mailto:kennyviver@gmail.com",
      icon: (
        <svg
          aria-label="Email"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
          <path d="M3 7l9 6l9 -6" />
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "tel:+1234567890",
      icon: (
        <svg
          aria-label="Phone"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://ca.linkedin.com/kenny.viver",
      icon: (
        <svg
          aria-label="LinkedIn"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 11l0 5" />
          <path d="M8 8l0 .01" />
          <path d="M12 16l0 -5" />
          <path d="M16 16v-3a2 2 0 0 0 -4 0" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/KennyAle",
      icon: (
        <svg
          aria-label="GitHub"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/viver.kenny",
      icon: (
        <svg
          aria-label="Instagram"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M16.5 7.5l0 .01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <div className="flex flex-row-reverse items-center">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          src="/my-portfolio-challenge/profile.webp"
          alt="Kenny Viver"
          className="w-32 h-32 mx-auto rounded-full mb-4 hidden md:block"
        />
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-pretty font-semibold text-gray-900 dark:text-gray-300 font-chivo"
          >
            Full Stack Developer based in Vancouver, BC
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-pretty text-gray-500 dark:text-gray-400 mt-2 mb-4"
          >
            Passionate about responsive UI, accessibility, and modern JavaScript
            frameworks. Currently exploring full-stack with React & Node.js.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex gap-3 flex-wrap"
      >
        {socials.map((social, i) => (
          <motion.a
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200 text-gray-600 dark:text-gray-300"
            aria-label={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Profile;
