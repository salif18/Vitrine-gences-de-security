import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { easeIn, motion, useAnimation } from "framer-motion";

const PrestaNosPrestation = () => {
  //les animation des contenu de la page
  const controls = useAnimation();

  //apprition de gauche
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("left-element");

      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
        if (elementTop < windowHeight / 2) {
          controls.start({ x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } });
        } else {
          controls.start({ x: -100, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <motion.article className="child1-child1 " 
      id="left-element"
        initial={{ x: -100, opacity: 0 }}
        animate={controls}
        
    >
      <h2>Nos prestations :</h2>
      <ul>
        <li>Agents de securité confirmé</li>
        <li>Intervenants, rondiers</li>
        <li>Agents d'acceuil ( contrôle d'accès )</li>
        <li>Maitres-chiens, Agent ACCD</li>
        <li>Vidéo et télésurveillance</li>
        <li>Evénementiels</li>
        <li>Sécurité Incendie SSIAP1,2</li>
        <li>Agent chef de poste</li>
      </ul>
    </motion.article>
  );
};

export default PrestaNosPrestation;
