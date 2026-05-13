import React from 'react';
import slot_2_existing from '../assets/slot_2_existing.png';
import slot_3_existing from '../assets/slot_3_existing.png';
import slot_4_existing from '../assets/slot_4_existing.png';

const Verification4 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/40 backdrop-blur-[2px]">
      <div className="bg-[#e5e5e5] rounded-[32px] w-full max-w-[800px] p-10 relative flex flex-col items-center shadow-2xl overflow-hidden max-h-[95vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-[42px] font-bold text-gray-800 mb-2 leading-tight tracking-tight">Show your vibe</h2>
          <p className="text-[17px] font-semibold text-gray-500">
            Add up to 6 photos people will actually vibe with
          </p>
        </div>

        {/* Progress Bar Section */}
        <div className="w-full max-w-[640px] flex flex-col gap-3 mb-8">
            <div className="flex items-center gap-4">
                <span className="text-[14px] font-black text-gray-600 tracking-wider shrink-0 uppercase">3/6 ADDED</span>
                <div className="grow h-2.5 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-500 rounded-full" style={{ width: '50%' }}></div>
                </div>
            </div>

            {/* Tip Banner */}
            <div className="bg-gray-400/20 px-6 py-3.5 rounded-full flex items-center gap-3 border border-gray-400/10">
                <div className="w-8 h-8 rounded-full bg-gray-400/20 flex items-center justify-center text-gray-600">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                        <path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z" />
                    </svg>
                </div>
                <span className="text-[15px] font-bold text-gray-600">Profiles with 4+ photos get 3x more invites</span>
            </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-3 gap-5 w-full overflow-y-auto pr-2 scrollbar-none">
            {/* Slot 1: Add Photo */}
            <div className="aspect-[3/4] bg-gray-400/40 rounded-[24px] border-2 border-dashed border-gray-400/50 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-gray-400/50 transition-all group">
                <div className="w-14 h-14 bg-gray-600/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="white" strokeWidth="3">
                        <path d="M12 5v14M5 12h14" />
                    </svg>
                </div>
                <span className="text-[14px] font-bold text-gray-600">+ Add Photo</span>
            </div>

            {/* Slot 2: Photo Placeholder (Example with delete button) */}
            <div className="aspect-[3/4] bg-gray-400/30 rounded-[24px] relative overflow-hidden group">
                <img src={slot_2_existing} alt="Slot 2" className="w-full h-full object-cover" />
                <button className="absolute bottom-4 left-4 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg hover:bg-red-500 transition-colors">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                </button>
            </div>

            {/* Slot 3: Photo Placeholder */}
            <div className="aspect-[3/4] bg-gray-400/30 rounded-[24px] relative overflow-hidden">
                <img src={slot_3_existing} alt="Slot 3" className="w-full h-full object-cover" />
                <button className="absolute bottom-4 left-4 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                </button>
            </div>

            {/* Slot 4: Photo Placeholder */}
            <div className="aspect-[3/4] bg-gray-400/30 rounded-[24px] relative overflow-hidden">
                <img src={slot_4_existing} alt="Slot 4" className="w-full h-full object-cover" />
                <button className="absolute bottom-4 left-4 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    </svg>
                </button>
            </div>

            {/* Slot 5: Hint with friends */}
            <div className="aspect-[3/4] bg-gray-400/40 rounded-[24px] flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 bg-gray-600/80 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2.5">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>
                <div className="text-center">
                    <span className="block text-[12px] font-black text-gray-600 tracking-widest uppercase mb-1">HINT</span>
                    <span className="block text-[13px] font-bold text-gray-500">With friends</span>
                </div>
            </div>

            {/* Slot 6: Hint candid */}
            <div className="aspect-[3/4] bg-gray-400/40 rounded-[24px] flex flex-col items-center justify-center gap-3">
                <div className="w-14 h-14 bg-gray-600/80 rounded-full flex items-center justify-center shadow-lg">
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="white" strokeWidth="2.5">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                </div>
                <div className="text-center">
                    <span className="block text-[12px] font-black text-gray-600 tracking-widest uppercase mb-1">HINT</span>
                    <span className="block text-[13px] font-bold text-gray-500 text-nowrap">Candid &gt; posed</span>
                </div>
            </div>
        </div>

        {/* Footer Button (Optional, can be added later if needed) */}
        {/* <button className="mt-8 w-full max-w-[420px] py-4 rounded-full bg-gray-600 text-white font-bold text-lg shadow-xl hover:bg-gray-700 transition-all">Next</button> */}
      </div>
    </div>
  );
};

export default Verification4;
