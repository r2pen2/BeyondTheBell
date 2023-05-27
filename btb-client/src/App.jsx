import './App.css';
import { Socials, NavbarContent } from './components/Navbar';
import { Navbar, Image, Text } from "@nextui-org/react";
import logoBlack from "./assets/images/logoBlack.png";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./routes/HomePage";

function App() {
  return (
    <div className="App d-flex flex-column align-items-center w-100">
      <Socials />
      <div className="app-content">
        <Navbar 
          height="80px"
          variant="sticky"
          css={{
            marginBottom: -80
          }}
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
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
