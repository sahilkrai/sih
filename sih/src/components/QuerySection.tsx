import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import MicrophoneButton from "./MicrophoneButton";
import MostAskedQuestions from "./MostAskedQuestions";
import "../styles/QuerySection.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': any;
    }
  }
}

function QuerySection() {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [isAnswer, setIsAnswer] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (text: string) => {
    if (!text.trim()) return;
    setResult(`${t('query.youAsked')}: ${text}`);
    setIsAnswer(false);
    // After asking a question, show suggestions for more ideas
    setShowSuggestions(true);
  };

  type QAItem = { question: string; answer: string };

  const handleQuestionSelect = (item: QAItem) => {
    setQuery(item.question);
    setResult(item.answer);
    setIsAnswer(true);
    setShowSuggestions(false);
  };

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (containerRef.current && target && !containerRef.current.contains(target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <section id="query" className="query-section" ref={containerRef}>
      <h3 className="query-heading">{t('query.heading')}</h3>
      <div className="query-spline-circle">
        <spline-viewer url="https://prod.spline.design/KNvm0F5ZCt9Zdwvc/scene.splinecode"></spline-viewer>
        <div className="watermark-cover"></div>
      </div>

      <div className="query-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(query)}
          placeholder={t('query.placeholder')}
          className="query-input"
          onFocus={() => setShowSuggestions(true)}
        />
        <MicrophoneButton
          onResult={(speech) => {
            setQuery(speech);
            handleSubmit(speech);
          }}
        />
      </div>

      {result && (
        <div className={`query-result ${isAnswer ? 'answer' : ''}`}>{result}</div>
      )}
      {showSuggestions && <MostAskedQuestions onQuestionSelect={handleQuestionSelect} />}
    </section>
  );
}

export default QuerySection;
