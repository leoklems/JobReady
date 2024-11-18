import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  const features = [
    { 
      image: 'images/img.png', 
      title: 'Create a Standout CV with Ease', 
      description: 'Build a professional CV in minutes using our tailored templates that highlight your skills and experience.' 
    },
    { 
      image: 'images/imgfeature.png', 
      title: 'Get Your CV Scored and Optimized', 
      description: 'Get instant feedback and improve your CV with targeted insights to help you stand out in the job market' 
    },
    { 
      image: 'images/imgfeature3.png', 
      title: 'Craft Tailored Cover Letters', 
      description: 'Write cover letters that capture your strengths and enthusiasm, making each application unique and compelling.' 
    },
    { 
      image: 'images/imgfeature4.png', 
      title: 'Know Your Worth with Salary Insights', 
      description: 'Access salary data and tips to navigate negotiations and understand what you’re worth in your industry' 
    },
    { 
      image: 'images/imgfeature5.png', 
      title: 'Share and Download', 
      description: 'Share your CV with a convenient link via email or social media, and export as a PDF to apply directly to an employer.' 
    },
    { 
      image: 'images/img_icon.png', 
      title: 'Data and Privacy Control', 
      description: 'We don’t share your information with anyone (unless you explicitly ask us to), utilise our privacy options to ensure your data stays safe.' 
    },
  ];

  return (
    <section className="features-section">
      <div className="section-title">
        <h2>Empower Your Job Search with Essential Tools</h2>
          <p className='section-paragraph'>From CV creation to salary insights, JOBREADY has you covered</p>
      </div>

      {features.map((feature, index) => (
        <div key={index} className="feature">
          <img src={feature.image} alt={feature.title} className="feature-image" />
          <span className="feature-title">{feature.title}</span>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default FeaturesSection;
