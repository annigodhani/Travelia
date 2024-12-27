import React from "react";
import DestinationCSS from "./../Destinations/Destination.module.css";

import Destination1 from "../../assets/Destination01.jpg";
import Destination2 from "../../assets/Destination02.jpg";
import Destination3 from "../../assets/Destination03.jpg";
import Destination4 from "../../assets/Destination04.jpg";
import Destination5 from "../../assets/Destination05.jpg";
import Destination6 from "../../assets/Destination06.jpg";

function Destination() {
  return (
    <>
      <div className={`${DestinationCSS.Destination_wrapper} section`} id="populardestinations">
        <h2 className={DestinationCSS.pop}>Popular Destination</h2>

        <div className={DestinationCSS.DestinationCards}>
          {/* Destination-1 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination1} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>Europe</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>

          {/* Destination-2 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination2} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>Asia</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>

          {/* Destination-3 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination3} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>North America</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>

          {/* Destination-4 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination4} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>Latin America</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>

          {/* Destination-5 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination5} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>Austrillia</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>

          {/* Destination-6 */}
          <div className={DestinationCSS.DestinationCard}>
            <img src={Destination6} alt="img-destination" />
            <div className={DestinationCSS.DestinationDetails}>
              <h3>Africa</h3>
              <div className={DestinationCSS.btns}>
                <a href="#">All Destinations</a>
                <a href="#">Deals</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
