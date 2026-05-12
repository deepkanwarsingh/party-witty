import React from 'react';

const Verification3 = ({ isOpen, onClose, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-[#e5e5e5] rounded-[32px] w-full max-w-[680px] p-12 relative flex flex-col items-center shadow-2xl overflow-hidden">
        
        {/* Floating Background Glows */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>

        {/* Illustration Section */}
        <div className="relative mb-10">
          {/* Glowing Rings */}
          <div className="absolute inset-0 scale-[1.4] opacity-20">
            <div className="absolute inset-0 border-2 border-white rounded-full animate-ping"></div>
          </div>
          
          <div className="relative w-48 h-48">
            {/* Avatar Circle */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative">
                <div className="w-full h-full bg-gradient-to-br from-[#1a4a4a] to-[#2d5a5a] flex items-center justify-center">
                    {/* Placeholder for verified avatar icon/image */}
                    <div className="w-32 h-32 bg-gray-900/30 rounded-full flex flex-col items-center justify-center relative overflow-hidden">
                        <div className="w-16 h-16 bg-white/20 rounded-full mb-2"></div>
                        <div className="w-24 h-12 bg-white/10 rounded-t-full"></div>
                        
                        {/* Black bar with VERIFIED text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black px-4 py-1 rounded text-[8px] font-black text-white tracking-[0.2em] z-10 border border-white/20">
                            VERIFIED
                        </div>
                    </div>
                </div>

                {/* Green VERIFIED Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#16a34a] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg border border-white/20">
                    <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" width="10" height="10" fill="#16a34a">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                        </svg>
                    </div>
                    <span className="text-white text-[11px] font-black tracking-widest">VERIFIED</span>
                </div>
            </div>

            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#a78bfa] rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                </svg>
            </div>
            <div className="absolute -bottom-2 -left-6 w-10 h-10 bg-[#a78bfa] rounded-full flex items-center justify-center shadow-lg -rotate-12">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center mb-8">
          <h2 className="text-[48px] font-bold text-gray-800 mb-2 leading-tight">You're verified</h2>
          <p className="text-[18px] font-semibold text-gray-500">
            No fake vibes here. You're almost in
          </p>
        </div>

        {/* Identity Match Section */}
        <div className="w-full max-w-[420px] flex flex-col items-center gap-3 mb-10">
            {/* Progress Bar Container */}
            <div className="w-full h-2.5 bg-gray-300 rounded-full overflow-hidden relative">
                <div 
                    className="absolute inset-y-0 left-0 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-full transition-all duration-1000"
                    style={{ width: '98.4%' }}
                ></div>
            </div>
            <span className="text-[12px] font-black text-gray-500 tracking-[0.15em] uppercase">
                IDENTITY MATCH 98.4%
            </span>
        </div>

        {/* Action Button */}
        <button 
          onClick={onNext}
          className="w-full max-w-[420px] py-4.5 rounded-[24px] bg-[#7c3aed] text-white font-bold text-xl shadow-[0_10px_30px_rgba(124,58,237,0.3)] hover:bg-[#6d28d9] hover:scale-[1.02] transition-all active:scale-95 mb-6"
        >
          Go to Dashboard
        </button>

        <p className="text-[14px] font-bold text-gray-400">
          No fake vibes here. You're almost in
        </p>
      </div>
    </div>
  );
};

export default Verification3;
