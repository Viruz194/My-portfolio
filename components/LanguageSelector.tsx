import React, { useState, useRef, useEffect } from 'react';
import { Language, languageOptions } from '../utils/translations';
import { playClick, playHover } from '../utils/audioFx';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSelectLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = languageOptions.find(opt => opt.code === currentLang) || languageOptions[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    playClick();
    onSelectLang(code);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative z-[2100]">
      {/* Selector Button */}
      <button
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
        }}
        onMouseEnter={playHover}
        className="bg-[var(--bg-secondary)] border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] px-3 py-2.5 clip-polygon-btn font-mono font-bold text-xs uppercase flex items-center gap-2 hover:bg-[var(--accent-cyan)] hover:text-black transition-all shadow-[0_0_12px_rgba(0,243,255,0.2)]"
        aria-label="Select Language"
        title="Select Language"
      >
        <i className="fas fa-globe text-sm"></i>
        <span>{selectedOption.label}</span>
        <i className={`fas fa-chevron-down text-[10px] transition-transform ${isOpen ? 'rotate-180' : ''}`}></i>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-12 bg-[#060a14] border-2 border-[var(--accent-cyan)] p-2 clip-corner shadow-[0_0_25px_rgba(0,243,255,0.35)] w-44 max-h-72 overflow-y-auto custom-scrollbar flex flex-col gap-1 backdrop-blur-md">
          <div className="text-[10px] font-mono text-[var(--accent-yellow)] px-2 py-1 uppercase font-bold border-b border-[var(--border-dim)] mb-1">
            // SELECT_LANGUAGE
          </div>
          {languageOptions.map((opt) => (
            <button
              key={opt.code}
              onClick={() => handleSelect(opt.code)}
              onMouseEnter={playHover}
              className={`flex items-center justify-between px-3 py-2 text-xs font-mono transition-all text-left clip-corner ${
                currentLang === opt.code
                  ? 'bg-[var(--accent-cyan)] text-black font-bold shadow-[0_0_10px_var(--accent-cyan)]'
                  : 'text-[var(--text-primary)] hover:bg-[var(--accent-yellow)] hover:text-black hover:font-bold hover:shadow-[0_0_10px_rgba(252,238,10,0.5)]'
              }`}
            >
              <span>{opt.nativeName}</span>
              <span className="text-[10px] opacity-75 font-bold">[{opt.label}]</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
