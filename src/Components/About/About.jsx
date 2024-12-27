import React from "react";
import AboutCSS from "./../About/About.module.css";

import aboutImg from "../../assets/about-bg.png";

function About() {
  return (
    <>
      <div className={`${AboutCSS.About_wrapper} section`} id="about">
        <div className={AboutCSS.about_Img}>
          <img src={aboutImg} alt="about-Img" />
        </div>
        <div className={AboutCSS.About_content}>
          <h2>
            Discover Organized <br /> Advantures The, <br />
            Ultimate Travel Hack
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit earum
            iste ab ducimus autem debitis consectetur odit et similique dolores.
          </p>

          <div className={AboutCSS.about}>
            <p>
              <i className="ri-building-4-line"> Accomodation</i>
            </p>
            <p>
              <i className="ri-car-line"></i> Transpotation Allowance
            </p>
            <p>
              <i className="ri-magic-line"></i> Exclusive Expariences
            </p>
            <p>
              <i className="ri-instance-line"></i> Local Recommendation
            </p>
            <p>
              <i className="ri-pin-distance-line"></i> Personalized Trip
              Crafting
            </p>
            <p>
              <i className="ri-phone-line"></i> 24/7 Support
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
