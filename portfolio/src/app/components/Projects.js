"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      image: "/assets/booki-smaller.webp",
      title: "BOOKI",
      altMsg: "Photo d'un projet BOOKI",
      description: "Intégration de la page d'accueil et l'interface responsive",
      demoLink: "https://abdul-ysuf.github.io/Booki",
      codeLink: "https://github.com/Abdul-YSUF/Booki",
    },
    {
      id: 2,
      image: "/assets/ohmyfood-smaller.webp",
      title: "OHMYFOOD",
      altMsg: "Photo d'un projet OHMYFOOD",
      description:
        "Intégration d'un site “mobile first” qui répertorie les menus de restaurants",
      demoLink: "https://abdul-ysuf.github.io/ohmyfood",
      codeLink: "https://github.com/Abdul-YSUF/ohmyfood",
    },
    {
      id: 3,
      image: "/assets/lapanthere-smaller.webp",
      title: "LA PANTHÈRE",
      altMsg: "Photo d'un projet LA PANTHÈRE",
      description:
        "Amélioration du référencement (SEO) et accessibilité d'un site web existant",
      demoLink: "https://abdul-ysuf.github.io/LaPanthere",
      codeLink: "https://github.com/Abdul-YSUF/LaPanthere",
    },
    {
      id: 4,
      image: "/assets/kanap-smaller.webp",
      title: "KANAP",
      altMsg: "Photo d'un projet KANAP",
      description: "Transformation d'un site e-commerce statique en dynamique",
      codeLink: "https://github.com/Abdul-YSUF/Kanap",
    },
    {
      id: 5,
      image: "/assets/piiquante-smaller.webp",
      title: "HOT TAKES",
      altMsg: "Photo d'un projet HOT TAKES",
      description:
        "Construction d'une API sécurisée pour une application d'avis gastronomiques",
      codeLink: "https://github.com/Abdul-YSUF/Piiquante",
    },
    {
      id: 6,
      image: "/assets/kasa-smaller.webp",
      title: "KASA",
      altMsg: "Photo d'un projet KASA",
      description: "Création d'une application web de location immobilière",
      demoLink: "https://abdul-ysuf.netlify.app/",
      codeLink: "https://github.com/Abdul-YSUF/Kasa",
    },
    {
      id: 7,
      image: "/assets/wordpress-smaller.webp",
      title: "SMARTPOINT",
      altMsg: "Photo d'un projet SMARTPOINT",
      description: "Création d'un site web e-commerce pour le téléphone mobile",
    },
    {
      id: 8,
      image: "/assets/blogTechnologie.webp",
      title: "BLOG TECHNOLOGIE",
      altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
      description:
        "Transformation d'un site web existant en blog technologie et en dynamique",
      codeLink: "https://github.com/mobile-zone/mobile-zone.github.io",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="projets" id="projets">
      <h2 className="stitre">Projets</h2>
      <div className="projectsContainer">
        {/* Cadre ordinateur avec le projet en grand */}
        <div className="mainProject">
          <div className="computerFrame">
            <img
              src="/assets/desktop_ordinateur.webp"
              alt="Cadre ordinateur"
              className="frameImage"
            />

            <motion.div
              className="screenContent"
              key={projects[currentIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {!showDetails ? (
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  className="screenImage"
                />
              ) : (
                <div className="projectDetails">
                  <h3>{projects[currentIndex].title}</h3>
                  <p>{projects[currentIndex].description}</p>
                  <div className="projectLinks">
                    {projects[currentIndex].demoLink && (
                      <a
                        href={projects[currentIndex].demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo btn btn-primary"
                      >
                        🚀 Démo
                      </a>
                    )}
                    {projects[currentIndex].codeLink && (
                      <a
                        href={projects[currentIndex].codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="demo btn btn-primary"
                      >
                        💻 Code
                      </a>
                    )}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Bouton pour afficher les détails */}
            <button
              className="toggleDetails"
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? <EyeOff size={24} /> : <Eye size={24} />}
            </button>
          </div>
        </div>

        {/* Miniatures des projets */}
        <div className="sideProjects">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`projectItem ${
                index === currentIndex ? "active" : ""
              }`}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: index === currentIndex ? 1 : 0.5 }}
              onClick={() => setCurrentIndex(index)}
            >
              <img src={project.image} alt={project.title} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*import Carrousel from "./Carrousel";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "/assets/booki-smaller.webp",
      title: "BOOKI",
      altMsg: "Photo d'un projet BOOKI",
      description: "Intégration de la page d'accueil et l'interface responsive",
      demo: "Démo",
      demoLink: "https://abdul-ysuf.github.io/Booki",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Booki",
      logos: [
        { html:"/assets/logos/HTML5_logo.svg",
          css:"/assets/logos/CSS3_logo.svg",
          normalize: "/assets/logos/normalize.svg"
        }
      ]
    },
    {
      id: 2,
      image: "/assets/ohmyfood-smaller.webp",
      title: "OHMYFOOD",
      altMsg: "Photo d'un projet OHMYFOOD",
      description: `Intégration un site “mobile first” qui répertorie les menus de restaurants`,
      demo: "Démo",
      demoLink: "https://abdul-ysuf.github.io/ohmyfood",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/ohmyfood",
      logos: [
        { html:"/assets/logos/HTML5_logo.svg",
          sass:"/assets/logos/Sass_Logo_Color.svg",
          git: "/assets/logos/github-logo.svg"
        }
      ]
    },
    {
      id: 3,
      image: "/assets/lapanthere-smaller.webp",
      title: "LA PANTHÈRE",
      altMsg: "Photo d'un projet LA PANTHÈRE",
      description:
        "Amélioration du référencement (SEO) et accessibilité d'un site web existant",
      demo: "Démo",
      demoLink: "https://abdul-ysuf.github.io/LaPanthere",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/LaPanthere",
      logos: [
        { seo:"/assets/logos/seo.webp",
          bootstrap:"/assets/logos/Bootstrap_logo.svg",
          git:"/assets/logos/github-logo.svg"
        }
      ]
    },
    {
      id: 4,
      image: "/assets/kanap-smaller.webp",
      title: "KANAP",
      altMsg: "Photo d'un projet KANAP",
      description: "Transformation un site e-commerce statique en dynamique",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Kanap",
      logos: [
        { javascript:"/assets/logos/JavaScript_logo.svg"
        }
      ]
    },
    {
      id: 5,
      image: "/assets/piiquante-smaller.webp",
      title: "HOT TAKES",
      altMsg: "Photo d'un projet HOT TAKES",
      description:
        "Construction une API sécurisée pour une application d'avis gastronomiques",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Piiquante",
      logos: [
        { node:"/assets/logos/Node.js_logo1.svg",
          mongodb:"/assets/logos/mdb.webp",
          postman:"/assets/logos/postman.svg",
          express: "/assets/logos/expressjs.svg"
        }
      ]
    },
    {
      id: 6,
      image: "/assets/kasa-smaller.webp",
      title: "KASA",
      altMsg: "Photo d'un projet KASA",
      description: "Création une application web de location immobilière",
      demo: "Démo",
      demoLink: "https://abdul-ysuf.netlify.app/",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Kasa",
      logos: [
        { react:"/assets/logos/React-icon.svg",
          router:"/assets/logos/react-router-color.svg",
          css: "/assets/logos/CSS3_logo.svg",
          git: "/assets/logos/github-logo.svg"
        }
      ]
    },
    {
      id: 7,
      image: "/assets/wordpress-smaller.webp",
      title: "SMARTPOINT",
      altMsg: "Photo d'un projet SMARTPOINT",
      description: "Création un site web e-commerce pour le télephone mobile",
      logos: [
        { wordpress:"/assets/logos/Wordpress-Logo.svg"
        }
      ]
    },
    {
      id: 8,
      image: "/assets/blogTechnologie.webp",
      title: "BLOG TECHNOLOGIE",
      altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
      description:
        "Transformation un site web existant en blog technologie et en dynamique",
      code: "Code",
      codeLink: "https://github.com/mobile-zone/mobile-zone.github.io",
      logos: [
        { php:"/assets/logos/PHP-logo.svg",
          phpmyadmin:"/assets/logos/PhpMyAdmin_logo.svg",
          git: "/assets/logos/github-logo.svg"
        }
      ]
    },
  ];

  return (
    <section className="projets" id="projets">
      <h2 className="stitre">Projets</h2>
      <Carrousel projects={projects} />
    </section>
  );
}
*/
