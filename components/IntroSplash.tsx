import React, { useState, useEffect } from 'react';
import { playClick, playMatrixSound } from '../utils/audioFx';
import { Language, languageOptions, translations } from '../utils/translations';
import { announceWelcomeVoice, announceLangChangeVoice, announceInitializeVoice } from '../utils/voiceAI';

interface IntroSplashProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onEnter: () => void;
}

const welcomeLanguages = [
  { word: 'ಸ್ವಾಗತ', lang: 'Kannada', style: { top: '10%', left: '6%' }, color: 'var(--accent-yellow)', size: 'text-2xl sm:text-4xl', delay: '0s' },
  { word: 'स्वागत', lang: 'Hindi', style: { top: '12%', right: '8%' }, color: 'var(--accent-cyan)', size: 'text-2xl sm:text-4xl', delay: '0.5s' },
  { word: 'வணக்கம்', lang: 'Tamil', style: { bottom: '12%', left: '8%' }, color: 'var(--accent-pink)', size: 'text-2xl sm:text-3xl', delay: '1s' },
  { word: 'സ്വാഗതം', lang: 'Malayalam', style: { bottom: '14%', right: '10%' }, color: 'var(--accent-yellow)', size: 'text-2xl sm:text-3xl', delay: '1.5s' },
  { word: 'WELCOME', lang: 'English', style: { top: '6%', left: '42%' }, color: 'var(--accent-cyan)', size: 'text-xl sm:text-2xl', delay: '0.2s' },
  { word: '欢迎', lang: 'Mandarin', style: { top: '22%', left: '18%' }, color: 'var(--text-primary)', size: 'text-2xl sm:text-4xl', delay: '0.8s' },
  { word: 'BIENVENIDO', lang: 'Spanish', style: { top: '24%', right: '18%' }, color: 'var(--accent-yellow)', size: 'text-sm sm:text-base', delay: '1.2s' },
  { word: 'ようこそ', lang: 'Japanese', style: { bottom: '24%', left: '18%' }, color: 'var(--accent-cyan)', size: 'text-xl sm:text-3xl', delay: '0.4s' },
  { word: 'BIENVENUE', lang: 'French', style: { bottom: '26%', right: '20%' }, color: 'var(--accent-pink)', size: 'text-sm sm:text-base', delay: '1.6s' },
  { word: 'أهلاً وسهلاً', lang: 'Arabic', style: { top: '34%', left: '4%' }, color: 'var(--accent-yellow)', size: 'text-xl sm:text-2xl', delay: '0.7s' },
  { word: 'WILLKOMMEN', lang: 'German', style: { top: '36%', right: '4%' }, color: 'var(--accent-cyan)', size: 'text-xs sm:text-sm', delay: '1.1s' },
  { word: 'స్వాగతం', lang: 'Telugu', style: { bottom: '8%', left: '44%' }, color: 'var(--accent-cyan)', size: 'text-xl sm:text-3xl', delay: '0.9s' },
  { word: 'ДОБРО ПОЖАЛОВАТЬ', lang: 'Russian', style: { bottom: '34%', left: '4%' }, color: 'var(--accent-pink)', size: 'text-xs sm:text-sm', delay: '1.3s' },
];

