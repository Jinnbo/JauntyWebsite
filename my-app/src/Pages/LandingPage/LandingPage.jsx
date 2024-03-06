import React from 'react';
import './LandingPage.css';
import SimpleSlider from '../../Components/Carousel/Carousel';
import Responsive from '../../Components/Carousel/ProductCarousel';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="LandingPageContainer">
      <div className="LandingPageAboutUs">
        <div className="LandingPageAboutUsLeft">
          
          <div className='LandingPageTitle'>About Us</div>
          <div className="LandingPageSummary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida laoreet fringilla. Nullam scelerisque turpis vel quam tristique porttitor. Suspendisse hendrerit vestibulum arcu, sed vehicula ex aliquam a. Donec ornare consequat sem sed pharetra. Nulla ac fermentum quam, at semper lectus. Mauris id lacus nec est vehicula suscipit non et felis. 
          </div>
        </div>
        <div className="LandingPageAboutUsRight"> 
          <SimpleSlider/>
        </div>
      </div>

      <div className="LandingPageProducts">
        <div className="LandingPageProductsTitle">
            Products
        </div>
        
        <div className="LandingPageProductCarousel">
          <Responsive/>
        </div>
      </div>

      <div className="LandingPageContactContainer">
        <div className="LandingPageContactTitle">
          Contact
        </div>

        <div className="LandingPageContactBody">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus praesentium, corporis accusamus nemo sequi, enim architecto quod ex sint assumenda impedit aliquid et officia veniam, reiciendis laboriosam dicta in recusandae.
          Et cupiditate ut ducimus sit sunt consectetur vitae ipsa placeat tempora iure rerum fugiat eveniet expedita blanditiis inventore voluptate cum ullam eligendi officiis quisquam quo, doloremque dolores numquam dolorem? Vero.
          Incidunt consequatur architecto accusamus enim soluta maxime sapiente similique quae blanditiis porro rem, consectetur ducimus facere libero error, quibusdam alias minima quia vel hic id dolorem vero sequi? Explicabo, dolorem.
        </div>

        <Link to="contact">
          <div className="LandingPageContactBTN">
            Contact Us
          </div>
        </Link>
      </div>

    </div>


  );
};

export default LandingPage;
