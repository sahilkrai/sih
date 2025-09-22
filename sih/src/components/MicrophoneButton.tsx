/* eslint-disable no-irregular-whitespace */
import { useEffect, useRef, useState } from 'react';
import { FaMicrophone, FaStop } from 'react-icons/fa';
import '../styles/MicrophoneButton.css';

interface MicrophoneButtonProps {
  onResult?: (text: string) => void; // Speech-to-text result
  onAudioCaptured?: (audioBlob: Blob) => void; // Fallback raw audio
}

declare global {
  interface Window {
    webkitSpeechRecognition?: any;
    SpeechRecognition?: any;
  }
}

const MicrophoneButton = ({ onResult, onAudioCaptured }: MicrophoneButtonProps) => {
  const [isRecording, setIsRecording] = useState(false);
  const [supportsSpeech, setSupportsSpeech] = useState(false);
  const recognitionRef = useRef<any>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    // Detect Web Speech API support
    const SpeechRec: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRec) {
      setSupportsSpeech(true);
      const recognition: any = new SpeechRec();
      recognition.lang = 'en-US';
      recognition.interimResults = false;
      recognition.continuous = false;

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results as any)
          .map((result: any) => result[0].transcript)
          .join(' ');
        if (onResult) onResult(transcript);
      };

      recognition.onend = () => {
        setIsRecording(false);
      };

      recognition.onerror = () => {
        setIsRecording(false);
      };

      recognitionRef.current = recognition;
    } else {
      setSupportsSpeech(false);
    }

    return () => {
      // Cleanup
      try {
        recognitionRef.current?.stop();
      } catch {
        // ignore
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((t) => t.stop());
      }
    };
  }, [onResult]);

  const startSpeechRecognition = () => {
    try {
      recognitionRef.current?.start();
      setIsRecording(true);
    } catch {
      // Some browsers throw on double start; ensure state consistency
      setIsRecording(true);
    }
  };

  const stopSpeechRecognition = () => {
    try {
      recognitionRef.current?.stop();
    } finally {
      setIsRecording(false);
    }
  };

  const startMediaRecorder = async () => {
    try {
      const constraints = { audio: true };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      streamRef.current = stream;
      const recorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      recorder.addEventListener('dataavailable', (event) => {
        if (event.data && event.data.size > 0) {
          audioChunks.push(event.data as Blob);
        }
      });

      recorder.addEventListener('stop', () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
        onAudioCaptured?.(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      });

      recorder.start();
      mediaRecorderRef.current = recorder;
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Could not access microphone. Please check your permissions.');
    }
  };

  const stopMediaRecorder = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleClick = () => {
    if (isRecording) {
      supportsSpeech ? stopSpeechRecognition() : stopMediaRecorder();
    } else {
      supportsSpeech ? startSpeechRecognition() : startMediaRecorder();
    }
  };

  return (
    <button
      className={`microphone-button ${isRecording ? 'recording' : ''}`}
      onClick={handleClick}
      aria-label={isRecording ? 'Stop recording' : 'Start recording'}
      title={supportsSpeech ? 'Speak your question' : 'Recording audio'}
    >
      {isRecording ? <FaStop /> : <FaMicrophone />} 
    </button>
  );
};

export default MicrophoneButton;