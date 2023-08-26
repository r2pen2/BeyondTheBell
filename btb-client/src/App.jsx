import './App.css';
import { Navbar } from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Footer from './components/Footer';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';
import ThankYou from './routes/ThankYou';
import Gallery from './routes/Gallery';
import { createContext, useEffect, useState } from 'react';
import { auth, firestore } from './api/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { MailManager } from './libraries/Web-Legos/api/mail.ts';

export const serverURL = '/';

export const CurrentUserContext = createContext(null);

export const BTBMailManager = new MailManager("btbcontactresponse@gmail.com", "wsozuhnizyirhrde");
BTBMailManager.addRecipientEmail("joedobbelaar@gmail.com");
BTBMailManager.addRecipientEmail("btbcontactresponse@gmail.com");
BTBMailManager.addRecipientEmail("nancy@beyondthebelleducation.com");

function App() {


  const [currentUser, setCurrentUser] = useState(null);

  // Add a listener for authentication state changes once the component has mounted
  useEffect(() => {
    auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // Whenever we change users, fetch new permissions
        fetchUserPermissions();
      } else {
        // If the user signed-out, set both current user to null
        setCurrentUser(null);
      }
    });
  }, [])

  /**
   * Contact {@link firestore} for current user's permissions, then set relevant states
   */
  function fetchUserPermissions() {
    const docRef = doc(firestore, "users", auth.currentUser.uid);
    getDoc(docRef).then((doc) => {
      if (doc.exists()) {
        setCurrentUser(doc.data());
      }
    });
  }

  // Fetch current user's edit permissions after component mount
  useEffect(() => {
    // Only fetch credentials of the user is signed in
    if (auth.currentUser) {
      fetchUserPermissions();
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}} >
      <div className="App d-flex flex-column align-items-center w-100">
      <Router>
        <div className="app-content">
          <Navbar />
            <Routes>
              <Route path="*" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          <Footer />
        </div>
      </Router>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
