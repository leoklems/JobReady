import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4 className='logo'><img src='\images\logo.png' ></img></h4>
          <p>
            Empowering your career journey with tailored CV tools, professional
            insights, and essential job search resources. Get ready, set, and
            succeed!
          </p>
        </div>
        
        <div className="footer-column">
          <h4>Company Information</h4>
          <ul>
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Careers</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>CV Writing Services</li>
            <li>CV Scoring</li>
            <li>Cover Letter Writing</li>
            <li>Salary Tips</li>
            <li>Job Search Tips</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>FAQs</li>
            <li>Success Stories</li>
            <li>Tips & Tricks</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>Live Chat Support</li>
            <li>Email Support</li>
          </ul>
          


    <div className="social-icons" style={{ display: 'flex', gap: '10px' }}>
      {/* Facebook Icon */}
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#FFFF">
          <path d="M22.675 0h-21.35C.595 0 0 .595 0 1.325v21.351C0 23.405.595 24 1.325 24h11.495v-9.294H9.293V11.04h3.527V8.414c0-3.495 2.132-5.4 5.246-5.4 1.489 0 2.773.111 3.145.161v3.648l-2.16.001c-1.694 0-2.021.805-2.021 1.985v2.601h4.042l-.528 3.666h-3.514V24h6.889c.73 0 1.325-.595 1.325-1.324V1.325C24 .595 23.405 0 22.675 0z"/>
        </svg>
      </a>

      {/* LinkedIn Icon */}
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" fill="#FFFF">
          <path d="M22.23 0H1.77C.79 0 0 .78 0 1.75v20.5C0 23.22.79 24 1.77 24h20.46c.98 0 1.77-.78 1.77-1.75V1.75C24 .78 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.64C4.25 7.64 3.36 6.75 3.36 5.66S4.25 3.68 5.34 3.68c1.08 0 1.98.89 1.98 1.98 0 1.08-.89 1.98-1.98 1.98zm15.11 12.81h-3.56v-5.69c0-1.36-.03-3.11-1.89-3.11-1.89 0-2.18 1.48-2.18 3v5.8h-3.56V9h3.42v1.56h.05c.48-.92 1.63-1.89 3.36-1.89 3.6 0 4.26 2.37 4.26 5.44v6.34z"/>
        </svg>
      </a>

      {/* Twitter Icon */}
      <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF">
          <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.61 1.794-1.574 2.163-2.723-.949.564-2.007.974-3.127 1.196-.897-.959-2.178-1.558-3.594-1.558-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.125C7.691 8.094 4.066 6.13 1.64 3.161c-.427.733-.666 1.581-.666 2.475 0 1.71.87 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.386 1.698 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.623-.03-.924-.086.624 1.956 2.444 3.376 4.604 3.416-1.684 1.32-3.808 2.106-6.102 2.106-.395 0-.779-.023-1.17-.068 2.189 1.396 4.768 2.209 7.548 2.209 9.142 0 14.307-7.721 14.307-14.416 0-.22-.005-.437-.014-.653.987-.713 1.84-1.6 2.515-2.614z"/>
        </svg>
      </a>

      {/* YouTube Icon */}
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#FFFF">
          <path d="M23.499 6.203a3.01 3.01 0 0 0-2.12-2.123C19.803 3.5 12 3.5 12 3.5s-7.803 0-9.378.58A3.01 3.01 0 0 0 .501 6.203 31.297 31.297 0 0 0 0 12a31.29 31.29 0 0 0 .501 5.797 3.01 3.01 0 0 0 2.121 2.123C4.197 20.5 12 20.5 12 20.5s7.803 0 9.378-.58a3.01 3.01 0 0 0 2.121-2.123A31.293 31.293 0 0 0 24 12a31.297 31.297 0 0 0-.501-5.797zM9.545 15.545V8.455L15.818 12l-6.273 3.545z"/>
        </svg>
      </a>
    </div>

        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 JobReady. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
