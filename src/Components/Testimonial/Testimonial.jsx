import React from "react";
import TestimonialCSS from "./../Testimonial/Testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

import profile1 from "../../assets/Testimonials-02.jpg";
import profile2 from "../../assets/Testimonials-03.jpg";
import profile3 from "../../assets/Testimonials-07.jpg";

function Testimonial() {
  return (
    <>
      <div className={`${TestimonialCSS.Testimonial_wrapper} section`}>
        <h2>Exeptional Journey's With Travelia.</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            768: {
              slidesPerView: 2,
            },

            1200: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 1500,
          }}
          modules={[Autoplay]}
          className={TestimonialCSS.swiper}
        >
          {/* Profile-1 */}
          <SwiperSlide>
            <div className={TestimonialCSS.Testimonial_Container}>
              <div className={TestimonialCSS.Profile}>
                <img src={profile1} alt="" />
                <div className={TestimonialCSS.detail}>
                  <span>John Doe</span>
                  <div className="TestimonialCSS.ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti molestia similique ullam.
              </p>
            </div>
          </SwiperSlide>

          {/* Profile-2 */}
          <SwiperSlide>
            <div className={TestimonialCSS.Testimonial_Container}>
              <div className={TestimonialCSS.Profile}>
                <img src={profile2} alt="" />
                <div className={TestimonialCSS.detail}>
                  <span>Kim Joi</span>
                  <div className="TestimonialCSS.ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti molestia similique ullam.
              </p>
            </div>
          </SwiperSlide>

          {/* Profile-3 */}
          <SwiperSlide>
            <div className={TestimonialCSS.Testimonial_Container}>
              <div className={TestimonialCSS.Profile}>
                <img src={profile1} alt="" />
                <div className={TestimonialCSS.detail}>
                  <span>John Doe</span>
                  <div className="TestimonialCSS.ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-line"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti molestia similique ullam.
              </p>
            </div>
          </SwiperSlide>

          {/* Profile-4 */}
          <SwiperSlide>
            <div className={TestimonialCSS.Testimonial_Container}>
              <div className={TestimonialCSS.Profile}>
                <img src={profile3} alt="" />
                <div className={TestimonialCSS.detail}>
                  <span>Anaya Pande</span>
                  <div className="TestimonialCSS.ratings">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Deleniti molestia similique ullam.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Testimonial;
