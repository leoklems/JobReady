import React, { useState } from 'react';
import './SignIn.css'; 

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const API_URL = "h"; 

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
        rememberMe,
      });
      console.log("Sign-in successful:", response.data);
      alert("Sign-in successful!");
    } catch (error) {
      console.error("Error signing in:", error.response?.data || error.message);
      alert("Error signing in: " + (error.response?.data?.message || error.message));
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/google`);
      console.log("Google Sign-in successful:", response.data);
      alert("Google Sign-in successful!");
    } catch (error) {
      console.error("Error with Google sign-in:", error.response?.data || error.message);
      alert("Error with Google sign-in: " + (error.response?.data?.message || error.message));
    }
  };

  const handleLinkedInSignIn = async () => {
    try {
      const response = await axios.get(`${API_URL}/auth/linkedin`);
      console.log("LinkedIn Sign-in successful:", response.data);
      alert("LinkedIn Sign-in successful!");
    } catch (error) {
      console.error("Error with LinkedIn sign-in:", error.response?.data || error.message);
      alert("Error with LinkedIn sign-in: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="signin-form">
        <label>Email *</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password *</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="signin-options">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember Me
          </label>
          <a href="/forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" className="signin-button">Sign In</button>
      </form>
      <h4>or</h4>
      <div className="signin-alternatives">
        <button onClick={handleGoogleSignIn} className="google-button">Get Started with Google</button>
        <button onClick={handleLinkedInSignIn} className="linkedin-button">Get Started with LinkedIn</button>
      </div>

      <p>Don’t have an account? <a href="/sign-up">Sign Up</a></p>
    </div>
  );
}

export default SignIn;
