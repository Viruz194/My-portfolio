import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Scanlines from './components/Scanlines';
import CyberBackground from './components/CyberBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Innovations from './components/Innovations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ProjectModal, { ProjectData } from './components/ProjectModal';
import Toast, { ToastMessage } from './components/Toast';
import IntroSplash from './components/IntroSplash';
import LanguageSelector from './components/LanguageSelector';
import { toggleAudio, enableAudio, playClick } from './utils/audioFx';
import { Language } from './utils/translations';

const App: React.FC = () => {
  const [hasEnteredGuild, setHasEnteredGuild] = useState(false);
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'cyberpunk' | 'minimal'>('cyberpunk');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [soundActive, setSoundActive] = useState(true);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const toggleMenu = () => {
    playClick();
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    playClick();
    setTheme(prev => prev === 'cyberpunk' ? 'minimal' : 'cyberpunk');
  };

  const handleToggleSound = () => {
    const newState = toggleAudio();
    setSoundActive(newState);
    showToast(newState ? 'UI Cyber Audio: ONLINE 🔊' : 'UI Cyber Audio: MUTED 🔇', 'info');
  };

  const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'terminal' = 'info') => {
    const newToast: ToastMessage = {
      id: Date.now().toString(),
      type,
      message,
    };
    setToasts(prev => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Keyboard shortcut Ctrl+K to open Terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Force scroll to top on refresh and disable auto scroll restoration
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  const handleEnterGuild = () => {
    enableAudio();
    setSoundActive(true);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    setHasEnteredGuild(true);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'minimal') {
      root.classList.add('minimal-theme');
    } else {
      root.classList.remove('minimal-theme');
    }
  }, [theme]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300`}>
      {/* Intro Welcome Screen */}
      {!hasEnteredGuild && (
        <IntroSplash 
          currentLang={currentLang} 
          onSelectLang={setCurrentLang} 
          onEnter={handleEnterGuild} 
        />
      )}

      {/* Main Background & Effects */}
      <CyberBackground />
      {theme === 'cyberpunk' && <Scanlines />}
      
      {/* Menu Toggle Button */}
      <div 
        className="fixed top-5 left-5 z-[2000] cursor-pointer bg-[var(--accent-cyan)] p-3 clip-polygon-btn hover:brightness-110 transition-all shadow-[0_0_15px_var(--accent-cyan)]"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        title="Toggle Menu"
      >
        <i className="fas fa-bars text-[var(--bg-primary)] text-xl"></i>
      </div>

      {/* Floating Action Controls Top Right */}
      <div className="fixed top-5 right-5 z-[2000] flex items-center gap-3">
        {/* Language Selector Dropdown */}
        <LanguageSelector 
          currentLang={currentLang} 
          onSelectLang={setCurrentLang} 
        />

        {/* Terminal Button */}
        <button
          onClick={() => {
            playClick();
            setIsTerminalOpen(true);
          }}
          className="bg-[var(--accent-yellow)] text-black p-3 clip-polygon-btn hover:brightness-110 transition-all shadow-[0_0_15px_var(--accent-yellow)] font-bold flex items-center justify-center"
          aria-label="Open Terminal CLI"
          title="Open Terminal CLI (Ctrl+K)"
        >
          <i className="fas fa-terminal text-xl"></i>
        </button>

        {/* Sound Toggle Button */}
        <button
          onClick={handleToggleSound}
          className={`p-3 clip-polygon-btn transition-all ${
            soundActive 
              ? 'bg-[var(--accent-cyan)] text-black shadow-[0_0_15px_var(--accent-cyan)]' 
              : 'bg-[var(--bg-secondary)] border border-[var(--border-dim)] text-[var(--text-muted)]'
          }`}
          aria-label="Toggle Audio"
          title={soundActive ? 'Audio Enabled' : 'Audio Muted'}
        >
          <i className={`fas ${soundActive ? 'fa-volume-high' : 'fa-volume-xmark'} text-xl`}></i>
        </button>

        {/* Theme Toggle Button */}
        <div 
          className="cursor-pointer bg-[var(--accent-pink)] p-3 clip-polygon-btn hover:brightness-110 transition-all shadow-[0_0_15px_var(--accent-pink)]"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          title="Toggle Theme"
        >
          <i className={`fas ${theme === 'cyberpunk' ? 'fa-sun' : 'fa-moon'} text-white text-xl`}></i>
        </div>
      </div>

      <Navbar 
        lang={currentLang}
        isOpen={isMenuOpen} 
        toggleMenu={toggleMenu} 
        onOpenTerminal={() => setIsTerminalOpen(true)} 
      />

      <main className="relative z-10">
        <Hero 
          lang={currentLang}
          onOpenTerminal={() => setIsTerminalOpen(true)} 
          onShowToast={showToast}
        />
        <About lang={currentLang} />
        <Skills lang={currentLang} />
        <Timeline lang={currentLang} />
        <Certifications lang={currentLang} onShowToast={showToast} />
        <Resume lang={currentLang} />
        <Projects lang={currentLang} onSelectProject={setSelectedProject} />
        <Innovations lang={currentLang} onSelectProject={setSelectedProject} />
        <Contact lang={currentLang} onShowToast={showToast} />
      </main>

      <Footer lang={currentLang} />

      {/* Modals & Overlay Utilities */}
      <TerminalModal 
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onShowToast={showToast}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast 
        toasts={toasts}
        onClose={removeToast}
      />
    </div>
  );
};

export default App;