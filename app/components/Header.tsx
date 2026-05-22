"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const top = window.scrollY;
      sections.forEach((sec) => {
        const offset = (sec as HTMLElement).offsetTop - 150;
        const height = (sec as HTMLElement).offsetHeight;
        const id = sec.getAttribute("id") || "";
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
    { href: "#projects", label: "Projects" },
  ];

  return (
    <header className="header">
      <a href="#home" className="logo">
        Aryan<span> Gupta</span>
      </a>

      <i
        className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}
        id="menu-icon"
        onClick={toggleMenu}
      />

      <nav className={`navbar ${menuOpen ? "active" : ""}`}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className={activeSection === href.slice(1) ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
