import React from "react";

const services = [
  { title: "DÉVELOPPEMENT WEB", imageService: "wd.webp", colorClass: "canva", description: "Développement front-end et back-end de sites web et gestion de CMS." },
  //{ title: "UI/UX", colorClass: "ui-ux", description: "Design d'interfaces ergonomiques et intuitives." },
  { title: "CONSEIL", imageService: "conseil.webp", colorClass: "figma", description: "Prototypage rapide pour vos projets digitaux." },
  //{ title: "FIGMA", colorClass: "figma", description: "Design collaboratif et création de maquettes." },
  { title: "SEO et ACCESSIBILITÉ", imageService: "seoetaccess.webp", colorClass: "wordpress", description: "Optimisation SEO et accessibilité pour améliorer la visibilité de votre site web." },
  //{ title: "CMS", colorClass: "wordpress", description: "Développement de sites avec les CMS." },
  //{ title: "CANVA", colorClass: "canva", description: "Création de visuels avec Canva." },
  //{ title: "WEB DESIGNING", colorClass: "web-designing", description: "Design et conception de sites web." },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="stitre">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.colorClass}`}>
            <h3>{service.title}</h3>
            <img className="image-service" src={`/assets/${service.imageService}`} alt={service.title} />
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
