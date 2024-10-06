import Carrousel from "./Carrousel";

export default function Home() {
  const projects = [
    {
      id: 1,
      image: "/assets/booki-smaller.webp",
      title: "BOOKI",
      altMsg: "Photo d'un projet BOOKI",
    },
    {
      id: 2,
      image: "/assets/ohmyfood-smaller.webp",
      title: "OHMYFOOD",
      altMsg: "Photo d'un projet OHMYFOOD",
    },
    {
      id: 3,
      image: "/assets/lapanthere-smaller.webp",
      title: "LA PANTHÈRE",
      altMsg: "Photo d'un projet LA PANTHÈRE",
    },
    {
      id: 4,
      image: "/assets/kanap-smaller.webp",
      title: "KANAP",
      altMsg: "Photo d'un projet KANAP",
    },
    {
      id: 5,
      image: "/assets/piiquante-smaller.webp",
      title: "HOT TAKES",
      altMsg: "Photo d'un projet HOT TAKES",
    },
    {
      id: 6,
      image: "/assets/kasa-smaller.webp",
      title: "KASA",
      altMsg: "Photo d'un projet KASA",
    },
    {
      id: 7,
      image: "/assets/wordpress-smaller.webp",
      title: "SMARTPOINT",
      altMsg: "Photo d'un projet SMARTPOINT",
    },
    {
      id: 8,
      image: "/assets/blogTechnologie.webp",
      title: "BLOG TECHNOLOGIE",
      altMsg: "Photo d'un projet BLOG TECHNOLOGIE",
    },
  ];

  return (
    <section className="projets" id="projets">
      <h2 className="stitre">Projets</h2>
      <Carrousel projects={projects} />
    </section>
  );
}
