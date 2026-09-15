import React, { useState } from 'react';
import { playClick } from '../utils/audioFx';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string, type: 'info' | 'success' | 'warning' | 'terminal') => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onShowToast }) => {
  const [activeTab, setActiveTab] = useState<'document' | 'pdf'>('document');

  if (!isOpen) return null;

  const resumeUrl = '/Koushik_TS_Resume.pdf';

  const handleViewPdf = () => {
    playClick();
    onShowToast('Opening Resume PDF in browser viewer...', 'info');
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadPdf = () => {
    playClick();
    onShowToast('Downloading Koushik_TS_Resume.pdf...', 'success');
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Koushik_TS_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div 
      className="fixed inset-0 z-[6000] flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-pulse-once"
      onClick={() => {
        playClick();
        onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[var(--bg-secondary)] border-2 border-[var(--accent-yellow)] p-3 sm:p-6 clip-corner shadow-[0_0_50px_rgba(252,238,10,0.3)] my-auto transition-colors duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-[var(--border-dim)] pb-3 mb-3 shrink-0 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--accent-yellow)] text-black font-bold flex items-center justify-center clip-corner shrink-0">
              <i className="fas fa-file-pdf text-lg"></i>
            </div>
            <div>
              <h3 className="font-black text-base sm:text-xl text-[var(--text-primary)] uppercase tracking-wider font-mono">
                KOUSHIK T S — RESUME PROTOCOL
              </h3>
              <p className="text-[11px] sm:text-xs text-[var(--accent-cyan)] font-mono">
                PRINCIPAL ENGINEER | REGIONAL LEAD | MES | IIoT
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleViewPdf}
              className="bg-[var(--accent-cyan)] text-black px-3 py-1.5 text-xs font-mono font-bold uppercase clip-corner hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(0,243,255,0.4)]"
              title="Open PDF in new browser tab"
            >
              <i className="fas fa-external-link-alt"></i>
              <span className="hidden sm:inline">VIEW PDF</span>
            </button>

            <button
              onClick={handleDownloadPdf}
              className="bg-[var(--accent-yellow)] text-black px-3 py-1.5 text-xs font-mono font-bold uppercase clip-corner hover:brightness-110 transition-all flex items-center gap-1.5 shadow-[0_0_10px_rgba(252,238,10,0.4)]"
              title="Download PDF File"
            >
              <i className="fas fa-download"></i>
              <span className="hidden sm:inline">DOWNLOAD PDF</span>
            </button>

            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="text-[var(--text-muted)] hover:text-[var(--accent-pink)] text-2xl transition-colors px-2 ml-1"
              aria-label="Close modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

        {/* Tab Toggle Bar */}
        <div className="flex items-center gap-2 mb-3 shrink-0 border-b border-[var(--border-dim)] pb-2">
          <button
            onClick={() => {
              playClick();
              setActiveTab('document');
            }}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase clip-corner flex items-center gap-2 transition-all ${
              activeTab === 'document'
                ? 'bg-[var(--accent-yellow)] text-black font-extrabold shadow-[0_0_10px_rgba(252,238,10,0.5)]'
                : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-dim)] hover:text-[var(--text-primary)]'
            }`}
          >
            <i className="fas fa-file-alt"></i>
            <span>INTERACTIVE RESUME READER</span>
          </button>

          <button
            onClick={() => {
              playClick();
              setActiveTab('pdf');
            }}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase clip-corner flex items-center gap-2 transition-all ${
              activeTab === 'pdf'
                ? 'bg-[var(--accent-cyan)] text-black font-extrabold shadow-[0_0_10px_rgba(0,243,255,0.5)]'
                : 'bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-dim)] hover:text-[var(--text-primary)]'
            }`}
          >
            <i className="fas fa-file-pdf"></i>
            <span>PDF ACTIONS & FILE INFO</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto custom-scrollbar flex-grow pr-1 space-y-4 text-xs sm:text-sm text-[var(--text-primary)]">
          {activeTab === 'document' ? (
            <div className="bg-[var(--bg-primary)] border border-[var(--border-dim)] p-4 sm:p-6 clip-corner space-y-6 font-sans">
              {/* Document Header */}
              <div className="text-center border-b border-[var(--border-dim)] pb-4 space-y-1">
                <h1 className="text-2xl sm:text-3xl font-black uppercase text-[var(--accent-yellow)] tracking-wider">
                  KOUSHIK T S
                </h1>
                <p className="text-xs sm:text-sm font-bold text-[var(--accent-cyan)] uppercase font-mono">
                  PRINCIPAL ENGINEER | REGIONAL LEAD | MES | INDUSTRIAL IoT | DIGITAL MANUFACTURING
                </p>
                <div className="text-xs text-[var(--text-secondary)] font-mono flex flex-wrap justify-center gap-3 pt-1">
                  <span>📍 Bengaluru, Karnataka, India</span>
                  <span>📞 797-515-4267</span>
                  <span>✉️ koushikts@outlook.com</span>
                </div>
                <div className="flex justify-center gap-4 text-xs font-mono pt-1 text-[var(--accent-cyan)]">
                  <a href="https://linkedin.com/in/koushikts" target="_blank" rel="noreferrer" className="hover:underline">🔗 LinkedIn</a>
                  <a href="https://github.com/Viruz194" target="_blank" rel="noreferrer" className="hover:underline">💻 GitHub</a>
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-yellow)] border-b border-[var(--accent-yellow)]/40 pb-1 mb-2">
                  // PROFESSIONAL SUMMARY
                </h2>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)]">
                  Principal Engineer and Regional Lead with <strong>10+ years of experience</strong> delivering Industrial IoT (IIoT), Manufacturing Execution Systems (MES), Traceability, OEE, SPC, TPM, Tool Life Monitoring, and Smart Manufacturing solutions. Experienced in end-to-end solution delivery covering pre-sales, customer requirement analysis, solution design, application development, UI/screen development, machine integration, installation, commissioning, testing, deployment, training, and post-implementation support.
                </p>
                <p className="text-xs sm:text-sm leading-relaxed text-[var(--text-secondary)] mt-2">
                  Strong customer-facing and project execution experience with <strong>international exposure in China</strong>, including full-plant MES and Traceability implementation at <strong>Sundram Fasteners (Zhejiang) Limited (TVS)</strong>, legacy-machine integration, production deployment, technical coordination, and ongoing customer account management.
                </p>
              </div>

              {/* Core Competencies */}
              <div>
                <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-cyan)] border-b border-[var(--accent-cyan)]/40 pb-1 mb-2">
                  // CORE COMPETENCIES
                </h2>
                <div className="flex flex-wrap gap-1.5 text-[11px] sm:text-xs">
                  {[
                    'Manufacturing Execution Systems (MES)', 'Industrial IoT (IIoT)', 'Digital Manufacturing', 'Smart Manufacturing',
                    'Traceability', 'Overall Equipment Effectiveness (OEE)', 'Statistical Process Control (SPC)', 'Total Productive Maintenance (TPM)',
                    'Tool Life Monitoring', 'Machine Integration', 'Legacy Machine Integration', 'Pre-Sales Engineering', 'Solution Design',
                    'Requirement Analysis', 'Application Development', 'UI / Screen Development', 'Project Execution', 'Installation & Commissioning',
                    'Application Testing', 'Troubleshooting', 'Customer Management', 'Technical Presentations', 'Product Demonstrations'
                  ].map((skill, idx) => (
                    <span key={idx} className="bg-[var(--bg-secondary)] border border-[var(--border-dim)] px-2.5 py-1 text-[var(--text-primary)] rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h2 className="text-xs sm:text-sm font-mono font-bold uppercase tracking-widest text-[var(--accent-pink)] border-b border-[var(--accent-pink)]/40 pb-1 mb-3">
                  // PROFESSIONAL EXPERIENCE
                </h2>

                <div className="space-y-4">
                  {/* Company 1 */}
                  <div className="bg-[var(--bg-secondary)] p-3.5 border border-[var(--border-dim)] clip-corner space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-1">
                      <div>
                        <h3 className="font-bold text-sm text-[var(--text-primary)]">
                          AceMicromatic Manufacturing Intelligence Technologies Pvt. Ltd. (Ace Micromatic Group)
                        </h3>
                        <p className="text-xs text-[var(--accent-yellow)] font-mono">Bengaluru, India • June 2016 – Present (10 yrs 4 mos)</p>
                      </div>
                    </div>

                    <div className="pl-3 border-l-2 border-[var(--accent-cyan)] space-y-3 pt-1">
                      <div>
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-bold text-xs sm:text-sm text-[var(--accent-cyan)]">Principal Engineer - Regional Lead</h4>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">June 2026 – Present</span>
                        </div>
                        <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1 mt-1">
                          <li>Lead end-to-end Industrial Digital Transformation initiatives covering MES, Traceability, OEE, SPC, TPM, Tool Life Monitoring, and Industrial IoT.</li>
                          <li>Manage complete solution lifecycle from pre-sales, requirement analysis, solution ideation, application/UI development, to project handover.</li>
                          <li>Translate shop-floor manufacturing requirements into deployable software, application, and machine-integration solutions.</li>
                          <li>Continue account ownership of Sundram Fasteners (Zhejiang) Limited, China for MES, Traceability, and technical coordination.</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-bold text-xs sm:text-sm text-[var(--accent-pink)]">Senior Application Engineer - China Project Assignment</h4>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">October 2024 – May 2026</span>
                        </div>
                        <ul className="list-disc list-inside text-xs text-[var(--text-secondary)] space-y-1 mt-1">
                          <li>Took onsite responsibility in China for full-plant MES and Traceability implementation at Sundram Fasteners (Zhejiang) Limited (TVS).</li>
                          <li>Executed application installation, commissioning, production deployment, and legacy machine integration.</li>
                          <li>Ensured part traceability for commercial and professional vehicle components from raw material through to packing stage.</li>
                        </ul>
                      </div>

                      <div>
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-bold text-xs text-[var(--text-primary)]">Senior Application Engineer</h4>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">June 2022 – September 2024</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">Managed project execution, customer requirements, pre-sales engineering, and application support for IIoT software projects.</p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-bold text-xs text-[var(--text-primary)]">Application Engineer / Junior Application Engineer</h4>
                          <span className="text-[10px] font-mono text-[var(--text-muted)]">June 2016 – May 2022</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">Executed installation, commissioning, machine connectivity, and customer training for IIoT, OEE, and manufacturing software.</p>
                      </div>
                    </div>
                  </div>

                  {/* Company 2 */}
                  <div className="bg-[var(--bg-secondary)] p-3.5 border border-[var(--border-dim)] clip-corner space-y-1">
                    <div className="flex justify-between items-start flex-wrap">
                      <div>
                        <h3 className="font-bold text-sm text-[var(--text-primary)]">Bosch Ltd., Adugodi / Bidadi</h3>
                        <p className="text-xs text-[var(--accent-yellow)] font-mono">Technical Apprentice - Electronic Mechanic • March 2014 – April 2016</p>
                      </div>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">Completed National Trade Apprenticeship in-plant training on SPC machines, conveyors, PLC machines, electrical schematics, and drive systems.</p>
                  </div>
                </div>
              </div>

              {/* Education & Languages */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--bg-secondary)] p-3.5 border border-[var(--border-dim)] clip-corner space-y-2">
                  <h3 className="font-mono text-xs font-bold uppercase text-[var(--accent-yellow)]">// EDUCATION</h3>
                  <div className="text-xs space-y-1">
                    <div>
                      <strong className="text-[var(--text-primary)]">B.C.A. - Data Science & Data Analytics</strong>
                      <div className="text-[11px] text-[var(--text-secondary)]">Visvesvaraya Technological University (Expected 2028)</div>
                    </div>
                    <div className="pt-1">
                      <strong className="text-[var(--text-primary)]">Diploma - Electrical, Electronics & Communication</strong>
                      <div className="text-[11px] text-[var(--text-secondary)]">The Oxford Evening Polytechnic (2017 – 2022)</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--bg-secondary)] p-3.5 border border-[var(--border-dim)] clip-corner space-y-2">
                  <h3 className="font-mono text-xs font-bold uppercase text-[var(--accent-cyan)]">// LANGUAGES</h3>
                  <div className="text-xs text-[var(--text-secondary)] space-y-1 font-mono">
                    <div>• <strong>Kannada</strong>: Advanced (Native)</div>
                    <div>• <strong>English</strong>: Very Good</div>
                    <div>• <strong>Tamil</strong>: Good</div>
                    <div>• <strong>Hindi</strong>: Average</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* PDF Tab */
            <div className="space-y-4">
              <div className="bg-[var(--bg-primary)] border border-[var(--border-dim)] p-6 clip-corner text-center space-y-4">
                <i className="fas fa-file-pdf text-5xl text-[var(--accent-yellow)] animate-pulse"></i>
                <div>
                  <h4 className="font-bold text-base text-[var(--text-primary)] font-mono uppercase">
                    OFFICIAL RESUME FILE ATTACHED
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] mt-1 font-mono">
                    Filename: <strong className="text-[var(--accent-cyan)]">Koushik_TS_Resume.pdf</strong> • Format: High-Resolution PDF
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-2">
                  <button
                    onClick={handleViewPdf}
                    className="bg-[var(--accent-cyan)] text-black py-3.5 px-4 font-bold font-mono uppercase tracking-wider hover:brightness-110 transition-all clip-corner flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,243,255,0.4)]"
                  >
                    <i className="fas fa-eye text-lg"></i>
                    <span>VIEW IN BROWSER</span>
                  </button>

                  <button
                    onClick={handleDownloadPdf}
                    className="bg-[var(--accent-yellow)] text-black py-3.5 px-4 font-bold font-mono uppercase tracking-wider hover:brightness-110 transition-all clip-corner flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(252,238,10,0.4)]"
                  >
                    <i className="fas fa-download text-lg"></i>
                    <span>DOWNLOAD FILE</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
