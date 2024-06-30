import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
// import { IMAGES } from "../../assets/Images.jsx";
import "./navbar.scss"
import logo from "./assets/logo-png.png"


const NavBar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    let menuRef = useRef();
  
    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar);
    };
  
    const closeAndTop = () => {
      window.scrollTo(0, 0);
    };
  
    useEffect(() => {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          setShowNavbar(false);
        }
      };
      document.addEventListener("mousedown", handler);
  
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    });
  
    const menuItemsData = [
      { title: "Accueil", url: "" },
      { title: "La micronutrition", url: "micronutrition" },
      { title: "Puzzle de ma vie", url: "puzzle" },
      { title: "Prestations", url: "prestations" },
      { title: "Blog", url: "blog" },
      { title: "Contact", url: "contact" },
    ];
    // const title = "Anne-Christine BRUNEL,<br/> diététicienne et micronutritionniste";
  
    return (
      <header>
        <nav className="navbar">
          <div className="container">
            <img src={logo} className="logo-1" alt="logo" />
            <div className="menu-icon" onClick={handleShowNavbar}>
              <span className="burger-icon" ref={menuRef}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <ul className="menus">
                {menuItemsData.map((menu, index) => {
                  return (
                    <li className="menu-items" key={index}>
                      <NavLink to={`/${menu.url}`} onClick={closeAndTop}>
                        {menu.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
        <div className="title-container">
          <h1 className="title">Meteoben, Développeur Web</h1>
        </div>
      </header>
    );
  };
  
  export default NavBar;