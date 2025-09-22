import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import QuerySection from "../components/QuerySection";
import AboutSection from "../components/AboutSection";
import { scrollToElement } from "../utils/scrollUtils";

function Home() {
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string; offset?: number } | null;
    if (state?.scrollTo) {
      // small timeout to ensure sections are mounted before scrolling
      setTimeout(() => {
        scrollToElement(state.scrollTo!, state.offset ?? 80);
      }, 0);
    }
  }, [location.state]);

  // Also support #about hash and ?scroll=about
  useEffect(() => {
    const hash = location.hash?.replace('#', '');
    const params = new URLSearchParams(location.search);
    const fromQuery = params.get('scroll');
    const target = hash || fromQuery;
    if (target === 'about') {
      setTimeout(() => scrollToElement('about', 80), 0);
    }
  }, [location.hash, location.search]);

  return (
    <div>
      <HeroSection />
      <QuerySection />
      <AboutSection />
      <StatsSection />
    </div>
  );
}

export default Home;
