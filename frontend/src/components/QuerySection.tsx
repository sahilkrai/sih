import React, { useEffect, useRef, useState } from "react";
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
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = (text) => {
    if (!text.trim()) return;
    setResult(`You asked: ${text}`);
    // After asking a question, show suggestions for more ideas
    setShowSuggestions(true);
  };

  const handleQuestionSelect = (selectedQuestion) => {
    setQuery(selectedQuestion);
    handleSubmit(selectedQuestion);
  };

  // Hide suggestions only when clicking outside the query section
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
      <h3 className="query-heading">Ask me anything</h3>
      {/* Circular Spline Viewer */}
      <div className="query-spline-circle">
        <spline-viewer url="https://prod.spline.design/KNvm0F5ZCt9Zdwvc/scene.splinecode"></spline-viewer>
        <div className="watermark-cover"></div> {/* ✅ hides the watermark */}
      </div>

      {/* Input + Mic */}
      <div className="query-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(query)}
          placeholder="Type or speak your question..."
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

      {result && <p className="query-result">{result}</p>}
      {showSuggestions && <MostAskedQuestions onQuestionSelect={handleQuestionSelect} />}
    </section>
  );
}

export default QuerySection;
