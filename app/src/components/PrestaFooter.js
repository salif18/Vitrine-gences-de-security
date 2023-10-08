import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
const PrestaFooter = () => {
  //animation
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("left-element");

      if (element) {
        const elementLeft = element.getBoundingClientRect().left;
        const windowWidth = window.innerWidth;

        // Déclencher l'animation lorsque l'élément est à mi-chemin dans la fenêtre
        if (elementLeft < windowWidth /2) {
          controls.start({
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
          });
        } else {
          controls.start({
            y: 100,
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
      className="footer "
      id="left-element"
      initial={{ y: 100, opacity: 0 }}
      animate={controls}
    >
      <h2>Nos secteurs d'interventions :</h2>
      <p>
        Toutes notre équipe se tiens à votre disposition 7j / 7j et 24h / 24,
        <br />
        Interviennent dans la région le de France :75-77-78-91-92-93-94 95
      </p>
    </motion.article>
  );
};

export default PrestaFooter;
