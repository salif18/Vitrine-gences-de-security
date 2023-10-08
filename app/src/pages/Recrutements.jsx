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
     const element = document.getElementById("top-element");

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
    <motion.section
      className="critary"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.5 } }}
    >
    
      <CriterRecrutement />
      <article className="image-section">
        <motion.div className="fond-color " 
        id='top-element'
        initial={{ x: -100, opacity: 0 }}
        animate={controls}>
          <img src={lg} alt="" />
        </motion.div>
      </article>
      <article className="text-zone">
        <h2>
          Les missions de
          <br /> l'agent de sécurité incendie
        </h2>
        <Missions />
        <CritereFooter />
      </article>
    </motion.section>
  );
};

export default Recrutements;
