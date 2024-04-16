import React from "react";
import heroImg from "../../assets/img/img1.png";
import brain__icon from "../../assets/img/img2.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container" >
        <div className="hero__wrapper">
          {/* =====hero content===== */}
          <div className="hero__content">
            <h2 className="section__title" data-aos='fade-up' data-aos-duration="1500">
              Lorem ipsum dolor sit amet consectetur <br/>
              <span className="highlights"> adipisicing</span> elit.
            </h2>
            <p data-aos='fade-up' data-aos-delay='100' data-aos-duration="1800">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, nemo <br />
              reiciendis. Perspiciatis totam nobis eligendi dolor quos?
            </p>

            <div className="hero__btns" data-aos='fade-up' data-aos-delay='200' data-aos-duration="2000">
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <i class="ri-google-play-line"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>
          {/* =====hero img===== */}

          <div className="hero_img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="brain__rate" data-aos='fade-right'  data-aos-duration="1500">
                <h5>Mental strength</h5>
                <span><i class="ri-psychotherapy-line"></i></span>
                <h5>45% IQ</h5>
              </div>

              <div className="location" data-aos='fade-left' data-aos-duration="1500">
                <span><i class="ri-map-pin-user-line"></i></span>
                <h5>Find Me in<br/> This Location </h5>
              </div>
              <div className="brain__icon" data-aos='fade-down' data-aos-duration="1500">
                <img src={brain__icon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
