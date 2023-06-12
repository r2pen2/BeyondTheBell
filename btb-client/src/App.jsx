import './App.css';
import { Navbar } from './components/Navbar';
import { Image, Text } from "@nextui-org/react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { currentUserContext, testimonialContext, offeringContext, staffContext } from "./api/context.js";

import HomePage from "./routes/HomePage";
import Footer from './components/Footer';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import ThankYou from './routes/ThankYou';
import { useState } from 'react';
import { exampleOfferings, exampleStaff, exampleTestimonials } from './api/exampleData';


function App() {

  const [currentUserData, setCurrentUserData] = useState(null);
  const [testimonialData, setTestimonialData] = useState(exampleTestimonials);
  const [offeringData, setOfferingData] = useState(exampleOfferings);
  const [staffData, setStaffData] = useState(exampleStaff);
  
  return (
    <currentUserContext.Provider value={{currentUserData, setCurrentUserData}} >
    <testimonialContext.Provider value={{testimonialData, setTestimonialData}} >
    <offeringContext.Provider value={{offeringData, setOfferingData}} >
    <staffContext.Provider value={{staffData, setStaffData}} >
    <div className="App d-flex flex-column align-items-center w-100">
      <div className="app-content">
        <Navbar />
        <Router>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
    </staffContext.Provider>
    </offeringContext.Provider>
    </testimonialContext.Provider>
    </currentUserContext.Provider>
  );
}

export default App;
