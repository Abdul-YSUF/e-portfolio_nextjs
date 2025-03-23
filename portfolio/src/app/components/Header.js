"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import useDarkMode from "./DarkModeToggle";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Header() {
  const { isNight, logoSrc, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "qui_suis-je",
        "skills",
        "projets",
        "services",
        "formulaire",
      ];
      let currentSection = "";

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      <nav className="navbar">
        <div
          className="hamburger-lines"
          onClick={toggleMenu}
          aria-hidden="true"
        >
          <span className={`line line1 ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line line2 ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line line3 ${isMenuOpen ? "open" : ""}`}></span>
        </div>
        <div className="navbar-logo">
          <Link href="/" aria-label="Accueil">
            <Image
              className="logo"
              src={logoSrc}
              alt="Logo Abdul le Dev"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              width={100}
              height={17}
            />
          </Link>
        </div>
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          {[
            { id: "qui_suis-je", label: "Qui suis-je" },
            { id: "skills", label: "Compétences" },
            { id: "projets", label: "Projets" },
            { id: "services", label: "Services" },
            { id: "formulaire", label: "Contact" },
          ].map(({ id, label }) => (
            <li key={id} className="navbar_li">
              <Link
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className={activeSection === id ? "active" : ""}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="navbar_reseau">
            <Link
              href="https://github.com/Abdul-YSUF?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="navbar_link" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="navbar_link" />
            </Link>
            <Link href="mailto:abdulledev@gmail.com">
              <FaEnvelope className="navbar_link" />
            </Link>
          </li>
          <li className="navbar_li">
            <button
              className="toggle-button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              <Image
                src={isNight ? "/assets/sun.webp" : "/assets/moon.webp"}
                alt={isNight ? "Mode Clair" : "Mode Sombre"}
                width={100}
                height={100}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