const IntroSplash: React.FC<IntroSplashProps> = ({ currentLang, onSelectLang, onEnter }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const t = translations[currentLang] || translations.en;

  useEffect(() => {
    // Lock scroll and reset to top when splash screen is active
    document.body.style.overflow = 'hidden';
    window.scrollTo(0, 0);

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSplashClick = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      announceWelcomeVoice(currentLang);
    }
  };

  const handleEnterClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasInteracted) setHasInteracted(true);
    playClick();
    playMatrixSound();
    announceInitializeVoice(currentLang);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setIsExiting(true);
    
    setTimeout(() => {
      document.body.style.overflow = 'unset';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      onEnter();
    }, 600);
  };

  const handleLangChange = (e: React.MouseEvent, code: Language) => {
    e.stopPropagation();
    if (!hasInteracted) setHasInteracted(true);
    playClick();
    onSelectLang(code);
    announceLangChangeVoice(code);
  };

  return (
    <div 
      onClick={handleSplashClick}
      className={`fixed inset-0 z-[5000] bg-[#02050b] flex flex-col items-center justify-center p-6 transition-all duration-700 select-none overflow-hidden ${
        isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60 pointer-events-none"></div>

      {/* Scattered Multilingual Welcome Background Text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {welcomeLanguages.map((item, idx) => (
          <div
            key={idx}
            className={`absolute font-extrabold tracking-widest transition-all duration-1000 ${item.size} animate-pulse`}
            style={{
              ...item.style,
              color: item.color,
              animationDelay: item.delay,
              animationDuration: '3s',
              opacity: 0.55,
              textShadow: `0 0 12px ${item.color}`,
              fontFamily: "'Rajdhani', sans-serif"
            }}
          >
            {item.word}
            <span className="text-[9px] font-mono opacity-50 block tracking-normal uppercase text-white font-normal">
              // {item.lang}
            </span>
          </div>
        ))}
      </div>

      {/* Radial Glow Circles for Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,243,255,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(252,238,10,0.08)_0%,transparent_70%)] pointer-events-none"></div>

      {/* Horizontal Laser Scanning Lines */}
      <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-60 animate-scan-slow"></div>
      <div className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-50 animate-scan-slow" style={{ animationDirection: 'reverse', animationDuration: '14s' }}></div>

      {/* Vertical Laser Scanning Line */}
      <div className="absolute top-0 left-1/3 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--accent-yellow)] to-transparent opacity-40 animate-scan-vertical"></div>

      {/* Sci-Fi Decorative Corner Accents */}
      <div className="absolute top-8 left-8 w-20 h-20 border-t-4 border-l-4 border-[var(--accent-yellow)] opacity-90 shadow-[0_0_15px_rgba(252,238,10,0.3)]"></div>
      <div className="absolute top-8 right-8 w-20 h-20 border-t-4 border-r-4 border-[var(--accent-cyan)] opacity-90 shadow-[0_0_15px_rgba(0,243,255,0.3)]"></div>
      <div className="absolute bottom-8 left-8 w-20 h-20 border-b-4 border-l-4 border-[var(--accent-cyan)] opacity-90 shadow-[0_0_15px_rgba(0,243,255,0.3)]"></div>
      <div className="absolute bottom-8 right-8 w-20 h-20 border-b-4 border-r-4 border-[var(--accent-pink)] opacity-90 shadow-[0_0_15px_rgba(255,0,60,0.3)]"></div>

      {/* Left HUD Telemetry Stream (Desktop Only) */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 text-xs font-mono text-[var(--accent-cyan)] opacity-70 border-l border-[var(--accent-cyan)] pl-3 z-20">
        <div><span className="text-[var(--text-muted)]">// OPERATOR_ID:</span> 9402</div>
        <div><span className="text-[var(--text-muted)]">// STATION:</span> BENGALURU, IN</div>
        <div><span className="text-[var(--text-muted)]">// LATENCY:</span> 2ms [OPTIMAL]</div>
        <div><span className="text-[var(--text-muted)]">// MISSION:</span> CHINA (2YRS)</div>
        <div className="text-[var(--accent-yellow)] animate-pulse">● TELEMETRY_ONLINE</div>
      </div>

      {/* Right HUD Telemetry Stream (Desktop Only) */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 text-xs font-mono text-[var(--accent-pink)] opacity-70 border-r border-[var(--accent-pink)] pr-3 text-right z-20">
        <div>ENCRYPTION: AES-256 <span className="text-[var(--text-muted)]">//</span></div>
        <div>ROLE: REGIONAL_LEAD <span className="text-[var(--text-muted)]">//</span></div>
        <div>EXPERIENCE: 10+ YEARS <span className="text-[var(--text-muted)]">//</span></div>
        <div>STACK: INDUSTRY 4.0 & AI <span className="text-[var(--text-muted)]">//</span></div>
        <div className="text-[var(--accent-cyan)] animate-pulse">● GATEWAY_READY</div>
      </div>

      {/* Central Content Box */}
      <div className="relative z-10 text-center max-w-3xl w-full bg-[var(--bg-secondary)]/90 border-2 border-[var(--accent-cyan)] p-5 sm:p-8 clip-corner shadow-[0_0_60px_rgba(0,243,255,0.35)] animate-pulse-once backdrop-blur-md">
        
        {/* Status Tag */}
        <div className="inline-block bg-[var(--accent-yellow)] text-black font-mono font-bold text-xs px-3 py-1 uppercase tracking-widest clip-corner-top-right mb-3 shadow-[0_0_10px_rgba(252,238,10,0.5)]">
          {t.splash_gateway}
        </div>

        {/* Network Welcome Title */}
        <div className="min-h-[100px] flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[var(--text-primary)] uppercase tracking-tighter mb-1 leading-tight">
            {t.splash_welcome_to} <br />
            <span className="text-[var(--accent-yellow)] drop-shadow-[0_0_18px_rgba(252,238,10,0.7)]">{t.splash_title}</span>
          </h1>
        </div>

        <div className="h-[2px] w-32 bg-[var(--accent-pink)] mx-auto my-2 shadow-[0_0_10px_var(--accent-pink)]"></div>

        {/* Subtitle / Operator Name */}
        <div className="min-h-[32px] flex items-center justify-center mb-4">
          <p className="text-base sm:text-xl font-mono text-[var(--accent-cyan)] uppercase font-bold tracking-widest drop-shadow-[0_0_8px_rgba(0,243,255,0.4)]">
            {t.splash_operator}
          </p>
        </div>

        {/* Interactive Voice Unlock & Call-to-Action Banner */}
        <div 
          className={`mb-4 p-3.5 rounded clip-corner transition-all duration-500 border-2 flex flex-col sm:flex-row items-center justify-between gap-3 ${
            !hasInteracted 
              ? 'bg-[var(--accent-yellow)]/20 border-[var(--accent-yellow)] animate-pulse shadow-[0_0_30px_rgba(252,238,10,0.75),inset_0_0_20px_rgba(252,238,10,0.25)]' 
              : 'bg-[var(--accent-cyan)]/15 border-[var(--accent-cyan)] shadow-[0_0_25px_rgba(0,243,255,0.65),inset_0_0_18px_rgba(0,243,255,0.2)]'
          }`}
        >
          <div className="flex items-center gap-3.5 text-left">
            <div className={`relative flex items-center justify-center w-9 h-9 rounded-full bg-[#03141e] border-2 shrink-0 transition-all duration-300 ${
              !hasInteracted 
                ? 'border-[var(--accent-yellow)] text-[var(--accent-yellow)] shadow-[0_0_18px_rgba(252,238,10,0.9)]' 
                : 'border-[var(--accent-cyan)] text-[var(--accent-cyan)] shadow-[0_0_18px_rgba(0,243,255,0.9)]'
            }`}>
              <i className={`fas ${!hasInteracted ? 'fa-volume-xmark text-lg animate-bounce' : 'fa-volume-high text-lg'}`}></i>
            </div>
            <div>
              <div className={`text-xs sm:text-sm font-mono font-black tracking-wider uppercase drop-shadow-[0_0_10px_currentColor] ${
                !hasInteracted ? 'text-[var(--accent-yellow)]' : 'text-[var(--accent-cyan)]'
              }`}>
                {!hasInteracted ? '⚡ TAP ANYWHERE TO UNLOCK VOICE ASSISTANT' : '🔊 VOICE AI ASSISTANT ONLINE'}
              </div>
              <div className="text-[11px] font-mono text-white font-medium opacity-90 drop-shadow-[0_0_5px_rgba(255,255,255,0.4)]">
                {!hasInteracted ? 'Click any language button below to activate instant speech' : 'Language set. Audio voice initialized.'}
              </div>
            </div>
          </div>

          {/* Cyber Equalizer Bars with Neon Glow */}
          <div className="flex items-end gap-1.5 h-6 px-2 shrink-0">
            <span className={`w-1.5 bg-[var(--accent-cyan)] rounded-t transition-all drop-shadow-[0_0_8px_rgba(0,243,255,0.9)] ${!hasInteracted ? 'h-2 animate-pulse' : 'h-5 animate-bounce'}`} style={{ animationDelay: '0.1s' }}></span>
            <span className={`w-1.5 bg-[var(--accent-yellow)] rounded-t transition-all drop-shadow-[0_0_8px_rgba(252,238,10,0.9)] ${!hasInteracted ? 'h-4 animate-pulse' : 'h-6 animate-bounce'}`} style={{ animationDelay: '0.3s' }}></span>
            <span className={`w-1.5 bg-[var(--accent-pink)] rounded-t transition-all drop-shadow-[0_0_8px_rgba(255,0,60,0.9)] ${!hasInteracted ? 'h-2 animate-pulse' : 'h-4 animate-bounce'}`} style={{ animationDelay: '0.2s' }}></span>
            <span className={`w-1.5 bg-[var(--accent-cyan)] rounded-t transition-all drop-shadow-[0_0_8px_rgba(0,243,255,0.9)] ${!hasInteracted ? 'h-3 animate-pulse' : 'h-5 animate-bounce'}`} style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>

        {/* Cyber Language Selection Bar */}
        <div className={`mb-5 bg-[var(--bg-primary)] p-3 border clip-corner transition-all duration-300 ${!hasInteracted ? 'border-[var(--accent-yellow)] shadow-[0_0_20px_rgba(252,238,10,0.3)]' : 'border-[var(--border-dim)]'}`}>
          <div className="text-[11px] font-mono text-[var(--accent-yellow)] uppercase tracking-widest mb-2 font-bold flex flex-wrap items-center justify-center gap-2">
            <i className="fas fa-hand-pointer text-[var(--accent-cyan)] animate-bounce"></i>
            <span>{t.splash_select_lang}</span>
            {!hasInteracted && (
              <span className="bg-[var(--accent-yellow)] text-black text-[9px] px-2 py-0.5 font-bold uppercase clip-corner animate-pulse">
                TAP TO START
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 max-h-28 overflow-y-auto custom-scrollbar p-1">
            {languageOptions.map((opt) => {
              const isSelected = currentLang === opt.code;

              return (
                <button
                  key={opt.code}
                  onClick={(e) => handleLangChange(e, opt.code)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-all clip-corner flex items-center gap-1.5 border-2 ${
                    isSelected
                      ? 'bg-[var(--accent-cyan)] text-black border-[var(--accent-cyan)] shadow-[0_0_15px_var(--accent-cyan)] scale-105'
                      : 'bg-[var(--bg-secondary)] border-[var(--border-dim)] text-[var(--text-secondary)] hover:bg-[var(--accent-yellow)] hover:text-black hover:border-[var(--accent-yellow)] hover:shadow-[0_0_15px_rgba(252,238,10,0.7)]'
                  }`}
                >
                  <span>{opt.nativeName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Connect Button */}
        <button
          onClick={handleEnterClick}
          className="relative inline-flex items-center gap-3 bg-[var(--accent-cyan)] text-black font-extrabold text-base md:text-xl px-10 py-4 uppercase font-mono tracking-widest clip-corner hover:bg-[var(--accent-yellow)] transition-all duration-300 shadow-[0_0_30px_rgba(0,243,255,0.6)] hover:shadow-[0_0_40px_rgba(252,238,10,0.9)] group hover:scale-105"
        >
          <i className="fas fa-brain text-xl group-hover:rotate-12 transition-transform"></i>
          <span>{t.splash_btn_initialize}</span>
          <i className="fas fa-chevron-right text-sm"></i>
        </button>

        {/* Footer Hint */}
        <p className="mt-4 text-xs font-mono text-[var(--text-muted)] tracking-wider flex items-center justify-center gap-2">
          <i className="fas fa-volume-high text-[var(--accent-cyan)] animate-pulse"></i>
          <span>{t.splash_auth_required}</span>
        </p>
      </div>
    </div>
  );
};

export default IntroSplash;
