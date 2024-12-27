import React from "react";
import TripsCSS from "./../Trips/Trips.module.css";

import trip1 from "../../assets/Trips01.jpg";
import trip2 from "../../assets/Trips02.jpg";
import trip3 from "../../assets/Trips03.jpg";
import trip4 from "../../assets/Trips04.jpg";
import trip5 from "../../assets/Trips05.jpg";
import trip6 from "../../assets/Trips06.jpg";
import trip7 from "../../assets/Trips07.jpg";
import trip8 from "../../assets/Trips08.jpg";

function Trips() {
  return (
    <>
      <div className={`${TripsCSS.trips_wrapper} section`} id="trips">
        <h2>Popular Trips</h2>

        {/* Card-1  */}
        <div className={TripsCSS.cards}>
          <div className={TripsCSS.card}>
            <img src={trip1} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Australia Panorma</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 7 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 5 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Austalia
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$1,300</span>
                {/* <button className={TripsCSS.book}>Book Now</button> */}
                <button
  className={TripsCSS.book}
  onClick={() => (window.location.href = "/book-now")}
>
  Book Now
</button>

              </div>
            </div>
          </div>

          {/* Card-2  */}
          <div className={TripsCSS.card}>
            <img src={trip2} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                <i className="ri-star-line"></i>
              </div>

              <h3>Best Of Spain</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 5 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 15 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Spain
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$1,100</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-3 */}
          <div className={TripsCSS.card}>
            <img src={trip3} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>Italy</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 15 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 8 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Italy
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$1,500</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-4  */}
          <div className={TripsCSS.card}>
            <img src={trip4} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
                {/* <i className="ri-star-fill"></i> */}
              </div>

              <h3>Canyonlands</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 10 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 7 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Canyonlands
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$1,900</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-5  */}
          <div className={TripsCSS.card}>
            <img src={trip5} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>

              <h3>India</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 10 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 30 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> India
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$5,300</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-6  */}
          <div className={TripsCSS.card}>
            <img src={trip6} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>France Discovery</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 7 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 7 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> France
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$2,000</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-7  */}
          <div className={TripsCSS.card}>
            <img src={trip7} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Japan In Work</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 7 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 5 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Japan
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$1,000</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>

          {/* Card-8  */}
          <div className={TripsCSS.card}>
            <img src={trip8} alt="" />
            <div className={TripsCSS.TripContent}>
              <div className={TripsCSS.rating}>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-half-fill"></i>
              </div>

              <h3>Explore Bali 10-Day Tour</h3>

              <div className={TripsCSS.TripDetails}>
                <span>
                  <i className="ri-calendar-line"></i> 10 Days
                </span>
                <span>
                  <i className="ri-map-pin-line"></i> 15 Places
                </span>
                <span>
                  <i className="ri-flag-line"></i> Bali
                </span>
              </div>

              <div className={TripsCSS.Pricing}>
                <span className={TripsCSS.Price}>$21,00</span>
                <button className={TripsCSS.book}>Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trips;
