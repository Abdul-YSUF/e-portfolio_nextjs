"use client";
import Link from "next/link";
import { useState } from "react";
import useDarkMode from "./DarkModeToggle";
import Image from "next/image";

export default function Header() {
  const { isNight, logoSrc, toggleTheme } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <li className="navbar_li">
            <Link href="#qui_suis-je" onClick={() => setIsMenuOpen(false)}>
              Qui suis-je
            </Link>
          </li>
          <li className="navbar_li">
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
              Compétences
            </Link>
          </li>
          <li className="navbar_li">
            <Link href="#projets" onClick={() => setIsMenuOpen(false)}>
              Projets
            </Link>
          </li>
          <li className="navbar_li">
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
          </li>
          <li className="navbar_li">
            <Link href="#formulaire" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="navbar_reseau" role="menuitem">
            <Link
              href="https://github.com/Abdul-YSUF?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="navbar_github"
                src="/assets/github.svg"
                alt="Logo GitHub"
                width={33}
                height={33}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="navbar_linkedin"
                src="/assets/linkedin.svg"
                alt="Logo LinkedIn"
                width={33}
                height={33}
              />
            </Link>
            <Link href="mailto:abdulledev@gmail.com">
              <Image
                className="navbar_Gmail"
                src="/assets/Gmail_icon.svg"
                alt="Logo Gmail"
                width={33}
                height={33}
              />
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
