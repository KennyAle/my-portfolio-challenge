import { motion } from "framer-motion";

const Timeline = () => {
  const events = [
    {
      year: "2024",
      title: "Intro to Computing",
      desc: "Explored programming foundations and computing concepts. Built my first CLI tool in Python.",
    },
    {
      year: "2024",
      title: "Web Dev I & II",
      desc: "Created several responsive websites. Learned semantic HTML, Flexbox/Grid, basic accessibility, and APIs. Built a weather dashboard and movie app.",
    },
    {
      year: "2025",
      title: "Object-Oriented Programming",
      desc: "Applied principles like inheritance and encapsulation in JavaScript and Java. Refactored earlier apps using class-based components.",
    },
    {
      year: "2025",
      title: "React & Node.js",
      desc: "Built full-stack apps with React, Context API, and Express. Created a To-Do App with persistent local storage and a clothing store with Stripe integration.",
    },
    {
      year: "2025",
      title: "Portfolio & Freelance Projects",
      desc: "Designed and deployed my personal portfolio. Started taking freelance projects including a professional coaching website using Astro.",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="timeline"
      className="p-8 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold mb-6 font-chivo">Timeline</h2>
      <ol className="border-l-4 border-blue-500">
        {events.map((e, i) => (
          <li
            key={i}
            className="p-4 cursor-default hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
          >
            <div className="font-semibold text-lg">
              {e.year} — {e.title}
            </div>
            <p className="text-pretty text-gray-600 dark:text-gray-300">
              {e.desc}
            </p>
          </li>
        ))}
      </ol>
    </motion.section>
  );
};

export default Timeline;
