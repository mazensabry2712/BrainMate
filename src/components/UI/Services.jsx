import React from "react";
import "../../styles/Services.css";
import img3 from "../../assets/img/img3.png";
import img4 from "../../assets/img/img4.png";
import img5 from "../../assets/img/img5.png";

const Services = () => {
  return (
    <section id="services">
      <div className="container services__container">
        <div className="services__top">
          <h2 className="section__title">
            Services provided by
            <span className="highlights"> Brain Mate</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi
            maiores <br />
            consectetur laudantium porro necessitatibus! Aperiam
          </p>
        </div>
        {/* ======== services list ============ */}
        <div className="services__wrapper" data-aos='zoom-in'  data-aos-duration="1500">
          <div className="services__item" data-aos='zoom-in'  data-aos-duration="1500">
            <span className="services__icon">
              <img src={img3} alt="" />
            </span>
            <div className="services__content">
              <h4>Daily Schedule</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, soluta tempore officia architecto obcaecati
                alias.
              </p>
            </div>
          </div>

          <div className="services__item" data-aos='zoom-in'  data-aos-duration="1500">
            <span className="services__icon">
              <img src={img4} alt="" />
            </span>
            <div className="services__content">
              <h4>Food schedule</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, soluta tempore officia architecto obcaecati
                alias.
              </p>
            </div>
          </div>

          <div className="services__item" data-aos='zoom-in'  data-aos-duration="1500">
            <span className="services__icon">
              <img src={img5} alt="" />
            </span>
            <div className="services__content">
              <h4>Medication schedule</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Necessitatibus, soluta tempore officia architecto obcaecati
                alias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
