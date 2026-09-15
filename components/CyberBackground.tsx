import React from 'react';

const CyberBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300">
       {/* Primary Fixed Grid */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-40"></div>
      
      {/* Secondary Moving Grid - Adds depth */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-20 scale-150 animate-pulse origin-center"></div>

      {/* Radial fade to background color */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--bg-primary)_90%)] z-0 transition-colors duration-300"></div>
      
      {/* Moving Cyber Lines - Horizontal */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-40 animate-scan-slow"></div>
      <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-pink)] to-transparent opacity-30 animate-scan-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

      {/* Moving Cyber Lines - Vertical */}
      <div className="absolute top-0 left-1/4 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--accent-cyan)] to-transparent opacity-30 animate-scan-vertical"></div>
      <div className="absolute top-0 right-1/4 h-full w-[1px] bg-gradient-to-b from-transparent via-[var(--accent-yellow)] to-transparent opacity-20 animate-scan-vertical" style={{ animationDelay: '2s', animationDuration: '12s' }}></div>

      {/* Random Data Particles */}
      <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-[var(--accent-yellow)] shadow-[0_0_5px_var(--accent-yellow)] animate-ping opacity-50"></div>
      <div className="absolute bottom-[20%] right-[15%] w-1 h-1 bg-[var(--accent-pink)] shadow-[0_0_5px_var(--accent-pink)] animate-ping opacity-50" style={{ animationDelay: '1s' }}></div>

      {/* Tech Markers - Fixed corners */}
      <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-[var(--accent-pink)] opacity-20 hidden md:block transition-colors duration-300"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border-b-2 border-l-2 border-[var(--accent-cyan)] opacity-20 hidden md:block transition-colors duration-300"></div>
      
      {/* Decorative Crosshairs */}
      <div className="absolute top-1/2 left-10 w-4 h-4 text-[var(--border-dim)] flex items-center justify-center opacity-50 hidden md:flex">
         <div className="w-full h-[1px] bg-current absolute"></div>
         <div className="h-full w-[1px] bg-current absolute"></div>
      </div>
      <div className="absolute top-1/2 right-10 w-4 h-4 text-[var(--border-dim)] flex items-center justify-center opacity-50 hidden md:flex">
         <div className="w-full h-[1px] bg-current absolute"></div>
         <div className="h-full w-[1px] bg-current absolute"></div>
      </div>
    </div>
  );
};

export default CyberBackground;