import { useState } from "react";
import "../styles/MostAskedQuestions.css";

function MostAskedQuestions({ onQuestionSelect }) {
  const commonQuestions = [
    "What crops are suitable for my region?",
    "How to identify tomato leaf disease?",
    "Best practices for organic farming",
    "How to increase crop yield naturally?",
    "Government schemes for farmers",
    "Weather forecast for next week",
    "How to control pests without chemicals?",
    "Best irrigation methods for water conservation"
  ];

  return (
    <div className="most-asked-questions">
      <h3>Most Asked Questions</h3>
      <div className="questions-list">
        {commonQuestions.map((question, index) => (
          <button
            key={index}
            className="question-item"
            onClick={() => onQuestionSelect(question)}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MostAskedQuestions;