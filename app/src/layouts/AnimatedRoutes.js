import React from 'react';
import {Routes, Route, useLocation } from 'react-router-dom';
import Recrutements from "../pages/Recrutements";
import Home from "../pages/Home";
import AboutSecurity from "../pages/AboutSecurity";
import Prestation from "../pages/Prestation";
import { AnimatePresence } from 'framer-motion';
const AnimatedRoutes = () => {
    const location = useLocation();

    return (
       <AnimatePresence>
       <Routes location={location} key={location.pathname}>
       <Route  path='/' element={<Home />}/>
       <Route  path='/critere-de-recrutements' element={<Recrutements />}/>
       <Route  path='/avenir' element={<AboutSecurity/>}/>
       <Route  path='/prestations' element={<Prestation id={'prestation'}/>}/>
      </Routes>
       </AnimatePresence>
    );
}

export default AnimatedRoutes;
