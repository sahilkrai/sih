import "../styles/Footer.css";
import { FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand / Left Column */}
        <div className="footer-brand">
          <h2>{t('brand')}</h2>
          <p>Copyright {new Date().getFullYear()} {t('brand')}</p>
          <p>{t('footer.allRights')}</p>

          <div className="footer-socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Links / Right Columns */}
        <div className="footer-links">
          <div>
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to="/">{t('nav.home')}</Link></li>
              <li><Link to="/login">{t('nav.login')}</Link></li>
              <li><Link to="/signup">{t('nav.signup')}</Link></li>
              <li><Link to="/profile">{t('nav.profile')}</Link></li>
            </ul>
          </div>

          <div>
            <h4>{t('footer.features')}</h4>
            <ul>
              <li><Link to="/" state={{ scrollTo: 'query', offset: 80 }}>{t('footer.aiAdvisory')}</Link></li>
              <li><Link to="/history">{t('footer.queryHistory')}</Link></li>
              <li><a href="#contact">{t('footer.contactUs')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
