import React from 'react';
import facecard_img from '../assets/Facecard_img.jpg';
import Zoe_miller from '../assets/Zoe_miller.jpg';
import Fbar1 from '../assets/F-bar-1.jpg';
import Fbar2 from '../assets/F-bar-2.jpg';
import Fbar3 from '../assets/F-bar-3.jpg';

const eventImages = [Fbar1, Fbar2, Fbar3];

const EventCard = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] flex flex-col">
      <div className="h-[280px] relative overflow-hidden">
        <div className="absolute top-4 left-4 bg-green-500/20 text-green-500 border border-green-500/30 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider z-10">
          HAPPENING NOW
        </div>
        <div className="absolute top-4 right-4 bg-white/20 text-white border border-white/30 backdrop-blur-[4px] px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider z-10">
          Vibe Matches
        </div>

        <img
          src={eventImages[Math.floor(Math.random() * eventImages.length)]}
          alt="Event"
          className="w-full h-full object-cover bg-gray-100"
        />

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <div className="text-[10px] font-bold opacity-80 mb-1">PRISM NIGHTCLUB</div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-xl font-bold">F-Bar</h3>
            <div className="bg-black/50 px-2 py-0.5 rounded-full text-[10px] flex items-center gap-1 border border-white/20">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.1</span>
            </div>
          </div>
          <div className="flex justify-between text-[11px] opacity-80 font-medium">
            <span>Friday</span>
            <span>10:00 PM onwards</span>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div className="bg-[#ff4d94] text-white px-3 py-1 rounded-full text-[11px] font-medium flex items-center gap-1.5 self-center -mt-7 z-20 shadow-[0_4px_8px_rgba(236,72,153,0.3)]">
          <div className="w-4 h-4 rounded-full bg-white overflow-hidden">
            <img src={facecard_img} alt="User" className="w-full h-full object-cover" />
          </div>
          <span>Zoya has been here twice</span>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="text-gray-500">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>

            <div className="grow">
              <h4 className="text-sm font-bold mb-0.5 text-gray-900">Nocturne Rooftop</h4>
              <p className="text-[11px] text-gray-500">
                Sector 38, Entertainment City • 13 km
              </p>
            </div>

            <div className="ml-auto text-gray-500 opacity-50">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-dashed border-gray-100">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white first:ml-0 overflow-hidden">
              <img src={Zoe_miller} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white -ml-2 overflow-hidden">
              <img src={Zoe_miller} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-6 h-6 rounded-full bg-gray-200 border-2 border-white -ml-2 overflow-hidden">
              <img src={Zoe_miller} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="w-6 h-6 rounded-full bg-slate-50 border-2 border-white text-[9px] font-bold flex items-center justify-center -ml-2 text-gray-600">
              22+
            </div>
          </div>

          <span className="text-[11px] text-gray-500 font-medium">
            Your Circle
          </span>

          <div className="ml-auto flex items-center gap-1">
            <span className="text-green-600 font-bold text-sm">36% OFF</span>
            <span className="text-green-600 font-bold text-sm">F&B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;