import React from "react";
import FooterCSS from "./../Footer/Footer.module.css";

function Footer() {
  return (
    <>
      <div className={`${FooterCSS.Footer_wrapper} section`}>
        <div className={FooterCSS.top_cont}>
          <div className={FooterCSS.logo}>
            <a href="#">Travelia</a>
          </div>
          <div className={FooterCSS.social}>
            <a href="#">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="#">
              <i className="ri-youtube-fill"></i>
            </a>
          </div>
        </div>
        <div className={FooterCSS.bottom_cont}>
          {/* Info-1 */}
          <div className={FooterCSS.links}>
            <h3>About Travelia</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our History</a>
              </li>
              <li>
                <a href="#">Reviews</a>
              </li>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          {/* Info-2 */}
          <div className={FooterCSS.links}>
            <h3>About Travelia</h3>
            <ul>
              <li>
                <a href="#">USA</a>
              </li>
              <li>
                <a href="#">India</a>
              </li>
              <li>
                <a href="#">Latin America</a>
              </li>
              <li>
                <a href="#">Asia</a>
              </li>
              <li>
                <a href="#">Europ</a>
              </li>
            </ul>
          </div>

          {/* Info-3 */}
          <div className={FooterCSS.links}>
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Request a Quote</a>
              </li>
              <li>
                <a href="#">Booking Conditions</a>
              </li>
              <li>
                <a href="#">Recommendations</a>
              </li>
            </ul>
          </div>

          {/* Info-4 */}
          <div className={FooterCSS.links}>
            <h3>Our NewsLetter</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
              hic?
            </p>
            <div className={FooterCSS.inputwrapper}>
              <input type="text" placeholder="Enter Your Email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
