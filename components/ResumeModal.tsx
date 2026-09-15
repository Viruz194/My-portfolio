import React from 'react';
import { playClick } from '../utils/audioFx';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  if (!isOpen) return null;

  const resumeUrl = '/Koushik_TS_Resume.pdf';

  const handleView = () => {
    playClick();
    onShowToast('Opening Resume Preview protocol...', 'info');
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = () => {
    playClick();
    onShowToast('Initiating Resume PDF download...', 'success');
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Koushik_TS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-[6000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-pulse-once">
      <div 
        className="relative w-full max-w-xl bg-[var(--bg-secondary)] border-2 border-[var(--accent-yellow)] p-6 clip-corner shadow-[0_0_50px_rgba(252,238,10,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-dim)] pb-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--accent-yellow)] text-black font-bold flex items-center justify-center clip-corner">
              <i className="fas fa-file-pdf text-xl"></i>
            </div>
            <div>
              <h3 className="font-black text-xl text-[var(--text-primary)] uppercase tracking-wider font-mono">
                KOUSHIK_TS_RESUME.PDF
              </h3>
              <p className="text-xs text-[var(--accent-cyan)] font-mono">
                // PRINCIPAL ENGINEER • 10+ YRS INDUSTRIAL EXPERTISE
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="text-[var(--text-muted)] hover:text-[var(--accent-pink)] text-2xl transition-colors px-2"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Quick Highlights Preview */}
        <div className="bg-[var(--bg-primary)] border border-[var(--border-dim)] p-4 clip-corner mb-6 font-mono text-xs text-[var(--text-secondary)] space-y-2">
          <div className="text-[var(--accent-yellow)] font-bold uppercase tracking-widest text-[11px] flex items-center gap-2">
            <i className="fas fa-check-circle text-[var(--accent-cyan)]"></i> RESUME HIGHLIGHTS AT A GLANCE
          </div>
          <p className="text-[var(--text-primary)] leading-relaxed">
            <strong>AceMicromatic MIT</strong> — Principal Engineer leading Industrial Digital Transformation across MES, Traceability, OEE, SPC, TPM, IIoT, and China On-Site Deployment (Sundram Fasteners / TVS).
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] px-2 py-0.5 text-[var(--accent-cyan)] text-[10px]">⚙️ MES & Traceability</span>
            <span className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] px-2 py-0.5 text-[var(--accent-yellow)] text-[10px]">📊 OEE & Predictive Analytics</span>
            <span className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] px-2 py-0.5 text-[var(--accent-pink)] text-[10px]">🏭 China Deployment (TVS)</span>
          </div>
        </div>

        {/* Action Buttons: View & Download */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={handleView}
            className="w-full bg-[var(--accent-cyan)] text-black py-3.5 px-4 font-bold font-mono uppercase tracking-wider hover:brightness-110 transition-all clip-corner flex items-center justify-center gap-2.5 shadow-[0_0_15px_rgba(0,243,255,0.3)]"
          >
            <i className="fas fa-eye text-lg"></i>
            <span>VIEW RESUME (PDF)</span>
          </button>

          <button
            onClick={handleDownload}
            className="w-full bg-[var(--accent-yellow)] text-black py-3.5 px-4 font-bold font-mono uppercase tracking-wider hover:brightness-110 transition-all clip-corner flex items-center justify-center gap-2.5 shadow-[0_0_15px_rgba(252,238,10,0.3)]"
          >
            <i className="fas fa-file-download text-lg"></i>
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-4 text-center">
          <span className="text-[10px] font-mono text-[var(--text-muted)]">
            * Direct PDF download & browser viewing available • File size: ~250 KB
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
