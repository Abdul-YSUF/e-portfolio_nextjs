import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            width={240}
            height={50}
            loading="lazy"
            priority={false}
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
            aria-label="Lien vers le profil GitHub d'Abdul"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers le profil LinkedIn d'Abdul"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:abdulledev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envoyer un e-mail à Abdul"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <div className="copyright">
        <a href="#" target="_blank" className="conditions">
          Conditions d'utilisation
        </a>
      </div>
      <div className="copy">
        <small className="paragraph_footer">
          © 2023-{currentYear} ABDUL LE DEV Portfolio. Tous droits réservés.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
