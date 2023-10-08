import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { easeIn, motion, useAnimation } from "framer-motion";

const Intervention = () => {
 

   //apprition de gauche
   const controls = useAnimation();

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
    <motion.article className="child1-child2 "
    id="left-element"
     initial={{ x: -100, opacity: 0 }}
     animate={controls}
     >
      <h2>Nos secteurs d'interventions :</h2>
      <ul>
        <li>Etablissement récevant le public ( ERP )</li>
        <li>Bureaux, hotels, restaurants.</li>
        <li>Transports en commun</li>
        <li>Magassins et centre commerciaux</li>
        <li>Expositions, foires et Evénementiels</li>
        <li>Immeuble de grande hauteur (IGH)</li>
        <li>Entrepot et chantier.</li>
        <li>Musées et édifices public</li>
        <li>Usine, zone industrielle</li>
        <li>Centre hospitalier</li>
        <li>Parkings</li>
      </ul>
    </motion.article>
  );
};

export default Intervention;
