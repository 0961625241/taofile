import React from 'react';
import Swiper from 'react-id-swiper';
import { NavLink, Link } from "react-router-dom";
const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
 
  return(
    <section className="movie-carousel">
    <Swiper {...params}>
      <div className="slide-carousel">
            <Link className="carousel-btn-play" to="/detailmovie/3046">
              <img
                width="100%"
                src="./img/carousel.jpg"
                className="img-fluid "
              />
            </Link>
            {/* <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("lidO3bXELzU");
              }}
            >
              <i className="fa fa-play"></i>
            </button> */}
          </div>
          <div className="slide-carousel">
            <Link className="carousel-btn-play" to="/detailmovie/2966">
              <img
                width="100%"
                src="./img/carousel2.png"
                className="img-fluid"
              />
            </Link>
            {/* <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("vOUVVDWdXbo");
              }}
            >
              <i className="fa fa-play"></i>
            </button> */}
          </div>
          <div className="slide-carousel">
            <Link className="carousel-btn-play" to="/detailmovie/1382">
              <img
                width="100%"
                src="./img/carousel3.png"
                className="img-fluid"
              />
            </Link>
            {/* <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("ETEwlI7c32w");
              }}
            >
              <i className="fa fa-play"></i>
            </button> */}
          </div>
          <div className="slide-carousel">
            <Link className="carousel-btn-play" to="/detailmovie/3050">
              <img
                width="100%"
                src="./img/carousel4.png"
                className="img-fluid "
              />
            </Link>
            {/* <button
              className="btn-play"
              onClick={() => {
                this.renderModalVideo("OkWqL0zhMPk");
              }}
            >
              <i className="fa fa-play"></i>
            </button> */}
          </div>
    </Swiper>
    </section>
  )
}
 
export default SimpleSwiperWithParams;