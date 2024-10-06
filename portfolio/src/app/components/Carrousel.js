"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Carrousel = ({ projects }) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

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

  return (
    <div className="carrousel">
      {projects?.length > 1 && (
        <div className="arrow arrow_left" onClick={previousSlide}>
          <div className="arrow-wrapper">
            <Image
              src="/assets/arrow_left.webp"
              alt="Previous Slide"
              width={25}
              height={25}
            />
          </div>
        </div>
      )}

      <div className="carousel-container">
        {/* Previous slide */}
        <div className="carrousel_img carrousel_left">
          <Image
            src={projects[getPreviousIndex()].image}
            alt={projects[getPreviousIndex()].title}
            width={250}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            style={{ objectFit: "fill" }}
          />
          <h3 className="project-title-left">
            {projects[getPreviousIndex()].title}
          </h3>
        </div>

        <div className="carrousel_img center">
          <div className="computer-frame">
            <Image
              src="/assets/desktop_ordinateur.webp"
              alt="Computer Frame"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
              style={{ objectFit: "contain" }}
              priority
            />
            <h3 className="project-title">{projects[slide].title}</h3>
            <div className="project-image-wrapper">
              <Image
                src={projects[slide].image}
                alt={projects[slide].title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                style={{ objectFit: "fill" }}
                className="project-image"
                priority
              />
            </div>
          </div>
        </div>

        <div className="carrousel_img carrousel_right">
          <Image
            src={projects[getNextIndex()].image}
            alt={projects[getNextIndex()].title}
            width={250}
            height={150}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
            style={{ objectFit: "fill" }}
          />
          <h3 className="project-title-right">
            {projects[getNextIndex()].title}
          </h3>
        </div>
      </div>

      {projects?.length > 1 && (
        <div className="arrow arrow_right" onClick={nextSlide}>
          <div className="arrow-wrapper">
            <Image
              src="/assets/arrow_right.webp"
              alt="Next Slide"
              width={25}
              height={25}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrousel;
