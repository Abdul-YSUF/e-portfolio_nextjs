import React from "react";
import Image from "next/image";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__presentation">
        <h3 className="introduction__titre">Bienvenue dans mon site web</h3>
        <Image
          className="introduction__logo-mobile"
          src="/assets/4962136_2597613.svg"
          alt="logo Abdul le Dev"
          width={200}
          height={50}
        />
        <div className="introduction__container-logo">
          <Image
            id="intro-logo"
            className="introduction__logo"
            src="/assets/abdul-intro-black.webp"
            alt="Logo Introduction"
            width={200}
            height={170}
          />
        </div>
        <strong className="introduction__texte">
          Développeur intégrateur web, je concrétise vos idées en réalité
          numérique.
        </strong>
        <div className="introduction__contact-container">
          <a href="#formulaire">
            <h4 className="introduction__font-contact">Contact</h4>
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
              >
                <Image
                  className="barre__logo-1"
                  src="/assets/github.svg"
                  alt="GitHub logo"
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
              >
                <Image
                  className="barre__logo-2"
                  src="/assets/linkedin.svg"
                  alt="LinkedIn logo"
                  width={33}
                  height={33}
                />
              </a>
            </li>
            <li className="barre_vertical-content">
              <a href="mailto:abdulledev@gmail.com">
                <Image
                  className="barre__logo-3"
                  src="/assets/Gmail_icon.svg"
                  alt="Gmail logo"
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
          aria-label="scroll down button"
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
          src="/assets/4962136_2597613.svg"
          alt="Logo de bienvenue"
          width={600}
          height={600}
        />
      </div>
    </section>
  );
}
