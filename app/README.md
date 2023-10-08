## animations
 framer-motion pour la transition des routes et effet parallax
 

 ## animation effet parallax framer-motion

  const prestationPage = useRef(null);

  const { scrollYProgress } = useScroll({
    target: prestationPage,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

## annimation des effet lors de scroll
import { motion, useAnimation } from "framer-motion";
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
  
  ## a ajouter dans le div ou section a animer
   motion.div  id="l-element"
      initial={{ x: -100, opacity: 0 }}
      animate={controls}


## effet de transition de la page lor de navigation
import { motion } from "framer-motion";

## a ajouter au  conteneur principal de la page
 motion.section
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.5 } }}
    