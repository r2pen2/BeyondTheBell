import './App.css';
import { Socials, NavbarContent } from './components/Navbar';
import { Navbar, Image, Text } from "@nextui-org/react";
import logoBlack from "./assets/images/logoBlack.png";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";
import Footer from './components/Footer';
import About from './routes/About';
import Services from './routes/Services';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center w-100">
      <div className="app-content">
        <Navbar 
          height="80px"
          variant="sticky"
          css={{
            marginBottom: -80,
          }}
          maxWidth="xl"
        >
          <Navbar.Brand>
            <Image
              width={40}
              height={40}
              src={logoBlack}
              alt="logo-black"
            />
            <Text b css={{fontSize: 20, marginLeft: "0.5em"}}>
              Beyond The Bell
            </Text>
          </Navbar.Brand>
          <NavbarContent />
        </Navbar>
        <Router>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/about-btb" element={<About />} />
            <Route path="/our-services" element={<Services />} />
            <Route path="/contact-btb" element={<Contact />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
