import React from 'react';
import { playClick, playHover } from '../utils/audioFx';
import { Language, translations } from '../utils/translations';

interface NavbarProps {
  lang: Language;
  isOpen: boolean;
  toggleMenu: () => void;
  onOpenTerminal?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, isOpen, toggleMenu, onOpenTerminal }) => {
  const t = translations[lang] || translations.en;

  const navItems = [
    { id: 'home', label: t.nav_home },
    { id: 'about', label: t.nav_about },
    { id: 'skills', label: t.nav_skills },
    { id: 'timeline', label: t.nav_timeline },
    { id: 'certifications', label: t.nav_certs },
    { id: 'resume', label: t.nav_resume },
    { id: 'projects', label: t.nav_projects },
    { id: 'innovations', label: t.nav_innovations },
    { id: 'contact', label: t.nav_contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    playClick();
    toggleMenu();
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full h-full bg-[var(--bg-overlay)] z-[1500] flex flex-col justify-center items-center transition-transform duration-300 border-r-4 border-[var(--accent-yellow)] backdrop-blur-md ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-[var(--accent-cyan)] animate-pulse"></div>
      
      <div className="flex flex-col items-center max-h-[85vh] overflow-y-auto py-6">
        {navItems.map((item, index) => (
          <a 
            key={item.id}
            href={`#${item.id}`} 
            onClick={(e) => handleNavClick(e, item.id)}
            onMouseEnter={playHover}
            className="relative text-2xl md:text-4xl text-[var(--text-primary)] no-underline my-3 uppercase font-black hover:text-[var(--accent-yellow)] transition-all duration-200 cursor-pointer group tracking-tighter"
            style={{ transitionDelay: `${index * 40}ms` }}
          >
            <span className="text-[var(--accent-cyan)] text-sm absolute -left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <i className="fas fa-chevron-right"></i>
            </span>
            {item.label}
            <div className="h-[2px] w-0 bg-[var(--accent-yellow)] transition-all duration-300 group-hover:w-full"></div>
          </a>
        ))}

        {onOpenTerminal && (
          <button
            onClick={() => {
              playClick();
              toggleMenu();
              onOpenTerminal();
            }}
            onMouseEnter={playHover}
            className="mt-6 border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-wider hover:bg-[var(--accent-cyan)] hover:text-black transition-all clip-corner flex items-center gap-2"
          >
            <i className="fas fa-terminal"></i> {t.btn_terminal}
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;