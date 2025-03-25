import React from "react";
import Image from "next/image";

const services = [
  {
    title: "DÉVELOPPEMENT WEB",
    imageService: "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742927416/ordi_div4y3.webp",
    colorClass: "canva",
    description:
      "Développement front-end et back-end de sites web et gestion de CMS.",
  },
  {
    title: "CONSEIL",
    imageService: "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742927416/consult_olfigl.webp",
    colorClass: "figma",
    description: "Prototypage rapide pour vos projets digitaux.",
  },
  {
    title: "SEO et ACCESSIBILITÉ",
    imageService: "https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742927416/seo_yaf6ii.webp",
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
            {service.imageService ? (
              <Image
                className="image-service"
                src={`/assets/${service.imageService}`}
                alt={`Illustration pour ${service.title}`}
                width={150}
                height={150}
                priority
              />
            ) : (
              <div className="image-fallback">Image non disponible</div>
            )}
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
