import React, { useEffect, useRef } from "react";
import { motion, useScroll,useAnimation,useTransform } from "framer-motion";

const CriterRecrutement = () => {
  
  const prestationPage = useRef(null);
  const { scrollYProgress } = useScroll({
    target: prestationPage,
    offset: ["start start", "end start"],
  });

  
  //effet de deplacement les transitions parrallax
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

   //apprition de gauche
   const controls = useAnimation();

   useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("zoom-element");
 
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
 
        // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
        if (elementTop < windowHeight / 2) {
          controls.start({ scale: 1, transition: { duration: 0.9, ease: "easeOut" } });
        } else {
          controls.start({ scale: 0, transition: { duration: 0.9, ease: "easeOut" } });
        }
      }
    };
 
    window.addEventListener("scroll", handleScroll);
 
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  return (
    <motion.article ref={prestationPage} className="article-primary "
    id='zoom-element'
    initial={{ scale: 0 }}
    animate={controls}
    >
    
      <ul>
        <motion.li style={{y:textY}}>Maitrise de soi</motion.li>
        <li>L'expérience</li>
        <li>Bonne présentation</li>
        <li>La facilité l'adaptation en équipe sur le terrain</li>
        <li>Faculté d'annalyse de situation de crises</li>
        <li>Respect du code de déontologie et de la législation en vigueur.</li>
      </ul>
    </motion.article>
  );
};

export default CriterRecrutement;
