import React from "react";
import logo from "../assets/lg.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const naviguer = () => {
    navigate("/critere-de-recrutements");
  };
  return (
    <motion.section
      className="home"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerHeight, transition: { duration: 0.5 } }}
    >
      <aside className="logo-zone">
        <img src={logo} alt="" />
        <strong>Security services</strong>
        <button className="btn" onClick={naviguer}>
          En savoir plus &#8594;
        </button>
      </aside>
      <motion.footer className="zone-image">
        <div className="blur"></div>
        <section className="footer">
          <p>K-F SECURITY SERVICES</p>
          <p>33, RUE DU 18 JUIN 93220 GAGNY</p>
          <p>@mail: contact.kfsecurite@gmail.com</p>
          <p>Telephone : 06 49 62 10 05</p>
          <p>N'CNAPS : AUT-IDF2-2020-09-11-A-00076962</p>
        </section>
      </motion.footer>
    </motion.section>
  );
};

export default Home;
