"use client";
import React from "react";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction__presentation">
        <h1 className="introduction__titre">Bienvenue dans mon portfolio !</h1>
        <img
          className="introduction__logo-mobile"
          src="/assets/4962136_2597613.webp"
          alt="logo Abdul le Dev"
        />
        <div className="introduction__container-logo">
          <div id="intro-logo" className="introduction__logo"></div>
        </div>
        <strong className="introduction__texte">
          Je suis un développeur intégrateur web passionné, dédié à transformer
          vos idées en réalités numériques.
        </strong>
        <div className="introduction__contact-container">
          <a href="#formulaire" aria-label="Aller à la section contact">
            <span className="introduction__font-contact">Contact</span>
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
                <img
                  className="barre__logo-1"
                  src="/assets/github.svg"
                  alt="Logo GitHub"
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
                <img
                  className="barre__logo-2"
                  src="/assets/linkedin.svg"
                  alt="Logo LinkedIn"
                />
              </a>
            </li>
            <li className="barre_vertical-content">
              <a
                href="mailto:abdulledev@gmail.com"
                aria-label="Envoyer un email à Abdul le Dev"
              >
                <img
                  className="barre__logo-3"
                  src="/assets/Gmail_icon.svg"
                  alt="Logo Gmail"
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
        <img
          className="bienvenue__source"
          src="/assets/4962136_2597613.webp"
          alt="Illustration d'un homme qui travaille sur son ordinateur avec plusieurs langages de programmation"
        />
      </div>
    </section>
  );
}
