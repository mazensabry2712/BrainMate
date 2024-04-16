import React from 'react'
import "../../styles/footer.css"
import logo from "../../assets/img/xlogo.png";

const Footer = () => {

  const year = new Date().getFullYear();
  return <footer className="fotter"data-aos='fade-down'  data-aos-duration="1500">
    <div className="container">
      <div className="footer__wrapper">
        <div className="footer__box">
          <div className="logo">
            <div className="logo__img">
              <img src={logo} alt="" />
            </div>
            <h2 className='h22'>Brain Mate</h2>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, reprehenderit adipisci repellendus voluptatem autem maxime.</p>
        </div>

        <div className="footer__box">
          <h4 className="footer__title">
            Company
          </h4>

          <ul className="footer__links">
            <li><a href="#">Our Services </a></li>
            <li><a href="#"> Our PLans </a></li>
            <li><a href="#">Our Doctors </a></li>
            <li><a href="#"> Our Facilities</a></li>
          </ul>

        </div>


        <div className="footer__box">
          <h4 className="footer__title">
            Quick Links
          </h4>

          <ul className="footer__links">
            <li><a href="#"> About Us</a></li>
            <li><a href="#"> Contact Us </a></li>
            <li><a href="#">Support </a></li>
          </ul>
        </div>


        <div className="footer__box">
          <h4 className="footer__title">
            Contuct Us
          </h4>

          <ul className="footer__links">
            <li><a href="#"> WhatsApp:01000000000</a></li>
            <li><a href="#"> Gmail:info@gmail.com </a></li>
            <li><a href="#">Support:01000000000 </a></li>
          </ul>
        </div>
      </div>
      <p className='copyright'>Copyright - {year} developed by Mazen Sabry (ANTEK).All rights reserved. </p>
    </div>
  </footer>
}

export default Footer
