import React from 'react';
import './LandingPage.css';
import SimpleSlider from '../../Components/Carousel/Carousel';

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
    </div>


  );
};

export default LandingPage;
