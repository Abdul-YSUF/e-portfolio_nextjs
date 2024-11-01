import Carrousel from "./Carrousel";

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
      codeLink: "https://github.com/Abdul-YSUF/Booki"
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
      codeLink: "https://github.com/Abdul-YSUF/ohmyfood"
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
      codeLink: "https://github.com/Abdul-YSUF/LaPanthere"
    },
    {
      id: 4,
      image: "/assets/kanap-smaller.webp",
      title: "KANAP",
      altMsg: "Photo d'un projet KANAP",
      description: "Transformation un site e-commerce statique en dynamique",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Kanap"
    },
    {
      id: 5,
      image: "/assets/piiquante-smaller.webp",
      title: "HOT TAKES",
      altMsg: "Photo d'un projet HOT TAKES",
      description:
        "Construction une API sécurisée pour une application d'avis gastronomiques",
      code: "Code",
      codeLink: "https://github.com/Abdul-YSUF/Piiquante"
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
      codeLink: "https://github.com/Abdul-YSUF/Kasa"
    },
    {
      id: 7,
      image: "/assets/wordpress-smaller.webp",
      title: "SMARTPOINT",
      altMsg: "Photo d'un projet SMARTPOINT",
      description: "Création un site web e-commerce pour le télephone mobile"
    },
    {
      id: 8,
      image: "/assets/blogTechnologie.webp",
      title: "BLOG TECHNOLOGIE",
      altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
      description:
        "Transformation un site web existant en blog technologie et en dynamique",
      code: "Code",
      codeLink: "https://github.com/mobile-zone/mobile-zone.github.io"
    },
  ];

  return (
    <section className="projets" id="projets">
      <h2 className="stitre">Projets</h2>
      <Carrousel projects={projects} />
    </section>
  );
}
