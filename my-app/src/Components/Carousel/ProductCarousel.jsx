import React from "react";
import Slider from "react-slick";
import './Carousel.css';

function Responsive() {
  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
        <Slider {...settings} className="test">
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

export default Responsive;
