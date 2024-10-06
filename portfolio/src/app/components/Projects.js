import Carrousel from "./Carrousel";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "/assets/booki-smaller.webp",
      title: "BOOKI",
    },
    {
      id: 2,
      image: "/assets/ohmyfood-smaller.webp",
      title: "OHMYFOOD",
    },
    {
      id: 3,
      image: "/assets/lapanthere-smaller.webp",
      title: "LA PANTHÈRE",
    },
    {
      id: 4,
      image: "/assets/kanap-smaller.webp",
      title: "KANAP",
    },
    {
      id: 5,
      image: "/assets/piiquante-smaller.webp",
      title: "HOT TAKES",
    },
    {
      id: 6,
      image: "/assets/kasa-smaller.webp",
      title: "KASA",
    },
    {
      id: 7,
      image: "/assets/wordpress-smaller.webp",
      title: "SMARTPOINT",
    },
    {
      id: 8,
      image: "/assets/blogTechnologie.webp",
      title: "BLOG TECHNOLOGIE",
    }
  ];

  return (
    <section className="projets" id="projets">
      <strong className="stitre">Projets</strong>
      <Carrousel projects={projects} />
    </section>
  );
}
