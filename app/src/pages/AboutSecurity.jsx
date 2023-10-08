import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import NotreAction from "../components/NotreAction";
import VotreSecurity from "../components/VotreSecurity";

const AboutSecurity = () => {
  return (
    <>
      <motion.section
        className="avenir"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
      >
        <VotreSecurity />
        <NotreAction />
        <Footer />
      </motion.section>
      
    </>
  );
};

export default AboutSecurity;
