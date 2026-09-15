import React from 'react';
import { playClick, playHover } from '../utils/audioFx';

interface CardProps {
  tag: string;
  title: string;
  description: string;
  borderColor?: string;
  metric?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ tag, title, description, borderColor, metric, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      playClick();
      onClick();
    }
  };

  return (
    <div 
      onClick={handleClick}
      onMouseEnter={playHover}
      className={`bg-[var(--bg-secondary)] p-8 border border-[var(--border-dim)] clip-corner relative transition-all duration-200 group hover:bg-[var(--accent-yellow)] hover:border-[var(--accent-yellow)] hover:-translate-y-1 ${
        onClick ? 'cursor-pointer' : ''
      }`}
      style={borderColor ? { borderTopColor: borderColor, borderTopWidth: '3px' } : {}}
    >
      <div className="flex justify-between items-start mb-4">
        <span className="text-[var(--accent-cyan)] text-xs font-bold uppercase tracking-widest transition-colors duration-200 group-hover:text-black font-mono">
          // {tag}
        </span>
        <div className="flex items-center gap-2">
          {metric && (
            <span className="text-xs font-mono font-bold bg-[var(--bg-primary)] px-2 py-0.5 border border-[var(--accent-cyan)] text-[var(--accent-cyan)] group-hover:bg-black group-hover:text-[var(--accent-yellow)] group-hover:border-black transition-colors">
              {metric}
            </span>
          )}
          <i className="fas fa-microchip text-[var(--border-dim)] group-hover:text-black opacity-40 text-xl"></i>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-[var(--text-primary)] uppercase leading-tight group-hover:text-black transition-colors duration-200">
        {title}
      </h3>
      
      <p className="text-[var(--text-secondary)] leading-relaxed transition-colors duration-200 group-hover:text-black group-hover:font-medium text-sm md:text-base">
        {description}
      </p>

      {onClick && (
        <div className="mt-4 flex items-center gap-1 text-xs font-mono font-bold text-[var(--accent-cyan)] group-hover:text-black uppercase tracking-wider">
          <span>Inspect Spec</span>
          <i className="fas fa-arrow-right transition-transform group-hover:translate-x-1"></i>
        </div>
      )}
      
      {/* Decorative corner accent */}
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[var(--accent-cyan)] clip-corner-top-right group-hover:bg-black"></div>
    </div>
  );
};

export default Card;