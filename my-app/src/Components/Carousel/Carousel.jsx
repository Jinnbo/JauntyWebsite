import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img className='carouselItem' src="./pic1.png" />
        </div>
        <div>
          <img className='carouselItem' src="./pic1.png" />
        </div>
        <div>
          <img className='carouselItem' src="./pic1.png" />
        </div>
        <div>
          <img className='carouselItem' src="./pic1.png" />
        </div>
      </Slider>
    </div>
  );
}
