import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="section_2" id="qui_suis-je" style={{ minHeight: '500px' }}>
      <div className="section_2-container">
        <h2 className="stitre">Qui suis-je</h2>
        <div className="qui_suis-je">
          <div className="about-me">
            <Image
              className="me"
              src="https://res.cloudinary.com/doqbpkxy7/image/upload/q_auto,f_auto/v1742927417/3d-rendering-cartoon-like-man-working-computer_gbwr08.webp"
              alt="Dessin animé d'un homme qui travail sur son ordinateur"
              width={250}
              height={250}
              priority
            />
          </div>
          <div className="texte">
            <p>Un développeur web passionné à votre service !</p>
            <p>
              Vous cherchez un développeur web fiable et enthousiaste pour
              donner vie à vos projets digitaux ? Ne cherchez plus !
            </p>
            <p>
              Je m'appelle Abdul, développeur web polyvalent avec un fort
              intérêt pour la programmation. Je possède une solide expérience
              dans la création de sites web de A à Z, en veillant à répondre aux
              besoins spécifiques de chaque client.
            </p>
            <p>
              Mon expertise s'étend à tous les aspects du développement web,
              depuis la définition du produit jusqu'à la mise en ligne et
              l'optimisation SEO.
            </p>
            <p>
              Je suis également passionné par le design d'interface et j'aime
              créer des sites web visuellement attrayants et intuitifs.
            </p>
            <p>
              Mon objectif est de vous fournir des solutions web sur mesure qui
              répondent à vos besoins et à vos objectifs commerciaux.
            </p>
            <p>
              En plus de mes compétences techniques, je suis également une
              personne curieuse, créative et facile à vivre. Je suis toujours à
              l'affût des nouvelles technologies et je suis impatient de relever
              de nouveaux défis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
