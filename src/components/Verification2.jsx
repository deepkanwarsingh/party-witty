import React from 'react';
import verificationImage from '../assets/verificationImage.png';

const Verification2 = ({ isOpen, onClose, onFinish }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md">
      {/* Main Container */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center p-4">
        
        {/* Circular Viewport Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-[1px] border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            {/* Camera Preview / Background Image */}
            <img 
                src={verificationImage} 
                alt="Verification Scan" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-black/10 to-black/60"></div>

            {/* Close Button (Top right of viewport) */}
            <button 
                onClick={onClose}
                className="absolute top-10 right-10 w-10 h-10 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center transition-all border border-white/10 z-[80] backdrop-blur-md"
            >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Central Overlay Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
                {/* Oval Frame */}
                <div className="w-[260px] h-[360px] border-[2px] border-white/30 rounded-[130px] relative flex flex-col items-center justify-center">
                    {/* Top indicator */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    
                    {/* Bottom indicator */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>

                    {/* "Look straight" Pill */}
                    <div className="bg-white/20 backdrop-blur-md px-10 py-3 rounded-[24px] border border-white/20 shadow-xl">
                        <span className="text-white font-bold text-[20px] tracking-tight">Look straight</span>
                    </div>
                </div>

                {/* Guidance Text */}
                <div className="mt-8 text-center px-6">
                    <h3 className="text-white text-[20px] font-bold mb-1 tracking-tight drop-shadow-md">Keep your face within the frame</h3>
                    <p className="text-white/70 text-[14px] font-semibold leading-tight drop-shadow-md">
                        Center your face and wait for the scan to start
                    </p>
                </div>

                {/* Safety Pill */}
                <div className="mt-14 bg-white/15 backdrop-blur-md px-6 py-2.5 rounded-full flex items-center gap-2.5 border border-white/10 shadow-lg">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-white/90 text-[13px] font-bold tracking-tight">Used only for verification</span>
                </div>

                {/* Bottom Controls (Inside the circle) */}
                <div className="mt-8 flex items-center gap-6 pb-4">
                    {/* Flip Camera */}
                    <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 text-white backdrop-blur-md">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                            <circle cx="12" cy="13" r="4" />
                            <path d="M19 10L19 10" />
                        </svg>
                    </button>

                    {/* Shutter Button */}
                    <button 
                        onClick={onFinish}
                        className="w-[82px] h-[82px] rounded-full border-[4px] border-white flex items-center justify-center hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <div className="w-[66px] h-[66px] rounded-full bg-white flex items-center justify-center">
                            <div className="w-[50px] h-[50px] rounded-full border-2 border-black/5"></div>
                        </div>
                    </button>

                    {/* Flash/Light */}
                    <button className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 text-white backdrop-blur-md">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="18.36" x2="5.64" y2="16.94" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Verification2;
