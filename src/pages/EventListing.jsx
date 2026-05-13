import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EventCard from '../components/EventCard';
import RightSidebar from '../components/RightSidebar';
import Verification from '../components/Verification';
import Verification2 from '../components/Verification2';
import Verification3 from '../components/Verification3';
import Verification4 from '../components/Verification4';
import Zoe_miller from '../assets/Zoe_miller.jpg';
import MakeYourFirstMove from '../assets/MakeYourFirstMove.png';


const EventListing = () => {
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

    return (
        <div className="flex h-screen w-full overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto p-8 scrollbar-none">
                <div className="max-w-7xl mx-auto w-full">
                    <header className="flex flex-col gap-5 mb-8">
                        <div className="text-[11px] text-gray-500 uppercase tracking-wider font-medium">
                            Home / Party Package / <span className="text-gray-900 font-bold">Selected item</span>
                        </div>

                        <div className="flex items-center justify-between gap-6">
                            <div className="glass flex-1 flex-row items-center justify-between px-6 py-3 rounded-full">
                                <span className="text-sm font-semibold text-gray-800">Pick a plan you'd both enjoy</span>
                                <div className="flex items-center max-w-fit gap-2.5 bg-white px-3 py-2 ">
                                    <img src={Zoe_miller} alt="Zoe Miller" className="w-7 h-7 rounded-full object-cover" />
                                    <span className="text-[13px] font-bold text-gray-900">Zoe Miller, 22</span>
                                    <div className="bg-[#3b82f6] rounded-full w-3.5 h-3.5 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="8" height="8" fill="white">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="glass flex items-center px-5 py-2.5 rounded-full">
                                <div className="flex items-center gap-3">
                                    <img src={MakeYourFirstMove} alt="Alen Markram" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                                    <div className="flex flex-col">
                                        <span className="text-[13px] font-bold text-gray-900 leading-tight">Alen Markram</span>
                                        <button
                                            className="bg-linear-to-r from-[#aa3bff] to-[#ff4d94] text-white text-[10px] font-bold px-2 py-1 rounded-full mt-0.5 shadow-lg shadow-pink-500/20 hover:scale-105 transition-transform"
                                            onClick={() => setIsVerificationOpen(true)}
                                        >
                                            Get Verified
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="flex items-center justify-between mb-8">
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Tonight near you</h1>
                        <div className="w-80">
                            <div className="flex items-center bg-white/70 backdrop-blur-sm border border-black/5 rounded-full px-4 py-2 shadow-sm">
                                <svg className="text-gray-400 mr-2" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input type="text" placeholder="Search events..." className="bg-transparent border-none outline-none text-sm w-full font-medium" />
                                <svg className="text-gray-400 ml-2" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </main>
            {/* <RightSidebar onVerify={() => setIsVerificationOpen(true)} /> */}

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

export default EventListing;
