import verificationImage from '../assets/verificationImage.png';

const Verification2 = ({ isOpen, onClose, onFinish }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 backdrop-blur-md">
      {/* Main Container */}
      <div className="relative w-full max-w-[600px] h-full flex flex-col items-center justify-center p-4">
        
        {/* Circular Viewport Container */}
        <div className="relative w-full aspect-square rounded-full overflow-hidden border-[1px] border-white/10 flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.8)]">
            {/* Camera Preview / Background Image */}
            <img 
                src={verificationImage} 
                alt="Verification Scan" 
                className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Subtle Vignette Overlay */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-transparent via-black/10 to-black/40"></div>

            {/* Oval Frame Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="w-[280px] h-[380px] border-[2px] border-white/40 rounded-[140px] relative flex flex-col items-center justify-center">
                    {/* Top indicator */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
                    
                    {/* Bottom indicator */}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-2 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>

                    {/* "Look straight" Pill */}
                    <div className="bg-white/10 backdrop-blur-3xl px-8 py-3.5 rounded-[22px] border border-white/20 shadow-2xl">
                        <span className="text-white font-bold text-[18px] tracking-tight">Look straight</span>
                    </div>
                </div>

                {/* Guidance Text (Inside the circle but below the frame) */}
                <div className="absolute bottom-[18%] text-center">
                    <h3 className="text-white text-[20px] font-bold mb-1 tracking-tight drop-shadow-md">Keep your face within the frame</h3>
                    <p className="text-white/70 text-[14px] font-semibold drop-shadow-md">
                        Center your face and wait for the scan to start
                    </p>
                </div>
            </div>
        </div>

        {/* UI Overlay Content (Controls below the circle) */}
        <div className="mt-8 flex flex-col items-center w-full">
            {/* Close Button (Top right of screen) */}
            <button 
                onClick={onClose}
                className="fixed top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all border border-white/10 z-[80] backdrop-blur-md"
            >
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            {/* Safety Pill */}
            <div className="bg-black/20 backdrop-blur-xl px-5 py-2.5 rounded-full flex items-center gap-2.5 border border-white/10 mb-8">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2.5" className="opacity-80">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
                <span className="text-white/90 text-[13px] font-bold tracking-tight">Used only for verification</span>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center gap-8">
                {/* Flip Camera */}
                <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90 text-white shadow-xl backdrop-blur-md">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M23 4v6h-6M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                </button>

                {/* Shutter Button */}
                <button 
                    onClick={onFinish}
                    className="w-[88px] h-[88px] rounded-full border-[5px] border-white flex items-center justify-center hover:scale-105 transition-all active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                >
                    <div className="w-[68px] h-[68px] rounded-full bg-white flex items-center justify-center">
                        <div className="w-[54px] h-[54px] rounded-full border-2 border-black/5"></div>
                    </div>
                </button>

                {/* Flash/Light */}
                <button className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all active:scale-90 text-white shadow-xl backdrop-blur-md">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
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
  );
};

export default Verification2;
