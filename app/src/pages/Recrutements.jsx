import React ,{useEffect} from "react";
import lg from "../images/ee.jpg";
import CriterRecrutement from "../components/CriterRecrutement";
import Missions from "../components/Missions";
import CritereFooter from "../components/CritereFooter";
import { motion, useAnimation } from "framer-motion";

const Recrutements = () => {
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
    <motion.section
      className="critary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.5 } }}
    >
     <h2>critère de recrutement </h2>
     <h3>Et de </h3>
    <h4>Sélection du personnel</h4>
    
      <CriterRecrutement />
      <motion.article className="image-section" 
      id='zoom-element'
      initial={{ scale: 0 }}
      animate={controls}
      >
        <div className="fond-color " 
        
        >
          <img src={lg} alt="" />
        </div>
      </motion.article>
      <motion.article className="text-zone"
      id='zoom-element'
      initial={{ scale: 0 }}
      animate={controls}
      >
        <h2>
          Les missions de
          <br /> l'agent de sécurité incendie
        </h2>
        <Missions />
        <CritereFooter />
      </motion.article>
    </motion.section>
  );
};

export default Recrutements;
