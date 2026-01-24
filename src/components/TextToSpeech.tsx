import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';

interface TextToSpeechProps {
  text: string;
  lang?: string;
  className?: string;
}

const TextToSpeech: React.FC<TextToSpeechProps> = ({ 
  text, 
  lang = 'fr-FR',
  className = '' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Load available voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();

      // Find a French voice if available
      const frenchVoice = availableVoices.find(voice =>
        voice.lang.includes('fr') || voice.lang.includes(lang)
      ) || availableVoices.find(voice =>
        voice.lang.includes('en')
      ) || availableVoices[0];

      setSelectedVoice(frenchVoice || null);
    };

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, [lang]);

  const speak = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    if (text.trim() !== '') {
      const utterance = new SpeechSynthesisUtterance(text);
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
      
      utterance.lang = lang;
      utterance.rate = 0.9; // Slightly slower for better comprehension
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  const replay = () => {
    stop();
    setTimeout(speak, 100);
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stop();
    } else {
      speak();
    }
  };

  return (
    <div className={`text-to-speech ${className}`}>
      <div className="tts-controls">
        <button 
          onClick={togglePlayback}
          className={`tts-button ${isPlaying ? 'playing' : ''}`}
          aria-label={isPlaying ? "Arrêter la lecture" : "Lire le texte"}
          title={isPlaying ? "Arrêter la lecture" : "Lire le texte"}
        >
          {isPlaying ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
        
        <button 
          onClick={replay}
          className="tts-button replay"
          aria-label="Relire le texte"
          title="Relire le texte"
        >
          <RotateCcw size={16} />
        </button>
      </div>
    </div>
  );
};

export default TextToSpeech;