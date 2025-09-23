import React, { useEffect, useRef, useState } from "react";
import MicrophoneButton from "./MicrophoneButton";
import MostAskedQuestions from "./MostAskedQuestions";
import "../styles/QuerySection.css";
import Markdown from "react-markdown";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": any;
    }
  }
}

function QuerySection() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleSubmit = async (text: string) => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/api/advice", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: text, language: "english" }),
      });
      const data = await res.json();
      setResult(data.advice);
      // After asking a question, show suggestions for more ideas
      setShowSuggestions(true);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  const handleQuestionSelect = (selectedQuestion: string) => {
    setQuery(selectedQuestion);
    handleSubmit(selectedQuestion);
  };

  // Hide suggestions only when clicking outside the query section
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node | null;
      if (
        containerRef.current &&
        target &&
        !containerRef.current.contains(target)
      ) {
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

      {!loading && result && (
        <p className="query-result">
          <Markdown>{result}</Markdown>
        </p>
      )}
      {!loading && showSuggestions && (
        <MostAskedQuestions onQuestionSelect={handleQuestionSelect} />
      )}
      {loading && <div className="query-result flex flex-row justify-center"><div className="w-min">Loading...</div></div>}
    </section>
  );
}

export default QuerySection;


// chhod bkl