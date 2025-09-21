import React from "react";
import "../styles/StatsSection.css";

function StatsSection() {
  return (
    <section className="stats">
      <div className="stat-box">
        <h3>120+</h3>
        <p>Crops Supported</p>
      </div>
      <div className="stat-box">
        <h3>10+</h3>
        <p>Languages</p>
      </div>
      <div className="stat-box">
        <h3>Offline</h3>
        <p>Support</p>
      </div>
    </section>
  );
}

export default StatsSection;
