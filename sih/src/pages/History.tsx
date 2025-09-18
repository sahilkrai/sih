import React from "react";
import "../styles/History.css";
import { useTranslation } from 'react-i18next';

function History() {
  const { t } = useTranslation();
  const qaData = [
    { q: t('history.whatIsAIQ'), a: t('history.whatIsAIA') },
    { q: t('history.whatIsBrandQ', { brand: t('brand') }), a: t('history.whatIsBrandA', { brand: t('brand') }) },
    { q: t('history.howUseQ'), a: t('history.howUseA') },
  ];

  return (
    <div className="history-container">
      <h2>{t('history.title')}</h2>
      <div className="qa-list">
        {qaData.map((item, index) => (
          <div key={index} className="qa-item">
            <p><strong>Q:</strong> {item.q}</p>
            <p><strong>A:</strong> {item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
