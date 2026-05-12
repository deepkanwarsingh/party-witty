import React from 'react';
import HowitWorks from '../assets/HowitWorks.jpg';
import MakeYourFirstMove from '../assets/MakeYourFirstMove.png';

const RightSidebar = ({ onVerify }) => {
  const steps = [
    { id: 1, title: 'Spot Your Person', desc: "Pick someone you'd genuinely enjoy going out with." },
    { id: 2, title: 'Send a Drink', desc: "Offer their first drink your way of saying let's go out." },
    { id: 3, title: "They Accept -> You're Set", desc: "Once accepted, it's a confirmed plan. No endless chatting." },
  ];

  const benefits = [
    'Get noticed faster',
    'Higher chances your invite gets accepted',
    'Unlock drink invites & premium interactions',
    'Build trust with every profile visit',
  ];

  return (
    <aside className="glass w-[320px] h-screen flex flex-col p-6 gap-8 overflow-y-auto scrollbar-none">
      <div className="flex flex-col items-center text-center gap-3">
        <div className="w-20 h-20 rounded-full bg-gray-100 overflow-hidden shadow-sm">
          <img src={MakeYourFirstMove} alt="Profile" className="w-full h-full object-cover" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Make Your First Move</h3>
        <p className="text-sm text-gray-500 leading-relaxed px-2">Verify your profile to start sending invites and offering drinks.</p>
      </div>

      <div className="flex flex-col gap-5">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-400 px-1">How It Works</h4>
        <div className="flex flex-col gap-6">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4 group">
              <div className="relative w-16 h-16 shrink-0 rounded-xl overflow-hidden shadow-sm">
                <img src={HowitWorks} alt={`Step ${step.id}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-1.5 left-1.5 bg-[#7c3aed] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {step.id}
                </span>
                <div className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-white/30 backdrop-blur-[2px] rounded-full flex items-center justify-center">
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-0.5">
                <h5 className="text-[14px] font-bold text-gray-800">{step.title}</h5>
                <p className="text-[12px] text-gray-500 leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3.5 py-2">
        {benefits.map((benefit, i) => (
          <div key={i} className="flex items-center gap-3 text-[13px] font-semibold text-gray-700">
            <div className="flex-shrink-0 w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="#16a34a" strokeWidth="4">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 mt-auto pt-4">
        <button 
          onClick={onVerify}
          className="w-full bg-[#7c3aed] text-white py-3.5 rounded-full font-bold text-[15px] shadow-lg shadow-violet-500/20 hover:bg-violet-600 transition-colors"
        >
          Get Verified
        </button>
        <p className="text-[11px] text-gray-400 text-center font-medium uppercase tracking-tighter italic">Takes less than 60 seconds</p>
        <button className="text-[13px] text-gray-400 font-bold hover:text-gray-600 transition-colors">
          Maybe later
        </button>
      </div>
    </aside>
  );
};

export default RightSidebar;
