import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaHistory, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import '../styles/Navbar.css';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      // Mark as scrolled as soon as user moves from the very top
      setScrolled(y > 0);
      const delta = y - lastYRef.current;
      setScrollingUp(delta < 0);
      lastYRef.current = y;
    };
    lastYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (menuRef.current && target && !menuRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close mobile menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${scrollingUp ? "scrolling-up" : ""} ${isOpen ? "menu-open" : ""}`}
      style={scrolled ? { background: '#ffffff', boxShadow: '0 2px 10px rgba(0,0,0,0.06)' } : undefined}
    >
      <div className="navbar-container">
        <Link to="/" className="logo">{t('brand')}</Link>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          <Link to="/" className="nav-link">{t('nav.home')}</Link>
          <Link to="/profile" className="nav-link">{t('nav.profile')}</Link>
          <Link to="/history" className="nav-link">{t('nav.history')}</Link>
          <Link to="/login" className="auth-btn login">{t('nav.login')}</Link>
          <Link to="/signup" className="auth-btn outline">{t('nav.signup')}</Link>

          {/* Language Switcher (Desktop) */}
          <select
            aria-label="Language selector"
            className="lang-select"
            value={i18n.language.startsWith('hi') ? 'hi' : i18n.language.startsWith('ml') ? 'ml' : 'en'}
            onChange={(e) => {
              const lng = e.target.value as 'en' | 'hi' | 'ml';
              i18n.changeLanguage(lng);
              localStorage.setItem('app.language', lng);
            }}
          >
            <option value="en">EN</option>
            <option value="hi">हिं</option>
            <option value="ml">മ​​</option>
          </select>
        </div>

        {/* Mobile Hamburger */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay to cover the page when menu is open */}
      <div
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />
      <div ref={menuRef} className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <div className="mobile-menu-header">
          <h3>{t('brand')}</h3>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
        </div>
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaHome className="mobile-icon" />
            <span>{t('nav.home')}</span>
          </Link>
          <Link to="/profile" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaUser className="mobile-icon" />
            <span>{t('nav.profile')}</span>
          </Link>
          <Link to="/history" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaHistory className="mobile-icon" />
            <span>{t('nav.history')}</span>
          </Link>
          <Link to="/login" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaSignInAlt className="mobile-icon" />
            <span>{t('nav.login')}</span>
          </Link>
          <Link to="/signup" className="mobile-link" onClick={() => setIsOpen(false)}>
            <FaUserPlus className="mobile-icon" />
            <span>{t('nav.signup')}</span>
          </Link>

          {/* Language Switcher (Mobile) */}
          <div style={{ marginTop: 12 }}>
            <label htmlFor="lang-mobile" style={{ display: 'block', fontSize: 12, opacity: 0.8, marginBottom: 6 }}>{t('modal.chooseLanguage')}</label>
            <select
              id="lang-mobile"
              aria-label="Language selector"
              className="lang-select"
              value={i18n.language.startsWith('hi') ? 'hi' : i18n.language.startsWith('ml') ? 'ml' : 'en'}
              onChange={(e) => {
                const lng = e.target.value as 'en' | 'hi' | 'ml';
                i18n.changeLanguage(lng);
                localStorage.setItem('app.language', lng);
              }}
              style={{ width: '100%' }}
            >
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="ml">മലയാളം</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
