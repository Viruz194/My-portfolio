import React, { useState } from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface HeroProps {
  lang: Language;
  onOpenTerminal: () => void;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

const Hero: React.FC<HeroProps> = ({ lang, onOpenTerminal, onShowToast }) => {
  const [isInitiating, setIsInitiating] = useState(false);
  const [isContacting, setIsContacting] = useState(false);

  const t = translations[lang] || translations.en;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string, setLoading: (loading: boolean) => void) => {
    e.preventDefault();
    playClick();
    setLoading(true);

    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 300);
  };

  const handleDownloadCV = () => {
    playClick();
    onShowToast('Resume download protocol initiated...', 'success');
  };

  return (
    <section id="home" className="px-[5%] md:px-[10%] py-20 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300 relative">
      <div className="absolute top-1/2 left-10 w-[2px] h-32 bg-[var(--accent-yellow)] hidden md:block"></div>
      
      <div className="flex items-center gap-3 mb-6">
        <span className="inline-block bg-[var(--accent-yellow)] text-black text-xs font-bold px-2.5 py-1 uppercase tracking-widest clip-corner-top-right w-fit">
          // NEURAL_LINK_ESTABLISHED
        </span>
        <span className="text-[var(--accent-cyan)] font-mono text-xs font-bold animate-pulse hidden sm:inline-block">
          SYS_STATUS: ONLINE 🟢
        </span>
      </div>
      
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-[var(--text-primary)] uppercase leading-[0.9] mb-6 tracking-tighter transition-colors duration-300">
        KOUSHIK<span className="text-[var(--accent-yellow)]">_TS</span>
      </h1>
      
      <div className="flex items-center gap-4 mb-8 flex-wrap">
        <div className="h-[2px] flex-grow bg-[var(--border-dim)] max-w-[80px] hidden sm:block"></div>
        <div className="relative text-xl md:text-3xl text-[var(--accent-cyan)] uppercase tracking-[2px] font-bold font-mono px-4 py-2 border-2 border-[var(--accent-cyan)] animate-border-glow bg-[var(--bg-primary)] z-10 transition-colors duration-300">
          {t.hero_role}
        </div>
      </div>
      
      <p className="mt-2 text-[var(--text-secondary)] max-w-[680px] text-lg leading-relaxed border-l-2 border-[var(--accent-pink)] pl-6 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent py-3 transition-colors duration-300">
        {t.hero_desc_1} <strong className="text-[var(--text-primary)] font-extrabold">{t.hero_desc_2}</strong> {t.hero_desc_3} <strong className="text-[var(--accent-yellow)]">{t.hero_desc_4}</strong> {t.hero_desc_5} <strong className="text-[var(--accent-cyan)]">{t.hero_desc_6}</strong> {t.hero_desc_7}
      </p>

      {/* Metric Counters Banner */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-[700px]">
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-3 text-center clip-corner">
          <div className="text-2xl md:text-3xl font-black text-[var(--accent-yellow)] font-mono">10+ YRS</div>
          <div className="text-xs text-[var(--text-muted)] font-mono uppercase">{t.metric_grit}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-3 text-center clip-corner">
          <div className="text-2xl md:text-3xl font-black text-[var(--accent-cyan)] font-mono">2 YRS+</div>
          <div className="text-xs text-[var(--text-muted)] font-mono uppercase">{t.metric_china}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-3 text-center clip-corner">
          <div className="text-2xl md:text-3xl font-black text-[var(--accent-pink)] font-mono">15+</div>
          <div className="text-xs text-[var(--text-muted)] font-mono uppercase">{t.metric_clients}</div>
        </div>
        <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-3 text-center clip-corner">
          <div className="text-2xl md:text-3xl font-black text-[var(--text-primary)] font-mono">BCA</div>
          <div className="text-xs text-[var(--text-muted)] font-mono uppercase">{t.metric_bca}</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-4 items-center">
        <a 
          href="#projects" 
          onClick={(e) => handleNavClick(e, 'projects', setIsInitiating)}
          onMouseEnter={playHover}
          className={`bg-[var(--accent-yellow)] text-black px-8 py-4 font-bold uppercase tracking-widest hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all clip-corner flex items-center gap-2 shadow-[0_0_15px_rgba(252,238,10,0.3)] ${isInitiating ? 'cursor-wait opacity-90' : ''}`}
        >
          {isInitiating ? (
            <>
              <i className="fas fa-cog fa-spin"></i> PROCESSING...
            </>
          ) : (
            <>
              <i className="fas fa-project-diagram"></i> {t.btn_initiate}
            </>
          )}
        </a>

        <button
          onClick={onOpenTerminal}
          onMouseEnter={playHover}
          className="border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] px-6 py-4 font-bold font-mono uppercase tracking-wider hover:bg-[var(--accent-cyan)] hover:text-black transition-all clip-corner flex items-center gap-2 bg-[var(--bg-primary)] shadow-[0_0_15px_rgba(0,243,255,0.2)]"
        >
          <i className="fas fa-terminal"></i> {t.btn_terminal} <span className="text-xs opacity-75 font-normal">[Ctrl+K]</span>
        </button>

        <a 
          href="#contact" 
          onClick={(e) => handleNavClick(e, 'contact', setIsContacting)}
          onMouseEnter={playHover}
          className={`border border-[var(--border-dim)] text-[var(--text-primary)] px-6 py-4 font-bold uppercase tracking-widest hover:border-[var(--accent-pink)] hover:text-[var(--accent-pink)] transition-all clip-corner flex items-center gap-2 ${isContacting ? 'cursor-wait opacity-90' : ''}`}
        >
          {isContacting ? (
            <>
              <i className="fas fa-circle-notch fa-spin"></i> ESTABLISHING...
            </>
          ) : (
            <>
              {t.btn_contact}
            </>
          )}
        </a>

        <button
          onClick={handleDownloadCV}
          onMouseEnter={playHover}
          className="border-2 border-[var(--accent-yellow)] text-[var(--accent-yellow)] bg-[var(--bg-primary)] px-6 py-4 font-bold font-mono uppercase tracking-wider hover:bg-[var(--accent-yellow)] hover:text-black transition-all clip-corner flex items-center gap-2 shadow-[0_0_15px_rgba(252,238,10,0.25)]"
        >
          <i className="fas fa-file-download"></i> {t.btn_download_cv}
        </button>
      </div>
    </section>
  );
};

export default Hero;