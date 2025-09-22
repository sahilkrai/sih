// import { useState, useRef } from 'react'
// import './App.css'

// function App() {
//   const [textQuery, setTextQuery] = useState('')
//   const [speechQuery, setSpeechQuery] = useState('')
//   const [imageFile, setImageFile] = useState<File | null>(null)
//   const [isRecording, setIsRecording] = useState(false)
//   const recognitionRef = useRef<SpeechRecognition | null>(null)

//   const startSpeechRecognition = () => {
//     if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
//       alert('Speech recognition not supported in this browser.')
//       return
//     }

//     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
//     const recognition = new SpeechRecognition()
//     recognition.continuous = false
//     recognition.interimResults = false
//     recognition.lang = 'en-US'

//     recognition.onstart = () => setIsRecording(true)
//     recognition.onresult = (event) => {
//       const transcript = event.results[0][0].transcript
//       setSpeechQuery(transcript)
//     }
//     recognition.onend = () => setIsRecording(false)
//     recognition.onerror = () => setIsRecording(false)

//     recognitionRef.current = recognition
//     recognition.start()
//   }

//   const stopSpeechRecognition = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.stop()
//     }
//   }

//   const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0]
//     if (file) {
//       setImageFile(file)
//     }
//   }

//   const handleSubmit = () => {
//     const query = {
//       text: textQuery,
//       speech: speechQuery,
//       image: imageFile ? imageFile.name : null
//     }
//     console.log('Submitting query:', query)
//     alert('Query submitted! (Check console for details)')
//     // TODO: Send to backend
//   }

//   return (
//     <div className="app">
//       <h1>Farmers Query App</h1>
//       <div className="query-section">
//         <h2>Text Query</h2>
//         <textarea
//           value={textQuery}
//           onChange={(e) => setTextQuery(e.target.value)}
//           placeholder="Type your query here..."
//           rows={4}
//         />
//       </div>
//       <div className="query-section">
//         <h2>Speech Query</h2>
//         <button onClick={isRecording ? stopSpeechRecognition : startSpeechRecognition}>
//           {isRecording ? 'Stop Recording' : 'Start Recording'}
//         </button>
//         <p>Transcribed: {speechQuery}</p>
//       </div>
//       <div className="query-section">
//         <h2>Image Upload</h2>
//         <input type="file" accept="image/*" onChange={handleImageUpload} />
//         {imageFile && <p>Selected: {imageFile.name}</p>}
//       </div>
//       <button onClick={handleSubmit} className="submit-btn">Submit Query</button>
//     </div>
//   )
// }

// export default App



import React, { useEffect, useRef, useState } from "react";

type LangCode = "en" | "ml";

const SpeechRecognition =
  (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const synth: SpeechSynthesis = window.speechSynthesis;

export default function App() {
  const [query, setQuery] = useState<string>("");
  const [advice, setAdvice] = useState<string>(
    localStorage.getItem("lastAdvice") || ""
  );
  const [listening, setListening] = useState<boolean>(false);
  const [language, setLanguage] = useState<LangCode>("en");

  const recognitionRef = useRef<any>(null);

  // Setup speech recognition
  useEffect(() => {
    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.lang = language === "en" ? "en-IN" : "ml-IN";
      rec.interimResults = false;
      rec.maxAlternatives = 1;

      rec.onresult = (e: SpeechRecognitionEvent) => {
        const text = e.results[0][0].transcript;
        setQuery(text);
        setListening(false);
        rec.stop();
      };
      rec.onend = () => setListening(false);

      recognitionRef.current = rec;
    }
  }, [language]);

  function startListening() {
    if (!SpeechRecognition) {
      alert("Voice input not supported in this browser. Try Chrome.");
      return;
    }
    try {
      recognitionRef.current.lang = language === "en" ? "en-IN" : "ml-IN";
      recognitionRef.current.start();
      setListening(true);
    } catch (err) {
      console.error(err);
      setListening(false);
    }
  }

  async function getAdvice(q: string) {
    if (!q) return;
    setAdvice("Thinking...");
    try {
      const res = await fetch("http://localhost:3000/api/advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: q, language }),
      });
      const data = await res.json();
      const text: string = data.advice || "Sorry, I couldn't find an answer.";
      setAdvice(text);
      localStorage.setItem("lastAdvice", text);
      speak(text, language);
    } catch (err) {
      console.error(err);
      setAdvice("Network error — showing cached answer (if any).");
    }
  }

  function speak(text: string, lang: LangCode = "en") {
    if (!synth) return;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang === "en" ? "en-IN" : "ml-IN";
    utter.rate = 0.95;
    synth.cancel(); // stop previous
    synth.speak(utter);
  }

  return (
    <div className="container">
      <h1>Farmer Advisor</h1>

      <div className="controls">
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value as LangCode)}
        >
          <option value="en">English</option>
          <option value="ml">Malayalam</option>
          {/* Add more languages here */}
        </select>

        <button className="speakBtn" onClick={startListening}>
          {listening ? "Listening..." : "🎤 Speak"}
        </button>
      </div>

      <textarea
        aria-label="question"
        placeholder="Type your question or use Speak"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="actions">
        <button onClick={() => getAdvice(query)}>Get Advice</button>
        <button onClick={() => speak(advice, language)}>🔊 Replay</button>
      </div>

      <div className="adviceCard">
        <h2>Advice</h2>
        <p>{advice}</p>
      </div>
    </div>
  );
}
