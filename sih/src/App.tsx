import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LanguageModal from "./components/LanguageModal";

import Home from "./pages/Home";
import History from "./pages/History";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./styles/App.css";

function App() {
  const { i18n } = useTranslation();
  const [showLangModal, setShowLangModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('app.language');
    if (!saved) {
      setShowLangModal(true);
    } else if (i18n.language !== saved) {
      i18n.changeLanguage(saved);
    }
  }, [i18n]);

  // Keep <html lang="..."> in sync with selected language for CSS targeting and accessibility
  useEffect(() => {
    const lng = i18n.language?.startsWith('hi') ? 'hi' : i18n.language?.startsWith('ml') ? 'ml' : 'en';
    document.documentElement.setAttribute('lang', lng);
  }, [i18n.language]);

  return (
    <Router>
      <div className="app-container">
        <LanguageModal open={showLangModal} onClose={() => setShowLangModal(false)} />
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/signup" element={<Signup onSignup={() => {}} />} />
            <Route path="/login" element={<Login onLogin={() => {}} />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
