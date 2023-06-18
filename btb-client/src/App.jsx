import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { currentUserContext, testimonialContext, offeringContext, staffContext } from "./api/context.js";

import HomePage from "./routes/HomePage";
import Footer from './components/Footer';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import ThankYou from './routes/ThankYou';
import { useEffect, useState } from 'react';

import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { firestore, auth } from './api/firebase';


function App() {

  const [testimonialData, setTestimonialData] = useState([]);
  const [offeringData, setOfferingData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  
  useEffect(() => {
    fetchStaff();
    fetchOfferings();
    fetchTestimonails();
  }, [])

  function fetchStaff() {
    const collectionRef = collection(firestore, "staff");
    // Add listener
    onSnapshot((collectionRef), (snap) => {
      let newStaff = [];
      for (const doc of snap.docs) {
        const staffWithId = doc.data();
        staffWithId["id"] = doc.id;
        newStaff.push(staffWithId);
      }
      setStaffData(newStaff);
    })
  }

  function fetchOfferings() {
    const collectionRef = collection(firestore, "offerings");
    // Add listener
    onSnapshot((collectionRef), (snap) => {
      let newOfferings = [];
      for (const doc of snap.docs) {
        const offeringWithId = doc.data();
        offeringWithId["id"] = doc.id;
        newOfferings.push(offeringWithId);
      }
      setOfferingData(newOfferings);
    })
  }

  function fetchTestimonails() {
    const collectionRef = collection(firestore, "testimonials");
    // Add listener
    onSnapshot((collectionRef), (snap) => {
      let newTestimonials = [];
      for (const doc of snap.docs) {
        const testimonialWithId = doc.data();
        testimonialWithId["id"] = doc.id;
        newTestimonials.push(testimonialWithId);
      }
      setTestimonialData(newTestimonials);
    })
  }


  return (
    <div className="App d-flex flex-column align-items-center w-100">
    <Router>
    <testimonialContext.Provider value={{testimonialData, setTestimonialData}} >
    <offeringContext.Provider value={{offeringData, setOfferingData}} >
    <staffContext.Provider value={{staffData, setStaffData}} >
      <div className="app-content">
        <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        <Footer />
      </div>
    </staffContext.Provider>
    </offeringContext.Provider>
    </testimonialContext.Provider>
    </Router>
    </div>
  );
}

export default App;
