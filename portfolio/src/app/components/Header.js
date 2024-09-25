import Link from "next/link";
import styles from "../saas/style.css";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="index.html" aria-label="Accueil">
            <img
              className="logo"
              src="./assets/ald-black.webp"
              alt="logo Abdul le Dev"
            />
          </Link>
        </div>
        <ul className="menu-items">
          <li className="navbar_li">
            <a href="#about">Qui suis-je</a>
          </li>
          <li className="navbar_li">
            <a href="#skills">Compétences</a>
          </li>
          <li className="navbar_li">
            <a href="#projects">Projets</a>
          </li>
          <li className="navbar_li">
            <a href="#contact">Contact</a>
          </li>
          <li className="navbar_li">
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
