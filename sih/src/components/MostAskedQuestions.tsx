import React from "react";
import "../styles/MostAskedQuestions.css";
import { useTranslation } from "react-i18next";

type QAItem = { question: string; answer: string };

function MostAskedQuestions({ onQuestionSelect }: { onQuestionSelect: (item: QAItem) => void }) {
  const { t } = useTranslation();
  const commonQuestions = (t('query.qa', { returnObjects: true }) as unknown as QAItem[]) || [];

  return (
    <div className="most-asked-questions">
      <h3>{t('query.mostAskedTitle')}</h3>
      <div className="questions-list">
        {commonQuestions.map((item, index) => (
          <button
            key={index}
            className="question-item"
            onClick={() => onQuestionSelect(item)}
          >
            {item.question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MostAskedQuestions;