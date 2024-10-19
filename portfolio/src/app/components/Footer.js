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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            width={240}
            height={50}
            priority={true}
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
            <Image
              className="footer_github"
              src="/assets/github.svg"
              alt="Logo GitHub"
              width={35}
              height={35}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers le profil LinkedIn d'Abdul"
          >
            <Image
              className="footer_linkedin"
              src="/assets/linkedin.svg"
              alt="Logo LinkedIn"
              width={35}
              height={35}
            />
          </a>
          <a
            href="mailto:abdulledev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Envoyer un e-mail à Abdul"
          >
            <Image
              className="footer_gmail"
              src="/assets/Gmail_icon.svg"
              alt="Logo Gmail"
              width={35}
              height={35}
            />
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
