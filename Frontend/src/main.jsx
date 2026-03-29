import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import HomePage from './components/Home/HomaPage';
import AboutPage from './components/About/AboutPage';
import ProjectPage from './components/Project/ProjectPage';
import SkillPage from './components/Skill/SkillPage';
import ContactPage from './components/contact/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Certificate from './components/certificate/CertificatePage';
import Experiance from './components/Experiance/ExperiancePage';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
     <Routes>
       <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
         <Route path="/project" element={<ProjectPage />} />
          <Route path="/skill" element={<SkillPage />} /> 
           <Route path="/contact" element={<ContactPage />} />
           <Route path="/certificate" element={<Certificate />} />
            <Route path="/experiance" element={<Experiance />} />
     </Routes>
     <Footer/>
  </BrowserRouter>
)
