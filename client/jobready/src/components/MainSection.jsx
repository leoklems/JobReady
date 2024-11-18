import React, { useState } from 'react';
import './MainSection.css';

function MainSection() {
  
  const [activeBanner, setActiveBanner] = useState(0);

  
  const banners = [
    {
      src: "/images/mainSection.png",
      alt: "Main section banner 1",
      text: "Your Career Starts Here!.",
      SubText: "Create, Score, and Perfect Your CV in Minutes"
    },
    {
      src: "/images/OBJECTS.png",
      alt: "Main section banner 2",
      text: "Write Cover Letters That Get Noticed",
      SubText: "Make Your Application Stand Out"
    },
    {
      src: "/images/Herobannar3_img.png",
      alt: "Main section banner 3",
      text: "Discover Salary Insights for Your Career Path.",
      SubText: "Know Your Worth"
    },
  ];

  
  const handleBannerChange = (index) => {
    setActiveBanner(index);
  };

  return (
    <section className="main-section">
      <div className="flex-container">
       
        
        <div className="left-section">
         
          <h2>{banners[activeBanner].text}</h2>

        <p className="additional-text">{banners[activeBanner].SubText}</p>
          <div className="get-started-links">
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Get Started with LinkedIn</a>
            <a href="https://www.gmail.com" target="_blank" rel="noopener noreferrer">Get Started with Gmail</a>
          </div>
        </div>
        

        {/* Right Section with Image */}
        <div className="right-section">
          <img
            src={banners[activeBanner].src}
            alt={banners[activeBanner].alt}
            width="500"
            height="300"
          />
        </div>
      </div>
  

     
      <div className="bottom-section">
        <div className="clickable-ellipse" onClick={() => handleBannerChange(0)}></div>
        <div className="clickable-ellipse1" onClick={() => handleBannerChange(1)}></div>
        <div className="clickable-ellipse2" onClick={() => handleBannerChange(2)}></div>
      </div>
    </section>
  );
}

export default MainSection;
