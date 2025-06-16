const Footer = () => {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t text-gray-800 dark:text-white text-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col items-center gap-6 md:flex-row md:justify-between">
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Made with &lt;3 by Kenny Viver.</p>
        </div>
        <nav className="flex gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-black dark:hover:text-white transition"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
