import React from 'react';
import './TestimonialSlider.css';

function TestimonialSlider() {
  return (
    
    <section className="testimonial-slider">
      <div className="testimonial">
        <div className="image-container">
        <img src="images\imgpassport.png" alt="Israel A." />
        </div>
        <p className="testimonial-text">
          JOBREADY made it so easy to create a professional CV. The templates were user-friendly, and I appreciated the tips on tailoring my CV for each job application. I landed interviews in just two weeks!
          <div className="rating">★★★★★</div>
          <hr></hr>
          <div className="author-info">
          <p className="author-name">Bethy M.</p>
          <p className="author-title">Software Developer</p>
        </div>
        </p>
      </div>
      
      <div className="testimonial">
        <div className="image-container">
          <img src="images\imgpassport.png" alt="Israel A." />
        </div>
        
        <p className="testimonial-text">
          The CV scoring feature gave me insights I hadn’t even considered. I was able to pinpoint areas for improvement, and the feedback was incredibly helpful. I’m more confident applying now and even received a job offer last week!
          <div className="rating">★★★★★</div>
          <hr className='horizontal'></hr>
        <div className="author-info">
          <p className="author-name">Israel A.</p>
          <p className="author-title">Product Designer</p>
        </div>
        </p>
        
      </div>
      <div className="slider-navigation">
        <button className="nav-button">❮</button>
        <button className="nav-button">❯</button>
      </div>
    </section>
  );
}

export default TestimonialSlider;
