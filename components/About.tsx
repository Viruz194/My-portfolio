import React, { useState } from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const [imgError, setImgError] = useState(false);
  const t = translations[lang] || translations.en;

  return (
    <section id="about" className="relative px-[5%] md:px-[10%] py-24 min-h-screen flex flex-col justify-center bg-transparent transition-colors duration-300 overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 items-center relative z-10">

        {/* Image Container - Cyberpunk Style */}
        <div className="relative group">
          {/* Yellow Box Backing */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-[var(--accent-yellow)] bg-transparent -z-10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>

          <div className="relative bg-[var(--bg-secondary)] clip-corner border-2 border-[var(--accent-cyan)] p-2 transition-colors duration-300">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-[var(--accent-yellow)] z-20"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-[var(--accent-yellow)] z-20"></div>

            {!imgError ? (
              <img
                src="profile.jpg"
                onError={() => setImgError(true)}
                alt="Koushik TS"
                className="w-full h-auto object-cover grayscale contrast-125 sepia-[.2] group-hover:grayscale-0 group-hover:sepia-0 transition-all duration-500 min-h-[300px] bg-[var(--bg-primary)]"
              />
            ) : (
              // Fallback UI if image fails
              <div className="w-full h-[400px] bg-[var(--bg-primary)] flex flex-col items-center justify-center text-[var(--accent-pink)] border border-[var(--border-dim)] transition-colors duration-300">
                <i className="fas fa-user-astronaut text-6xl mb-4 opacity-50"></i>
                <span className="font-mono text-xl tracking-widest">IMAGE_NOT_FOUND</span>
                <span className="text-xs text-[var(--text-muted)] mt-2">CHECK_SOURCE_PATH: ./profile.jpg</span>
              </div>
            )}

            {/* Glitch Overlay Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.05)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-screen"></div>

            {/* Label */}
            <div className="absolute bottom-4 left-0 bg-[var(--accent-yellow)] text-black px-4 py-1 font-bold text-xs tracking-widest">
              TARGET_LOCKED
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <span className="h-[2px] w-12 bg-[var(--accent-yellow)]"></span>
            <span className="text-[var(--accent-yellow)] text-sm tracking-[0.2em] font-mono">BIO_ID: 9402</span>
          </div>

          <h2 className="text-5xl md:text-6xl text-[var(--text-primary)] uppercase mb-8 font-bold leading-none relative inline-block transition-colors duration-300">
            {t.about_title}
            <span className="absolute -top-2 -right-2 text-[var(--accent-cyan)] text-lg opacity-80 animate-pulse">●</span>
          </h2>

          <div className="relative border-l-4 border-[var(--accent-yellow)] pl-8 py-2 mb-8 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent transition-colors duration-300">
            <p className="text-xl md:text-2xl text-[var(--text-primary)] italic font-light leading-relaxed transition-colors duration-300">
              {t.about_quote}
            </p>
          </div>

          <div className="grid gap-4 mb-10">
            <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-4 flex items-center gap-4 group hover:border-[var(--accent-cyan)] transition-colors duration-300">
              <div className="text-[var(--accent-yellow)] text-2xl"><i className="fas fa-graduation-cap"></i></div>
              <div>
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider">{t.about_obj_label}</div>
                <div className="text-[var(--text-primary)] font-bold">{t.about_obj_val}</div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-4 flex items-center gap-4 group hover:border-[var(--accent-cyan)] transition-colors duration-300">
              <div className="text-[var(--accent-yellow)] text-2xl"><i className="fas fa-database"></i></div>
              <div>
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider">{t.about_spec_label}</div>
                <div className="text-[var(--text-primary)] font-bold">{t.about_spec_val}</div>
              </div>
            </div>

            <div className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] p-4 flex items-center gap-4 group hover:border-[var(--accent-cyan)] transition-colors duration-300">
              <div className="text-[var(--accent-yellow)] text-2xl"><i className="fas fa-university"></i></div>
              <div>
                <div className="text-[var(--text-muted)] text-xs uppercase tracking-wider">{t.about_origin_label}</div>
                <div className="text-[var(--text-primary)] font-bold">{t.about_origin_val}</div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-[var(--accent-cyan)] font-mono text-sm mr-2">[ESTABLISH_LINK]:</span>
            {[
              { icon: 'fa-github', link: 'https://github.com/Viruz194' },
              { icon: 'fa-linkedin', link: 'https://linkedin.com/in/koushikts' },
              { icon: 'fa-twitter', link: 'https://twitter.com/your-username' },
              { icon: 'fa-instagram', link: 'https://instagram.com/your-username' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="w-10 h-10 flex items-center justify-center border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 clip-corner-top-right"
              >
                <i className={`fab ${social.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;