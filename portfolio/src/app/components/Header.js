"use client";
import Link from "next/link";
import useDarkMode from "./DarkModeToggle";

export default function Header() {
  const { isNight, logoSrc, toggleTheme } = useDarkMode();

  return (
    <header className="header">
      <nav className="navbar">
        <input
          type="checkbox"
          id="menu-toggle"
          aria-label="Activer la navigation"
          hidden
        />
        <div className="hamburger-lines" aria-hidden="true">
          <span className="line line1"></span>
          <span className="line line2"></span>
          <span className="line line3"></span>
        </div>
        <div className="navbar-logo">
          <Link href="#index" aria-label="Accueil">
            <img
              className="logo"
              src={logoSrc}
              alt="Logo Abdul le Dev"
            />
          </Link>
        </div>
        <ul className="menu-items">
          <li className="navbar_li">
            <Link href="#qui_suis-je">Qui suis-je</Link>
          </li>
          <li className="navbar_li">
            <Link href="#skills">Compétences</Link>
          </li>
          <li className="navbar_li">
            <Link href="#projets">Projets</Link>
          </li>
          <li className="navbar_li">
            <Link href="#formulaire">Contact</Link>
          </li>
          <li className="navbar_li">
            <button
              className="toggle-button"
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
            >
              <img
                src={isNight ? "/assets/sun.webp" : "/assets/moon.webp"}
                alt={isNight ? "Mode Clair" : "Mode Sombre"}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
