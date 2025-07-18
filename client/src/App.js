// client/src/App.js
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TheVillaPage from './pages/TheVillaPage';
import ExperiencesPage from './pages/ExperiencesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import ContactUsPage from './pages/ContactUsPage';
import './App.css';

// --- VVV --- THIS IS THE NEW UTILITY COMPONENT --- VVV ---
// This component will automatically scroll to the top on every page change
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};
// --- ^^^ --- END OF NEW UTILITY COMPONENT --- ^^^ ---

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <ScrollToTop /> {/* <-- Add the component here */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/the-villa" element={<TheVillaPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
export default App;