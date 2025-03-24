"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const titles = [
  "Développeur Web",
  "Fullstack",
  "Passionné du Code",
  "Créateur d'Expériences Web",
];

export default function Accueil() {
  const [title, setTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * titles.length);
      setTitle(titles[randomIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="welcome">Bienvenue sur mon Portfolio</h1>
      <h2 className="welcome_about">Abdul YSUF - {title}</h2>
      <p className="description_welcome">
        Je suis un développeur passionné par le web et la création d’expériences
        uniques.
      </p>
      <div className="imageWrapper">
        <Image
          src="https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742851499/programation_um4l9a.svg"
          alt="Photo de profil"
          width={280}
          height={280}
        />
      </div>

      <div className="barre_container">
        <div className="barre">
          <ul className="barre__reseau-social">
            <li className="barre__vertical-content">
              <a
                href="https://github.com/Abdul-YSUF?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Abdul le Dev"
                className="barre__logo-1"
              >
                <FaGithub />
              </a>
            </li>
            <li className="barre__vertical-content">
              <a
                href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Abdul le Dev"
                className="barre__logo-2"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="barre__vertical-content">
              <a
                href="mailto:abdulledev@gmail.com"
                aria-label="Envoyer un email à Abdul le Dev"
                className="barre__logo-3"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="contact_welcome">
        Si vous souhaitez discuter d'un projet ou simplement échanger, n'hésitez
        pas à me contacter !
      </p>
      <a
        href="#formulaire"
        aria-label="Aller à la section contact"
        className="contactButton"
      >
        Contactez-moi
      </a>
    </div>
  );
}

/*import React from "react";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__presentation">
        <h1 className="introduction__titre">Bienvenue dans mon portfolio !</h1>
        <Image
          className="introduction__logo-mobile"
          src="/assets/4962136_2597613.webp"
          alt="logo Abdul le Dev"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
          width={200}
          height={200}
        />
        <div className="introduction__container-logo">
          <div id="intro-logo" className="introduction__logo" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"></div>
        </div>
        <strong className="introduction__texte">
          Développeur web passionné, dédié à transformer
          vos idées en expériences digitales uniques.
        </strong>
        <div className="introduction__contact-container">
          <a href="#formulaire" aria-label="Aller à la section contact">
            <span className="introduction__font-contact">Contactez-moi</span>
          </a>
        </div>
      </div>

      <div className="barre_container">
        <div className="barre">
          <ul className="barre__reseau-social">
            <li className="barre__vertical-content">
              <a
                href="https://github.com/Abdul-YSUF?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Abdul le Dev"
              >
                <Image
                  className="barre__logo-1"
                  src="/assets/github.svg"
                  alt="Logo GitHub"
                  width={33}
                  height={33}
                />
              </a>
            </li>
            <li className="barre_vertical-content">
              <a
                href="https://www.linkedin.com/in/abdul-fahad-ysuf-970887235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Abdul le Dev"
              >
                <Image
                  className="barre__logo-2"
                  src="/assets/linkedin.svg"
                  alt="Logo LinkedIn"
                  width={33}
                  height={33}
                />
              </a>
            </li>
            <li className="barre_vertical-content">
              <a
                href="mailto:abdulledev@gmail.com"
                aria-label="Envoyer un email à Abdul le Dev"
              >
                <Image
                  className="barre__logo-3"
                  src="/assets/Gmail_icon.svg"
                  alt="Logo Gmail"
                  width={33}
                  height={33}
                />
              </a>
            </li>
          </ul>
        </div>

        <a
          href="#qui_suis-je"
          className="souris"
          aria-label="Bouton pour faire défiler vers la section Qui suis-je"
        >
          <div className="mouse_scroll" id="mouse_scroll">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <div>
              <span className="m_scroll_arrows un"></span>
              <span className="m_scroll_arrows deux"></span>
              <span className="m_scroll_arrows trois"></span>
            </div>
          </div>
        </a>
      </div>

      <div className="bienvenue">
        <Image
          className="bienvenue__source"
          src="/assets/4962136_2597613.webp"
          alt="Illustration d'un homme qui travaille sur son ordinateur avec plusieurs langages de programmation"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
          width={575}
          height={575}
        />
      </div>
    </section>
  );
}
*/
