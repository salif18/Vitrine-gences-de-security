import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const PrestaTitre = () => {
  //animation
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("left-element");

      if (element) {
        const elementLeft = element.getBoundingClientRect().left;
        const windowWidth = window.innerWidth;

        // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
        if (elementLeft < windowWidth / 2) {
          controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          });
        } else {
          controls.start({
            x: 100,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <motion.article
      className="titre"
      id="left-element"
      initial={{ x: 100, opacity: 0 }}
      animate={controls}
    >
      <strong>
        Nos prestations et <br />
        et nos secteurs d'interventions :
      </strong>
      <p className="">
        K-F SECURITY SERVICES apporte à travers ses compétences humains et
        techniques un rayonnement dans tous les domaines de la surété et de la
        sécurité préventive. Privilegie le Contact, le dialogue et instaure une
        relation de confiance{" "}
      </p>
    </motion.article>
  );
};

export default PrestaTitre;
