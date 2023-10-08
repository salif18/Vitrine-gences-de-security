import React, { useEffect } from "react";
import im3 from "../images/im3.png";
import { motion, useAnimation } from "framer-motion";

const CardImgOrg = () => {
 
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
    <motion.article className="child2-child2 " 
    id="top-element"
    initial={{ y: 100, opacity: 0 }}
    animate={controls}
    >
      <img src={im3} alt="" />
    </motion.article>
  );
};

export default CardImgOrg;
