import React from "react";

const services = [
  { title: "WEB DEVELOPMENT", colorClass: "web-development", description: "Développement front-end et back-end de sites." },
  { title: "UI/UX", colorClass: "ui-ux", description: "Design d'interfaces ergonomiques et intuitives." },
  { title: "CONSEIL", colorClass: "xd", description: "Prototypage rapide pour vos projets digitaux." },
  { title: "FIGMA", colorClass: "figma", description: "Design collaboratif et création de maquettes." },
  { title: "WORDPRESS", colorClass: "wordpress", description: "Développement de sites avec WordPress." },
  { title: "SEO", colorClass: "shopify", description: "Optimisation SEO pour améliorer la visibilité de votre site." },
  { title: "CANVA", colorClass: "canva", description: "Création de visuels avec Canva." },
  { title: "WEB DESIGNING", colorClass: "web-designing", description: "Design et conception de sites web." },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="stitre">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className={`service-card ${service.colorClass}`}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
