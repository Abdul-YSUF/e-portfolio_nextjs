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
        <div className="hamburger-lines" onClick={toggleMenu} aria-hidden="true">
          <span className={`line line1 ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line line2 ${isMenuOpen ? "open" : ""}`}></span>
          <span className={`line line3 ${isMenuOpen ? "open" : ""}`}></span>
        </div>
        <div className="navbar-logo">
          <Link href="/" aria-label="Accueil">
            <img className="logo" src={logoSrc} alt="Logo Abdul le Dev" />
          </Link>
        </div>
        <ul className={`menu-items ${isMenuOpen ? "open" : ""}`}>
          <li className="navbar_li">
            <Link href="#qui_suis-je" onClick={() => setIsMenuOpen(false)}>Qui suis-je</Link>
          </li>
          <li className="navbar_li">
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>Compétences</Link>
          </li>
          <li className="navbar_li">
            <Link href="#projets" onClick={() => setIsMenuOpen(false)}>Projets</Link>
          </li>
          <li className="navbar_li">
            <Link href="#services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          </li>
          <li className="navbar_li">
            <Link href="#formulaire" onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
