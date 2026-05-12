import React from 'react';
import facecard_img from '../assets/Facecard_img.jpg';

const FaceCard = ({ onGoTonight }) => {
  return (
    <div className="grow flex flex-col items-center p-6 gap-6">
      <button className="bg-[#7c3aed] text-white px-6 py-2.5 rounded-full font-semibold text-sm tracking-wider">
        EXPLORE FEED
      </button>

      <div className="flex flex-col items-center gap-5">
        <div className="w-[380px] h-[520px] rounded-[32px] overflow-hidden relative shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-gray-300">
          <div className="w-full h-full relative">
            <div className="absolute top-6 left-6 bg-black/30 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[11px] flex items-center gap-1.5 text-white z-10">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Matches Your Vibe
            </div>
            
            <img src={facecard_img} alt="Zoe Miller" className="w-full h-full object-cover" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <div className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold">Zoe Miller, 22</h2>
                  <div className="bg-blue-500 rounded-full w-[18px] h-[18px] flex items-center justify-center">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <button className="ml-auto bg-[#ff4d94] text-white px-3.5 py-1.5 rounded-full text-[13px] font-semibold">
                    + Mate
                  </button>
                </div>

                <p className="text-[13px] opacity-80 mb-4">4 Mutual Mates</p>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[11px] border border-white/20 whitespace-nowrap">Bollywood Nights</span>
                  <span className="bg-white/10 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[11px] border border-white/20 whitespace-nowrap">Chill Crowd</span>
                  <span className="bg-white/10 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[11px] border border-white/20 whitespace-nowrap">Party Regular</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-slate-500">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button 
            onClick={onGoTonight}
            className="w-auto px-7 h-14 rounded-full bg-linear-to-br from-[#aa3bff] to-[#ff4d94] text-white font-semibold text-base flex items-center gap-2.5 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:scale-105 active:scale-95 transition-all"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
              <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4.2 6.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0zm12.8 11.2c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0zM4.2 17.6c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8zm15.6-11.2c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8z" />
            </svg>
            Go Tonight
          </button>

          <button className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] text-[#ff4d94]">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceCard;
