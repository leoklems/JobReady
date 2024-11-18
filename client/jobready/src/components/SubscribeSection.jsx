import React from 'react';
import './SubscribeSection.css';

function SubscribeSection() {
  return (
    <section className="subscribe-section">
      <p className="subscribe-text">
        Join our community of job seekers and get the latest career tips, exclusive resources, and updates on new features delivered straight to your inbox. Subscribe today to unlock insights that’ll keep you a step ahead in the job market!
      </p>
      <div className="subscribe-input">
        <span className="email-icon">📧</span>
        <input type="text" placeholder="Search anything here" />
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
}

export default SubscribeSection;
