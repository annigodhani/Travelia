import React from "react";
import SearchCSS from "./../Searches/Searches.module.css";

function Searches() {
  return (
    <>
      <div className={`${SearchCSS.Search_wrapper} section`} id="searches">
        <h2>Popular Searches</h2>

        {/* Card-1 */}
        <div className={SearchCSS.Cards}>
          <div className={SearchCSS.card}>
            <i className="ri-search-line"></i>

            <h3>
              Domestic Trips <span>See America In A New Light</span>
            </h3>
          </div>

          {/* Card-2 */}
          <div className={SearchCSS.card}>
            <i className="ri-search-line"></i>

            <h3>
              Vacations In 14 Ddays{" "}
              <span>Limited Avaliablity And Seling Fast</span>
            </h3>
          </div>

          {/* Card-3 */}
          <div className={SearchCSS.card}>
            <i className="ri-search-line"></i>

            <h3>
              Offer For Traveling Groups <span>Save When You 9+ Guests</span>
            </h3>
          </div>

          {/* Card-4 */}
          <div className={SearchCSS.card}>
            <i className="ri-search-line"></i>

            <h3>
              Tours Under $2000 <span>Browse Our Value Vacations</span>
            </h3>
          </div>

          {/* Card-5 */}
          <div className={SearchCSS.card}>
            <i className="ri-search-line"></i>

            <h3>
              Past Guests Benefits <span>Saving With Global Tour Rewards</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Searches;
