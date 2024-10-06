import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Header = () => {
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
              src="/assets/ald-black.webp"
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
            <DarkModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
