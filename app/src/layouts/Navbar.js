import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/lg.png";

const Navbar = () => {
  //scroller et fixerle navbar
  const [isFixed, setIsFixed] = useState(false)

  useEffect(()=>{
     const scrolling = ()=>{
      if(document.documentElement.scrollTop > 20 ){
        setIsFixed(true)
      }else{
        setIsFixed(false)
      }
     }
     window.addEventListener('scroll',scrolling)
     return (()=>{
      window.removeEventListener('scroll',scrolling)
     })
  },[])
 
  return (
    <nav className={isFixed ? "navbarFixed":"navbar"} >
      <img src={logo} alt="" />
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "links")}
          to="/"
        >
          Acceuil
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "links")}
          to="/critere-de-recrutements"
        >
          récrutements
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "links")}
          to="/prestations"
        >
          Nos prestations
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "activeLink" : "links")}
          to="/avenir"
        >
          {" "}
          La securité
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
