import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const NotreAction = () => {
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
          controls.start({ y: 100, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } });
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  return (
    <motion.article className="section-down"
     id="top-element"
    initial={{ y: 100, opacity: 0 }}
    animate={controls}>
      <h2>Notre action :</h2>
      <p>
        La vigilance, la rapidité, la reactivité et l'éfficacité d'intervention
        guident notre action
      </p>
      <ul>
        <li>Acceuil, audit conseil, assistance et protection.</li>
        <li>Dissuasion, surveillance et gardiennage.</li>
        <li>Contrôle permanent et évaluation du poste de surveillance.</li>
        <li>
          Permanence téléphonique 24h/24, renforcement des équipes a tout moment
          si besoin. Notre discrétion dans l'exécution des tâches que vous nous
          confiez, produira une ambiance de convivialité et de confiance.
        </li>
      </ul>
    </motion.article>
  );
};

export default NotreAction;
