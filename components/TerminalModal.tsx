import React, { useState, useEffect, useRef } from 'react';
import { playClick, playMatrixSound } from '../utils/audioFx';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <p className="text-[var(--accent-yellow)] font-bold">// KOUSHIK_TS NEURAL CLI [VERSION 3.5.0]</p>
          <p className="text-[var(--text-secondary)]">Type <span className="text-[var(--accent-cyan)] font-bold">help</span> to list available neural sub-routines.</p>
        </div>
      )
    }
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    playClick();

    if (!cmd) return;

    let output: React.ReactNode;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 font-mono text-xs text-[var(--text-secondary)]">
            <p className="text-[var(--accent-cyan)] font-bold">// AVAILABLE PROTOCOLS:</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">bio</span> - Display operator profile & background</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">skills</span> - Print technical stack matrix</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">certs</span> - List verified accreditations & credentials</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">projects</span> - Query global client deployments</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">china-mission</span> - View international project mission logs</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">contact</span> - Retrieve terminal uplink coordinates</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">download-cv</span> - Request latest resume packet</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">matrix</span> - Toggle matrix digital stream mode</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">clear</span> - Flush terminal screen buffer</p>
            <p><span className="text-[var(--accent-yellow)] w-28 inline-block">exit</span> - Close CLI interface</p>
          </div>
        );
        break;

      case 'bio':
        output = (
          <div className="text-xs space-y-1">
            <p className="text-[var(--text-primary)] font-bold">OPERATOR: Koushik TS</p>
            <p className="text-[var(--accent-cyan)]">ROLE: Principal Engineer - Regional Lead (AceMicromatic Group)</p>
            <p className="text-[var(--text-secondary)]">SPECIALIZATION: Industry 4.0, CNC Systems, Data Science & Analytics (BCA)</p>
            <p className="text-[var(--text-muted)]">LOCATION: Bengaluru, Karnataka, India</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[var(--accent-yellow)]">[CNC & INDUSTRY 4.0]: CNC Tuning, PLC Integration, Batch Tracking, FIFO, Auto-Scheduling</p>
            <p className="text-[var(--accent-cyan)]">[DATA SCIENCE & AI]: AI-Assisted Solutions, SQL (Basics 25%), Predictive Maintenance (AI-Built), Dashboards</p>
            <p className="text-[var(--accent-pink)]">[TECH FOUNDATIONS]: C/C++ (Basic 40%), SQL (Basics 25%), Python (BCA Data Science), AI-Assisted Solution Building</p>
            <p className="text-[var(--text-primary)]">[MANAGEMENT]: Scrum Methodologies, On-Site Commissioning, Pre-Sales Architecture</p>
          </div>
        );
        break;

      case 'certs':
      case 'certifications':
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[var(--accent-yellow)] font-bold">// VERIFIED CREDENTIALS & ACCREDITATIONS:</p>
            <p className="text-[var(--accent-cyan)]">1. Industry 4.0 & Smart Factory Specialist (Siemens) [CERT-IND40-89241]</p>
            <p className="text-[var(--accent-cyan)]">2. Industrial Data Science & Predictive Analytics (IBM/VTU) [CERT-DS-99320]</p>
            <p className="text-[var(--accent-pink)]">3. Certified Scrum Master (CSM) (Scrum Alliance) [CERT-CSM-44219]</p>
            <p className="text-[var(--accent-yellow)]">4. Advanced CNC Motion Control & Servo Systems (FANUC) [CERT-CNC-31182]</p>
            <p className="text-[var(--accent-cyan)]">5. Industrial IoT & Cloud Edge Architecture (AWS IoT) [CERT-IIOT-77109]</p>
            <p className="text-[var(--accent-pink)]">6. Lean Manufacturing & Six Sigma Green Belt (ASQ) [CERT-LSSGB-51203]</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-xs space-y-2 font-mono">
            <p className="text-[var(--accent-cyan)]">1. International Missions - 2 Yrs (Ongoing) On-Site Engineering Oversight in China (15+ Clients)</p>
            <p className="text-[var(--accent-yellow)]">2. AmiTpedia - Centralized Wiki & SOP Knowledge Base for Field Service Engineers</p>
            <p className="text-[var(--accent-pink)]">3. FlowState - Real-time Industrial Bottleneck Detection & Alerting Engine</p>
            <p className="text-[var(--text-primary)]">4. AGIS - Autonomous Gravimetric Inventory Sensor System</p>
          </div>
        );
        break;

      case 'china-mission':
        output = (
          <div className="text-xs space-y-1 border-l-2 border-[var(--accent-yellow)] pl-3">
            <p className="text-[var(--accent-yellow)] font-bold">[MISSION LOG: CHINA_DEPLOYMENT]</p>
            <p className="text-[var(--text-primary)]">Duration: 2 Years (Ongoing) On-Site Assignment</p>
            <p className="text-[var(--text-secondary)]">Scope: High-stakes CNC system installations, technical validation, and client training across Tier-1 manufacturing facilities.</p>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[var(--accent-cyan)]">EMAIL: koushikts@outlook.com</p>
            <p className="text-[var(--accent-cyan)]">PHONE: +91 797-515-4267</p>
            <p className="text-[var(--accent-cyan)]">LOCATION: Bengaluru, India</p>
          </div>
        );
        break;

      case 'download-cv':
        output = (
          <p className="text-[var(--accent-yellow)] text-xs">
            [PROTOCOL_TRIGGERED]: Downloading Koushik_TS_Resume.pdf...
          </p>
        );
        onShowToast('Resume download sequence initiated.', 'success');
        break;

      case 'matrix':
        setIsMatrixMode(!isMatrixMode);
        playMatrixSound();
        output = (
          <p className="text-green-400 font-mono text-xs">
            {isMatrixMode ? '[MATRIX_MODE_DEACTIVATED]' : '[MATRIX_MODE_ACTIVATED] Wake up, Neo...'}
          </p>
        );
        onShowToast(isMatrixMode ? 'Matrix visual stream offline' : 'Matrix visual stream online', 'terminal');
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        setInput('');
        return;

      default:
        output = (
          <p className="text-[var(--accent-pink)] text-xs font-mono">
            Command not recognized: "{cmd}". Type <span className="text-[var(--accent-cyan)] underline">help</span> for protocol list.
          </p>
        );
        break;
    }

    setHistory(prev => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-[2800] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        className={`relative bg-[#050811] border-2 border-[var(--accent-cyan)] max-w-3xl w-full h-[500px] flex flex-col clip-corner shadow-[0_0_35px_rgba(0,243,255,0.25)] ${
          isMatrixMode ? 'border-green-500 shadow-[0_0_35px_rgba(34,197,94,0.3)]' : ''
        }`}
      >
        {/* Terminal Header Bar */}
        <div className="bg-[#0b1329] px-4 py-2 flex justify-between items-center border-b border-[var(--accent-cyan)]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[var(--accent-pink)] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--accent-yellow)] inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--accent-cyan)] inline-block"></span>
            <span className="ml-2 font-mono text-xs font-bold text-[var(--accent-cyan)] uppercase tracking-wider">
              bash // koushik-ts@neural-link:~
            </span>
          </div>
          <button 
            onClick={onClose}
            className="text-[var(--text-muted)] hover:text-[var(--accent-pink)] font-mono text-sm px-2"
          >
            [X]
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm space-y-3 custom-scrollbar">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-[var(--accent-yellow)]">
                  <span>koushik-ts@neural:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
              )}
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <form onSubmit={handleCommandSubmit} className="border-t border-[var(--border-dim)] bg-[#070c1a] p-3 flex items-center gap-2">
          <span className="text-[var(--accent-cyan)] font-mono text-sm font-bold">koushik-ts@neural:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-[var(--accent-yellow)] placeholder-[var(--text-muted)]"
          />
          <button type="submit" className="text-xs bg-[var(--accent-cyan)] text-black px-3 py-1 font-bold font-mono uppercase clip-corner">
            Exec
          </button>
        </form>
      </div>
    </div>
  );
};

export default TerminalModal;
