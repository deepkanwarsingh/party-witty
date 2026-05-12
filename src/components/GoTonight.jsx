import React from 'react';
import zoe_miller from '../assets/Zoe_miller.jpg';

const GoTonight = ({ isOpen, onClose, onMakeMove }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/40 backdrop-blur-[2px] overflow-hidden">
      <div className="bg-[#e5e5e5] rounded-[32px] w-full max-w-[420px] h-full max-h-[95vh] p-5 relative flex flex-col items-center shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 shrink-0"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-4 shrink-0">
          <h2 className="text-[28px] font-bold text-gray-800 leading-tight">
            You chose her
          </h2>

          <p className="text-[14px] font-semibold text-gray-500">
            You're about to send her a{' '}
            <span className="text-[#ff4d94]">special invite</span>
          </p>
        </div>

        <div className="w-full flex-1 min-h-0 rounded-[28px] overflow-hidden relative shadow-xl mb-4">
          <div className="absolute top-4 left-4 bg-black/20 backdrop-blur-[4px] px-3 py-1 rounded-full text-[11px] font-bold text-white flex items-center gap-1.5 z-10">
            <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Causal Fun
          </div>

          <img
            src={zoe_miller}
            alt="Zoe Miller"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-bold">
                Zoe Miller, 22
              </h3>

              <div className="bg-blue-500 rounded-full w-4 h-4 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
              </div>
            </div>

            <p className="text-[12px] font-semibold opacity-90 mb-3">
              4 Mutual Mates
            </p>

            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold border border-white/20 whitespace-nowrap">
                Bollywood Nights
              </span>

              <span className="bg-white/10 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold border border-white/20 whitespace-nowrap">
                Chill Crowd
              </span>

              <span className="bg-white/10 backdrop-blur-[8px] px-3 py-1.5 rounded-full text-[10px] font-bold border border-white/20 whitespace-nowrap">
                Party Regular
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={onMakeMove}
          className="w-full py-3.5 rounded-full bg-linear-to-r from-[#aa3bff] to-[#ff4d94] text-white font-bold text-base shadow-[0_8px_20px_rgba(255,77,148,0.3)] hover:scale-[1.02] transition-all active:scale-95 mb-3 shrink-0"
        >
          Make Your Move
        </button>

        <p className="text-[14px] font-bold text-gray-500 shrink-0">
          Add a drink to introduce yourself
        </p>
      </div>
    </div>
  );
};

export default GoTonight;