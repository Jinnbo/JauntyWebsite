import React from 'react';
import './LandingPage.css';

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
          <img src="./left.png" className='left' alt="About Us" />
          <img src="./pic1.png" className='pic1' alt="About Us" />
          <img src="./right.png" className='right' alt="About Us" />
        </div>
      </div>
    </div>


  );
};

export default LandingPage;
