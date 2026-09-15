import React, { useEffect } from 'react';
import { playClick } from '../utils/audioFx';

export interface ProjectData {
  tag: string;
  title: string;
  subtitle?: string;
  category: 'deployment' | 'innovation' | 'qa' | 'cnc';
  description: string;
  fullDetails: string;
  metrics?: { label: string; value: string }[];
  technologies?: string[];
  deliverables?: string[];
  borderColor?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const handleModalClose = () => {
    playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[2500] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative bg-[var(--bg-secondary)] border-2 border-[var(--accent-cyan)] max-w-2xl w-full p-6 md:p-8 clip-corner shadow-[0_0_30px_var(--shadow-glow)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Markers */}
        <div className="flex justify-between items-center border-b border-[var(--border-dim)] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[var(--accent-yellow)] inline-block animate-ping"></span>
            <span className="text-[var(--accent-yellow)] text-xs font-mono font-bold tracking-widest uppercase">
              // SPECIFICATION_DATA: {project.tag}
            </span>
          </div>
          <button 
            onClick={handleModalClose}
            className="w-8 h-8 flex items-center justify-center border border-[var(--accent-pink)] text-[var(--accent-pink)] hover:bg-[var(--accent-pink)] hover:text-white transition-all clip-corner-top-right"
            aria-label="Close modal"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Title & Category */}
        <h3 className="text-3xl font-black text-[var(--text-primary)] uppercase tracking-tight mb-2">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="text-[var(--accent-cyan)] font-mono text-sm mb-4">
            {project.subtitle}
          </p>
        )}

        {/* Overview */}
        <div className="bg-[var(--bg-primary)] p-4 border-l-4 border-[var(--accent-yellow)] mb-6 text-[var(--text-primary)] leading-relaxed text-sm md:text-base">
          {project.fullDetails || project.description}
        </div>

        {/* Impact Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-3">
              [KEY_METRICS_&_IMPACT]
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-[var(--bg-primary)] p-3 border border-[var(--border-dim)] clip-corner text-center">
                  <div className="text-xl md:text-2xl font-black text-[var(--accent-yellow)] font-mono">{m.value}</div>
                  <div className="text-xs text-[var(--text-secondary)] uppercase tracking-wider font-mono">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies Used */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-3">
              [CORE_TECH_STACK]
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-[var(--bg-primary)] border border-[var(--accent-cyan)] text-[var(--accent-cyan)] text-xs font-mono uppercase font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Key Deliverables / Highlights */}
        {project.deliverables && project.deliverables.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono mb-3">
              [SYSTEM_DELIVERABLES]
            </h4>
            <ul className="space-y-2">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <i className="fas fa-caret-right text-[var(--accent-pink)] mt-1"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer Action */}
        <div className="pt-4 border-t border-[var(--border-dim)] flex justify-end">
          <button
            onClick={handleModalClose}
            className="bg-[var(--accent-cyan)] text-black px-6 py-2 text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all clip-corner"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
