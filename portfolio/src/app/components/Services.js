import React from "react";
import Image from "next/image";

const services = [
  {
    title: "DÉVELOPPEMENT WEB",
    imageService: "wds.webp",
    colorClass: "canva",
    description:
      "Développement front-end et back-end de sites web et gestion de CMS.",
  },
  {
    title: "CONSEIL",
    imageService: "advice.webp",
    colorClass: "figma",
    description: "Prototypage rapide pour vos projets digitaux.",
  },
  {
    title: "SEO et ACCESSIBILITÉ",
    imageService: "seoetacc.webp",
    colorClass: "wordpress",
    description:
      "Optimisation SEO et accessibilité pour améliorer la visibilité de votre site web.",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="stitre">Services</h2>
      <div className="services-container">
        {services.map((service) => (
          <div
            key={service.title}
            className={`service-card ${service.colorClass}`}
          >
            <h3>{service.title}</h3>
            {service.imageService && (
              <Image
                className="image-service"
                src={`/assets/${service.imageService}`}
                alt={`Illustration pour ${service.title}`}
                width={150} // Ajuste la taille selon tes besoins
                height={150}
                priority
              />
            )}
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
