import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DrinkCard from '../components/DrinkCard';
import Verification from '../components/Verification';
import Verification2 from '../components/Verification2';
import Verification3 from '../components/Verification3';
import Verification4 from '../components/Verification4';
import facecard_img from '../assets/Facecard_img.jpg';
import MakeYourFirstMove from '../assets/MakeYourFirstMove.png';
import Zoe_miller from '../assets/Zoe_miller.jpg';
import Buydrinks from '../assets/Buydrinks.png';
import dry_martini from '../assets/dry_martini.jpg';
import mai_tai from '../assets/mai_tai.jpg';
import cosmopolitan from '../assets/cosmopolitan.jpg';
import wine from '../assets/wine.jpg';

const BuyDrinks = () => {
    const [isVerificationOpen, setIsVerificationOpen] = useState(false);
    const [isVerification2Open, setIsVerification2Open] = useState(false);
    const [isVerification3Open, setIsVerification3Open] = useState(false);
    const [isVerification4Open, setIsVerification4Open] = useState(false);

    const handleStartVerification = () => {
        setIsVerificationOpen(false);
        setIsVerification2Open(true);
    };

    const handleFinishVerification = () => {
        setIsVerification2Open(false);
        setIsVerification3Open(true);
    };

    const handleGoToPhotos = () => {
        setIsVerification3Open(false);
        setIsVerification4Open(true);
    };

    const drinks = [
        { name: 'Dry Martini', price: '999', desc: 'Mint, Lime, Electric Glow', status: 'MOST LIKELY TO GET ACCEPTED', image: dry_martini },
        { name: 'Cosmopolitan', price: '199', desc: 'Mint, Lime, Electric Glow', status: 'Essy Choose', image: cosmopolitan },
        { name: 'Mai Tai', price: '899', desc: 'Mint, Lime, Electric Glow', status: 'Most Popular', image: mai_tai },
        { name: 'Wine Glass', price: '2199', desc: 'Mint, Lime, Electric Glow', status: 'Make An Impression', image: wine },
        { name: 'Dry Martini', price: '999', desc: 'Mint, Lime, Electric Glow', status: 'MOST LIKELY TO GET ACCEPTED', image: dry_martini },
        { name: 'Cosmopolitan', price: '199', desc: 'Mint, Lime, Electric Glow', status: 'Essy Choose', image: cosmopolitan },
        { name: 'Mai Tai', price: '899', desc: 'Mint, Lime, Electric Glow', status: 'Most Popular', image: mai_tai },
        { name: 'Wine Glass', price: '2199', desc: 'Mint, Lime, Electric Glow', status: 'Make An Impression', image: wine },
    ];

    return (
        <div className="flex bg-[#f3f0f7] min-h-screen font-sans ">
            <Sidebar />

            <main className="flex-1 p-10 flex gap-10 max-w-[1600px] mx-auto overflow-y-auto scrollbar-none">
                {/* Left Column: Preview */}
                <div className="w-[340px] flex flex-col gap-6 shrink-0">
                    <header className="text-[12px] text-gray-500 tracking-tight">
                        Home / Party Package / <span className="text-gray-900 font-bold">Selected item</span>
                    </header>

                    <div className="flex items-center gap-4 py-2">
                        <div className="w-14 h-14 rounded-full border-[3px] border-[#7c3aed] p-0.5 shadow-md overflow-hidden bg-white shrink-0">
                            <img src={MakeYourFirstMove} alt="Alen Markram" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-lg font-bold text-gray-900 leading-none">Alen Markram</span>
                            <button 
                                onClick={() => setIsVerificationOpen(true)}
                                className="bg-[#ff4d94] text-white text-[11px] font-extrabold px-3 py-1 rounded-full w-fit shadow-sm hover:scale-105 transition-transform"
                            >
                                Get Verified
                            </button>
                        </div>
                    </div>

                    <div className="rounded-[32px] overflow-hidden flex flex-col glass shadow-2xl">
                        <div className="h-[360px] relative">
                            <img src={Buydrinks} alt="Selection" className="w-full h-full object-cover" />
                            <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-lg">
                                        <img src={Zoe_miller} alt="Zoe Miller" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-base font-bold flex items-center gap-1.5">
                                            Zoe Miller, 22
                                            <svg viewBox="0 0 24 24" width="14" height="14" fill="#3b82f6">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                            </svg>
                                        </h4>
                                        <p className="text-[12px] font-semibold opacity-90">Nocturne Rooftop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col gap-4 bg-white/80 backdrop-blur-sm">
                            <div className="flex items-center gap-3 text-[14px] text-gray-800 font-bold">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="12" r="3" />
                                </svg>
                                <span>Sector 38, Noida at ILLUSION</span>
                            </div>
                            <div className="flex items-center gap-3 text-[14px] text-gray-800 font-bold">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Tonight, 10:30 PM -</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Selection Panel */}
                <div className="flex-1 bg-[#ede9f1]/60 backdrop-blur-md p-10 rounded-[40px] flex flex-col gap-8 shadow-inner border border-white/40 h-[calc(100vh-80px)]">
                    <div>
                        <h2 className="text-[28px] font-bold text-gray-900 mb-1 tracking-tight">
                            One Step Before Your First Move
                        </h2>
                        <p className="text-[14px] text-gray-500 font-medium">
                            Verify your profile to send invites and offer drinks.
                        </p>
                    </div>

                    <div className="flex-1 overflow-y-none scrollbar-none pr-2">
                        <div className="grid grid-cols-2 gap-5">
                            {drinks.map((drink, index) => (
                                <DrinkCard
                                    key={index}
                                    {...drink}
                                    isSelected={index === 0 || index === 4}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 bg-white hover:bg-gray-50 border border-transparent p-5 rounded-[24px] flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 text-xl group-hover:scale-110 transition-transform">
                                <span role="img" aria-label="wave">👋</span>
                            </div>
                            <span className="text-[14px] font-bold text-gray-800">Wave</span>
                            <span className="text-[11px] text-gray-400 font-black tracking-widest uppercase">FREE</span>
                        </div>
                        <div className="flex-1 bg-white hover:bg-gray-50 border border-transparent p-5 rounded-[24px] flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 text-xl group-hover:scale-110 transition-transform">
                                <span role="img" aria-label="rose">🌹</span>
                            </div>
                            <span className="text-[14px] font-bold text-gray-800">Send a Rose</span>
                            <span className="text-[11px] text-gray-400 font-black tracking-widest uppercase">₹10</span>
                        </div>
                        <div className="flex-1 bg-white hover:bg-gray-50 border border-transparent p-5 rounded-[24px] flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md group">
                            <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center text-pink-500 text-xl group-hover:scale-110 transition-transform">
                                <span role="img" aria-label="chocolate">🍬</span>
                            </div>
                            <span className="text-[14px] font-bold text-gray-800">Chocolate</span>
                            <span className="text-[11px] text-gray-400 font-black tracking-widest uppercase">₹25</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-[13px] font-black text-gray-400 uppercase tracking-widest">
                            A Little About Me
                        </label>
                        <div className="bg-white/80 p-5 px-7 rounded-[24px] flex justify-between items-center border border-white/40 shadow-sm">
                            <p className="text-[15px] font-bold text-gray-700">
                                Hey, I'm Aman , into good music and chill nights
                            </p>
                            <button className="text-gray-400 hover:text-[#7c3aed] transition-colors p-1">
                                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Verification
                isOpen={isVerificationOpen}
                onClose={() => setIsVerificationOpen(false)}
                onVerify={handleStartVerification}
            />

            <Verification2
                isOpen={isVerification2Open}
                onClose={() => setIsVerification2Open(false)}
                onFinish={handleFinishVerification}
            />

            <Verification3
                isOpen={isVerification3Open}
                onClose={() => setIsVerification3Open(false)}
                onNext={handleGoToPhotos}
            />

            <Verification4
                isOpen={isVerification4Open}
                onClose={() => setIsVerification4Open(false)}
            />
        </div>
    );
};

export default BuyDrinks;