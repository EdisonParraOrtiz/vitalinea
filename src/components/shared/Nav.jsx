import React, { useState, useRef } from "react";
import "./styles/nav.css";
import logo from "../../../public/graphics/logo.png";

const Nav = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const refNav = useRef();
  const refMenu = useRef();
  const refBtnToggle = useRef();
  const refIcon = useRef();

  const handleToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
      refMenu.current.style.top = '-100%';
      refIcon.current.classList.replace("fa-x", "fa-bars");
    } else {
      setMenuToggle(true);
      const calculate = refNav.current.offsetTop + refNav.current.clientHeight -1;
      refMenu.current.style.top = calculate + "px";
      refIcon.current.classList.replace("fa-bars", "fa-x");
    }
  };

  return (
    <div className="navContainer">
      <nav ref={refNav} className="nav">
        <button
          onClick={handleToggle}
          ref={refBtnToggle}
          className="btn-toggle"
        >
          <i ref={refIcon} className="fa-solid fa-bars fs-1"></i>
        </button>
        <ul className="ul" ref={refMenu}>
          <li>
            <a className="logo-1" href="/"><img src={logo} alt="logo" /></a>
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Nuestros productos</a>
          </li>
          <li>
            <a href="/">Disfruta cuidarte</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a  className="rs"href="https://es-la.facebook.com/" target='blank'><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a className="rs" href="https://www.instagram.com/" target='blank'><i class="fa-brands fa-instagram"></i></a>
          </li>
          <li>
            <a className="rs"href="https://www.youtube.com/" target='blank'><i class="fa-brands fa-youtube"></i></a>
          </li>
        </ul>
        <li>
            <a  href="/"><img className="logo-2"  src={logo} alt="logo" /></a>
          </li>
      </nav>
    </div>
  );
};

export default Nav;


<i class="fa-light fa-bars"></i>