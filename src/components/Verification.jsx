import React from 'react';

const Verification = ({ isOpen, onClose, onVerify }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-[#e5e5e5] rounded-[32px] w-full max-w-[680px] p-10 relative flex flex-col items-center shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Illustration Section */}
        <div className="relative mb-10 mt-4">
          <div className="w-[320px] h-[220px] border-2 border-dashed border-gray-400/50 rounded-[60px] flex items-center justify-center bg-gray-400/10 relative">
            <div className="w-[180px] h-[220px] border-4 border-gray-600 rounded-[80px] flex items-center justify-center bg-transparent">
               <div className="w-16 h-16 rounded-full border-4 border-gray-600 flex items-center justify-center relative overflow-hidden">
                  <div className="w-2.5 h-2.5 bg-gray-600 rounded-full absolute top-6 left-4"></div>
                  <div className="w-2.5 h-2.5 bg-gray-600 rounded-full absolute top-6 right-4"></div>
                  <div className="absolute top-0 w-full h-4 bg-gray-600 -translate-y-1"></div>
               </div>
            </div>
            
            {/* Verification Badge */}
            <div className="absolute -top-3 -right-3 w-10 h-10 bg-gray-500/80 rounded-full flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="white">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center mb-10 max-w-[500px]">
          <h2 className="text-[32px] font-bold text-gray-800 mb-4 leading-tight">You're one step away</h2>
          <p className="text-[18px] font-semibold text-gray-500 leading-relaxed">
            Verify your profile to send this invite and connect with people around you.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
               </svg>
            </div>
            <span className="text-[15px] font-bold text-gray-600">Builds trust instantly</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
               </svg>
            </div>
            <span className="text-[15px] font-bold text-gray-600">Better chances she accepts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
               </svg>
            </div>
            <span className="text-[15px] font-bold text-gray-600">Unlocks special invites</span>
          </div>
        </div>

        <button 
          onClick={onVerify}
          className="w-full max-w-[480px] py-4.5 rounded-full bg-linear-to-r from-[#aa3bff] to-[#ff4d94] text-white font-bold text-xl shadow-[0_10px_25px_rgba(255,77,148,0.3)] hover:scale-[1.02] transition-all active:scale-95 mb-6"
        >
          Verify & Send Invite
        </button>

        <p className="text-[12px] font-black text-gray-400 tracking-[0.1em] uppercase">
          TAKES LESS THAN 30 SECONDS
        </p>
      </div>
    </div>
  );
};

export default Verification;
