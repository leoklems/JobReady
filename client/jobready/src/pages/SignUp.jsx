import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; 

function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [jobInterest, setJobInterest] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api.example.com/signup', {
        fullName,
        email,
        jobInterest,
        location,
        password,
      });
      console.log('Sign-up successful:', response.data);
     
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="social-signup">
        <button className="linkedin-button">Get Started with LinkedIn</button>
        <button className="google-button">Get Started with Google</button>
      </div>
        <div>
        <h4>or</h4>
        </div>
      <form onSubmit={handleSignUp} className="signup-form">
        <label>Full Name *</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <label>Email *</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Job Interest/Industry</label>
        <input
          type="text"
          placeholder="Enter your job interest"
          value={jobInterest}
          onChange={(e) => setJobInterest(e.target.value)}
        />

        <label>Location (City/Country)</label>
        <input
          type="text"
          placeholder="Select your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <label>Password *</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <p>By using JobReady, you agree to our <a href="/terms">Terms of Service</a></p>
      <p>Already have an account? <a href="/sign-in">Sign In</a></p>
    </div>
  );
}

export default SignUp;
