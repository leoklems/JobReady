import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import necessary components
import Header from "./components/Header";
import Home from './pages/Home'; // Import the Home component
import SignIn from './pages/SignIn'; // Import the SignIn component
import SignUp from './pages/SignUp'; // Import the SignUp component
import About from './pages/About'; // Import the About component
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header /> {/* Header displayed across all pages */}
        
        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/SignIn" element={<SignIn />} /> {/* SignIn route */}
          <Route path="/SignUp" element={<SignUp />} /> {/* SignUp route */}
          <Route path="/About" element={<About />} /> {/* About route */}
        </Routes>
        
        <Footer /> {/* Footer displayed across all pages */}
      </div>
    </Router>
  );
}

export default App;
