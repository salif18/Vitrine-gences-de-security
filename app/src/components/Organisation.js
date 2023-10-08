import React, { useEffect } from "react";
// import ScrollReveal from "scrollreveal";
import { easeIn, motion, useAnimation } from "framer-motion";

const Organisation = () => {

  //apprition de gauche
  const controls = useAnimation();

  useEffect(() => {
   const handleScroll = () => {
     const element = document.getElementById("top-element");

     if (element) {
       const elementTop = element.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
       if (elementTop < windowHeight / 2) {
         controls.start({ y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } });
       } else {
         controls.start({ y: -100, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } });
       }
     }
   };

   window.addEventListener("scroll", handleScroll);

   return () => {
     window.removeEventListener("scroll", handleScroll);
   };
 }, []);

  return (
    <motion.article className="child2-child1"
     id='top-element'
     initial={{ y: 100, opacity: 0 }}
     animate={controls}
    >
      <h2> Organisation :</h2>
      <ul>
        <li>Parfaite adaptation à vos besoins et recommandations</li>
        <li>Efficacité, reactivité et rapidité d'intervention</li>
        <li>Contrôle et suivi permanent des prestations</li>
        <li>Planification et mis en place des équipes</li>
        <li>Réunion d'évaluation mensuelle et trimestrielle</li>
        <li>Tarifs concurrentiels.</li>
      </ul>
    </motion.article>
  );
};

export default Organisation;
