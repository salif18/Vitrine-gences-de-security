import React from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PrestaTitre from "../components/PrestaTitre";
import PrestaNosPrestation from "../components/PrestaNosPrestation";
import Intervention from "../components/Intervention";
import Organisation from "../components/Organisation";
import CardImgOrg from "../components/CardImgOrg";
import PrestaFooter from "../components/PrestaFooter";
import imge from "../images/im2.png"
const Prestation = () => {

  return (
    <>
      <motion.section
        className="presta"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ y: window.innerHeight, transition: { duration: 0.5 } }}
      >
        <article className="fond-image">
          <img src={imge} alt="" />
        </article>

        <PrestaTitre />
        <section className="flex-container">
          <section className="child1">
            <PrestaNosPrestation />
            <Intervention />
          </section>
          <section className="child2">
            <Organisation />
            <CardImgOrg />
          </section>
        </section>
        <PrestaFooter />
        <Footer />
      </motion.section>
      
    </>
  );
};

export default Prestation;
