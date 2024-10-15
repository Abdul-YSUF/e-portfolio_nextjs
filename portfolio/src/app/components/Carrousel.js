"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Importer Framer Motion

const Carrousel = ({ projects }) => {
  const [slide, setSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [slide]);

  const previousSlide = () => {
    setSlide(slide === 0 ? projects.length - 1 : slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide === projects.length - 1 ? 0 : slide + 1);
  };

  const getPreviousIndex = () =>
    slide === 0 ? projects.length - 1 : slide - 1;
  const getNextIndex = () => (slide === projects.length - 1 ? 0 : slide + 1);

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="carrousel">
      {projects?.length > 1 && (
        <div
          className="arrow arrow_left"
          onClick={previousSlide}
          aria-label="Diapositive Précédente"
          role="button"
          tabIndex="0"
        >
          <div className="arrow-wrapper">
            <Image
              src="/assets/arrow_left.webp"
              alt="Diapositive Précédente"
              width={25}
              height={25}
            />
          </div>
        </div>
      )}
      <div className="carousel-container">
        <div
          className="carrousel_img carrousel_left"
          onClick={() => openPopup(projects[getPreviousIndex()])}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }} // État initial
            animate={{ opacity: 1, x: 0 }} // État animé
            exit={{ opacity: 0, x: -100 }} // État lors de la sortie
            transition={{ duration: 0.5 }} // Durée de la transition
          >
            <Image
              src={projects[getPreviousIndex()].image}
              alt={projects[getPreviousIndex()].altMsg}
              width={250}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              style={{ objectFit: "fill" }}
            />
            <h3 className="project-title-left">
              {projects[getPreviousIndex()].title}
            </h3>
          </motion.div>
        </div>
        <div className="carrousel_img center">
          <div className="computer-frame">
            <Image
              src="/assets/desktop_ordinateur.webp"
              alt="Cadre d'Ordinateur qui s'affiche l'image principale un projet"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              style={{ objectFit: "contain" }}
              priority
            />
            <h3 className="project-title">{projects[slide].title}</h3>
            <div
              className="project-image-wrapper"
              onClick={() => openPopup(projects[slide])}
            >
              <motion.div
                initial={{ opacity: 0 }} // État initial
                animate={{ opacity: 1 }} // État animé
                exit={{ opacity: 0 }} // État lors de la sortie
                transition={{ duration: 0.5 }} // Durée de la transition
                key={projects[slide].image} // Ajout d'une clé pour gérer la sortie
              >
                <Image
                  src={projects[slide].image}
                  alt={projects[slide].altMsg}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  style={{ objectFit: "fill" }}
                  className="project-image"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div
          className="carrousel_img carrousel_right"
          onClick={() => openPopup(projects[getNextIndex()])}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }} // État initial
            animate={{ opacity: 1, x: 0 }} // État animé
            exit={{ opacity: 0, x: 100 }} // État lors de la sortie
            transition={{ duration: 0.5 }} // Durée de la transition
          >
            <Image
              src={projects[getNextIndex()].image}
              alt={projects[getNextIndex()].altMsg}
              width={250}
              height={150}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              style={{ objectFit: "fill" }}
            />
            <h3 className="project-title-right">
              {projects[getNextIndex()].title}
            </h3>
          </motion.div>
        </div>
      </div>
      {projects?.length > 1 && (
        <div
          className="arrow arrow_right"
          onClick={nextSlide}
          aria-label="Diapositive Suivante"
          role="button"
          tabIndex="0"
        >
          <div className="arrow-wrapper">
            <Image
              src="/assets/arrow_right.webp"
              alt="Diapositive Suivante"
              width={25}
              height={25}
            />
          </div>
        </div>
      )}
      {isPopupOpen && <Popup project={selectedProject} onClose={closePopup} />}
    </div>
  );
};

const Popup = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button
          onClick={onClose}
          aria-label="Fermer la popup"
          className="close-button"
        >
          &times;
        </button>
        <h2 className="project-text">{project.title}</h2>
        <div className="popup-frame">
          <Image
            src="/assets/ordinateur_portable.webp"
            alt="Cadre d'Ordinateur portable qui s'affiche l'image principale d'un projet"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            style={{ objectFit: "contain" }}
            priority
          />
          <div className="popup-image-wrapper">
            <Image
              src={project.image}
              alt={project.altMsg}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              style={{ objectFit: "fill" }}
            />
          </div>
          <p className="project-description">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
