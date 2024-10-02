import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Layout/Home';
import MobileMenu from './Components/Header/MobileMenu';
import Footer from './Components/Layout/Footer';
import Organisation from './Components/Layout/Organisation';
import Form from "./Components/Layout/form"


const App = () => {
  // const [projects, setProjects] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const [orgData, setOrgData] = useState([]);
  const [orglength, setOrglength] = useState([]);

  useEffect(() => {
    const fetchGsoCOrganizations = async () => {
      try {
        const response = await axios.get(
          "https://api.gsocorganizations.dev/2024.json"
        );
        console.log(response.data);
  
        const orgsWithIds = response.data.organizations.map((org, index) => ({
          ...org,
          id: index + 1,
        }));
  
        setOrgData(orgsWithIds);
        setOrglength(orgsWithIds.length); 
      } catch (error) {
        console.error("Error fetching GSoC Organizations:", error.message);
      }
    };
  
    fetchGsoCOrganizations();
  }, []);


  const handleNavbarBtnClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMobileMenuBtnClick = () => {
    setMenuOpen(false);

  }

  return (
    <Router>
      <Navbar onNavbarBtnClick={handleNavbarBtnClick} />
      <MobileMenu isOpen={menuOpen} onMobileMenuBtnClick={handleMobileMenuBtnClick} />

      <Routes >

        <Route path="/" element={<Home orglength={orglength} />} />
        <Route path="/organisation" element={<Organisation orgData={orgData}  />} />
        <Route path="/form" element={<Form  />} />

      </Routes>

      <Footer />

    </Router>

  )
};

export default App;
