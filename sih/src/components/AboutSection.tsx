import React from 'react';
import '../styles/AboutSection.css';
import { FaLeaf, FaGlobeAsia, FaChartLine } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Anchor target for Learn More scroll */}
      <div id="krishisahaay" style={{ position: 'relative', height: 0 }} />
      <section id="about" className="about-section">
      <div className="about-content">
        <h2>{t('about.title', { brand: t('brand') })}</h2>
        <p className="about-intro">{t('about.intro', { brand: t('brand') })}</p>
        
        <div className="stats-container">
        
          <div className="stat-box">
            <FaLeaf className="stat-icon" />
            <h3>95%</h3>
            <p>{t('about.statAccuracy')}</p>
          </div>
          <div className="stat-box">
            <FaGlobeAsia className="stat-icon" />
            <h3>12</h3>
            <p>{t('about.statStates')}</p>
          </div>
          <div className="stat-box">
            <FaChartLine className="stat-icon" />
            <h3>30%</h3>
            <p>{t('about.statYield')}</p>
          </div>
        </div>
        
        <div className="about-details">
          <div className="about-text">
            <h3>{t('about.mission')}</h3>
            <p>{t('about.missionBody')}</p>
          </div>
          <div className="about-text">
            <h3>{t('about.offer')}</h3>
            <p>{t('about.offerBody', { brand: t('brand') })}</p>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default AboutSection;