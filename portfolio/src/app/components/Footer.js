import React from "react";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_logo-div">
        <a href="/" className="footer_logo" aria-label="Accueil">
          <Image
            className="footer-logo"
            src="/assets/abdul-intro-white.webp"
            alt="logo Abdul le Dev"
          />
        </a>
      </div>

      <div className="rs_align">
        <p className="retrouvez-moi">Retrouvez-moi sur</p>
        <div className="reseaux_sociaux">
          <a
            href="https://github.com/Abdul-YSUF?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer_github"
              src="/assets/github.svg"
              alt="GitHub logo"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="footer_linkedin"
              src="/assets/linkedin.svg"
              alt="Linkedin Logo"
            />
          </a>
          <a href="mailto:abdulledev@gmail.com" target="_blank">
            <Image
              className="footer_gmail"
              src="/assets/Gmail_icon.svg"
              alt="Logo Gmail"
            />
          </a>
        </div>
      </div>

      <div className="copyright">
        <a href="#" target="_blank" className="conditions">
          Conditions d'utilisation
        </a>
        <div className="copy">
          <p className="paragraph_footer">
            © 2023-{currentYear} ABDUL LE DEV Portfolio. Tous droits réservés.
          </p>
        </div>
      </div>

      <div className="dummy_div"></div>
    </footer>
  );
};

export default Footer;
