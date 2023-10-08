import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Missions = () => {
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
    <motion.aside className="contenu" 
    id='top-element'
    initial={{ y: 100, opacity: 0 }}
    animate={controls}
    >
      <p>
        Les missions de l'agent de sécurité incendie (SSIAP 1) s'exerce dans le
        cadre des textes législatifs et réglementaires en vigueur concernant les
        établissements recevant du public et les immeubles de grande hauteur (
        notamment sur les conditions à remplir). L'agent de sécurité incendie
        joue un rôle primordial pour prévenir au quotidien le risque incendie,
        par exemple en encadrant les exercices d'évacuation ou en sensibilisant
        les résidents ( salariés, cmmercant...) aux règles de securité incendie
        ( maniement et information sur les moyens de premier secours ainsi que
        sur les consignes de securité incendie). L'agent de securité incendie
        assure la prévention et la protection contre l'incendie dans les
        établissements recevant du public (ERP) et les immeubles de grande
        hauteur (IGH).
        <br />
        En fonction de vos besoins les agents de protection incendie peuvent
        realiser différents types de missions:
        <br />
        Prévention incendie, intervention en première urgence , protection
        contre l'incendie, gestion, des alarmes (incendie, technique, etc.),
        suivi des obligations de contrôle et d'entretien, vérificationdes moyens
        de sécours (robinet incendie d'armée, extincteur ,porte de sécours,
        etc.)
      </p>
    </motion.aside>
  );
};

export default Missions;
