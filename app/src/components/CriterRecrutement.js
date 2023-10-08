import React, { useRef } from "react";
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

  
  return (
    <motion.article ref={prestationPage} className="article-primary ">
    <h2>critère de recrutement et de sélection du personnel</h2>
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
