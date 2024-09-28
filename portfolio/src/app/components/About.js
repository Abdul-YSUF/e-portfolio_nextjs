import React from 'react';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="section_2" id="qui_suis-je">
      <div className="section_2-container">
        <strong className="stitre">Qui suis-je</strong>
        <div className="qui_suis-je">
          <div className="about-me animation">
            <Image
              className="me"
              src="/assets/3d-rendering-cartoon-like-man-working-computer.webp"
              alt="Dessin animé d'un homme qui travail sur son ordinateur"
              width={200}
              height={50}
            />
          </div>

          <p className="texte">
            Un développeur intégrateur web passionné à votre service !
            <br />
            <br />
            Vous cherchez un développeur web fiable et enthousiaste pour donner vie à vos projets digitaux ? Ne cherchez
            plus !
            <br />
            <br />
            Je m'appelle Abdul, développeur web polyvalent avec un fort intérêt pour la programmation. Je possède une
            solide expérience dans la création de sites web de A à Z, en veillant à répondre aux besoins spécifiques de
            chaque client.
            <br />
            <br />
            Mon expertise s'étend à tous les aspects du développement web, depuis la définition du produit jusqu'à la mise
            en ligne et l'optimisation SEO.
            <br />
            <br />
            Je suis également passionné par le design d'interface et j'aime créer des sites web visuellement attrayants et
            intuitifs.
            <br />
            <br />
            Mon objectif est de vous fournir des solutions web sur mesure qui répondent à vos besoins et à vos objectifs
            commerciaux.
            <br />
            <br />
            En plus de mes compétences techniques, je suis également une personne curieuse, créative et facile à vivre. Je
            suis toujours à l'affût des nouvelles technologies et je suis impatient de relever de nouveaux défis.
            <br />
            <br />
          </p>
        </div>
      </div>

      <div className="téléchargement animation" id="cv">
        <h4>Télécharger mon CV</h4>
        <img
          className="img_téléchargement"
          src="/assets/Arrow.svg"
          alt="flèche vers le bas pour la téléchargement"
        />
      </div>
    </section>
  );
}
