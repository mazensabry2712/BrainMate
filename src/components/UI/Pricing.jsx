import React from "react";
import "../../styles/pricing.css";

const Pricing = () => {
  return (
    <section>
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            <span className="highlights">Choose </span> your plan
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio esse
            a, <br />
            consequuntur  quis animi ipsam pariur dolorem libero enim.
          </p>
        </div>
        {/* =====pricing wrapper======== */}
        <div className="pricing__wrapper">





          <div className="pricing__item" data-aos='fade-up'  data-aos-duration="1500">
            <div className="pricing__card-top">
              <h2 className="section__title">  Monthly Package
                <span className="highlights"> BrainMate</span>
                <h2 className="pricing section__title">
                  $50 <span>/month</span>
                </h2>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Monthly Package 

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line  highlights"></i>
                  </span>
                  Semi-annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Unlimited Access
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
              </ul>
              <button className="register__btn">
                Join Now
              </button>
            </div>
          </div>

          <div className="pricing__item pricing__item-02" data-aos='fade-up'  data-aos-duration="1800">
            <div className="pricing__card-top">
              <h2 className="section__title">   Annual Package
                <span className="highlights"> BrainMate</span>
                <h2 className="pricing section__title">
                  $500 <span>/year</span>
                </h2>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Monthly Package {" "}

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line  highlights"></i>
                  </span>
                  Semi-annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Unlimited Access
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
              </ul>
              <button className="register__btn">
                Join Now
              </button>
            </div>
          </div>

          <div className="pricing__item"data-aos='fade-up'  data-aos-duration="2000">
            <div className="pricing__card-top">
              <h2 className="section__title">  Facilities
                <span className="highlights"> BrainMate</span>
                <h2 className="pricing section__title">
                  Contuct us
                </h2>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Monthly Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line  highlights"></i>
                  </span>
                  Semi-annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Annual Package

                </li>
                <li>
                  <span>
                    <i class="ri-check-double-line highlights"></i>
                  </span>
                  Unlimited Access
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
                <li>
                  <span>
                    <i class=" ri-check-double-line   highlights "></i>
                  </span>
                  Facilities
                </li>
              </ul>
              <button className="register__btn">
                Join Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
