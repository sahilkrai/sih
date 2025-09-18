import React from "react";
import { Link } from "react-router-dom";
import "../styles/HeroSection.css";
import { scrollToElement } from "../utils/scrollUtils";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="hero-center">
        <h1 className="text-center">
          {t('hero.welcome')} <span>{t('brand')}</span>
        </h1>
        <p className="text-center">{t('hero.subtitle')}</p>
        <div className="hero-buttons">
          <Link to="/signup" className="btn solid">{t('hero.getStarted')}</Link>
          <button
            onClick={() => {
              const offset = 80;
              const el = document.getElementById('krishisahaay') || document.getElementById('about');
              if (el) {
                const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top: pos, behavior: 'smooth' });
              }
            }}
            className="btn outline"
          >
            {t('hero.learnMore')}
          </button>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;


