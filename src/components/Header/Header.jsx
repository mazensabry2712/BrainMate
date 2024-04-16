import React, { useEffect, useRef } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/xlogo.png";

const nav__links = [
  {
    path: "#home",
    display: "Home",
  },
  {
    path: " #services",
    display: "Services",
  },
  {
    path: "#pricing",
    display: "About Us",
  },
  {
    path: "#testimonials",
    display: "Facilities",
  },
];

const Header = () => {

  const headerRef = useRef(null)
  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.decumentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky__header")
    } else {
      headerRef.current.classList.remove("sticky__header")
      return () => window.removeEventListener('scroll', headerFunc)
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', headerFunc)
  }, [])


  const handeleClick = e => {
    e.preventDefault()

    const targetAtter = e.target.getAttribute('href')
    const location = document.querySelector(targetAtter).offsetTop

    window.scrollTo({
      left: 0,
      top: location - 80
    })
  }
  return (
    <header className="haeder" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ===LOGO=== */}
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2>Brain Mate</h2>
          </div>
          {/* ======= navigation menu======= */}
          <div className="navigation">
            <ul className="menu">
              {nav__links.map((item) => (
                <li className="nav__item">
                  <a onClick={handeleClick} href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* ======== nav right ======== */}


          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu"> <i class="ri-menu-line"></i> </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
