import React from "react";
import "../../styles/start.css";
import startimg from "../../assets/img/img5.png";

const Start = () => {
  return (
    <section id="pricing">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img src={startimg} alt=""  data-aos='fade-left'  data-aos-duration="1500"/>
          </div>
          <div className="start__content" data-aos='fade-right'  data-aos-duration="1500">
            <h2 className="section__title">
              Are you ready to <span className="highlights">
              change your
              life  </span>  by joining us?
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quaerat ducimus vero aliquam, enim minima
              necessitatibus voluptatem a sapiente suscipit non? In, voluptates
              quas fugit repellendus dolor soluta consequuntur molestiae.
            </p>
            <button className="register__btn">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
