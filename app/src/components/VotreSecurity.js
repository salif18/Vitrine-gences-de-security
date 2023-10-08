import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const VotreSecurity = () => {
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
          controls.start({ x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } });
        } else {
          controls.start({ x: 100, opacity: 0, transition: { duration: 0.6, ease: "easeOut" } });
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("l-element");
 
      if (element) {
        const elementLeft = element.getBoundingClientRect().left;
        const windowHeight = window.innerHeight;
 
        // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
        if (elementLeft < windowHeight / 2) {
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
    <article className="section-up">
      <h2>L'avenir : votre securité</h2>
      <strong>
        '' La prudence et toutes les actions préventives sont nos meilleures
        garanties ''
      </strong>

      <motion.p  id="l-element"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}>
        La sécurité des biens et des personnes est un souci majeur dans une
        societé en crise de tout genre. Celle-ci est une prestation dont aucune
        structure ne peut en faire l'économie. Ni en termes de reflexions mais
        encore moins en termes de prévention des risques.
      </motion.p>
      <motion.p id="top-element"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}>
        Pour parfaire a cette situation la societé{" "}
        <strong>k-f SECURITY SERVICES</strong> forte des acquis de l'ensemble de
        son personnel, peut-vous apporter son experience et son savoir-faire
        dans le domaine du gardiennage la surété et de la sécurité.{" "}
      </motion.p>
      <motion.p id="l-element"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}>
        Tous les acteurs de notre société viennent du terrain, riche d'une
        longue et solide experience. Notre devise est
        <span>"votre sécurité est notre priorité"</span>
      </motion.p>
      <motion.p id="top-element"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}>
        sous les éléments de l'intégrité, l'esprit de service et de
        professionnalisme. Notre société est récente en termes d'existence ,
        mais, tous nos agents et collaborateurs sont expérimentes, anciens dans
        leurs domaine, respectueux, ponctuels, dynamique et avant tout
        proffessionnels dans toutes les situations. Ils sont tenus de respecter
        un code de déontologie strict correspondant aux normes en vigueur dans
        ce secteur d'activité.
      </motion.p>
      <motion.p id="l-element"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}>
        Notre présence chez vous est un gage d'assurance et de securité pour vos
        biens et votre personnel.
      </motion.p>
      <motion.ul id="top-element"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}>
        <li>Présence dissuasive contre le vol et le vandalisme</li>
        <li>Protection des biens, de matériels et des personnes.</li>
        <li>
          Prévention et luttes contre les débuts d'incendies, dégats des eaux et
          autre acte de malveillance constituent une exigence quotidienne.
        </li>
        <li>
          Etudier, ameliorer et créer votre système de protection selon vos
          besoins actuels et à venir.
        </li>
        <li>Vous assurez un service de qualité et de confiance</li>
      </motion.ul>
      <motion.p id="l-element"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}>
        Securiser les humains et les biens de ces fleaux c'est tout un metier,
        c'est le notre.
      </motion.p>
    </article>
  );
};

export default VotreSecurity;
