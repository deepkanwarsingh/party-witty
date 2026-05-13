import React from 'react';
import { useNavigate } from 'react-router-dom';
import facecard_img from '../assets/Facecard_img.jpg';
import wine from '../assets/wine.jpg';
import zoe_miller from '../assets/Zoe_miller.jpg';

const OrderSummary = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen w-full overflow-hidden flex justify-center items-center bg-[radial-gradient(circle_at_0%_0%,rgba(216,208,255,0.4)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(216,255,230,0.4)_0%,transparent_50%),radial-gradient(circle_at_100%_0%,rgba(255,248,220,0.3)_0%,transparent_50%),#fcfaff] p-3 box-border font-sans">

            <div className="w-full max-w-[760px] h-full max-h-screen flex flex-col gap-2 relative overflow-hidden">

                <header className="flex justify-between items-center px-1 shrink-0">
                    <button 
                        onClick={() => navigate('/buydrinks')}
                        className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-full font-bold text-sm shadow-[0_2px_8px_rgba(0,0,0,0.05)] border-none cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        <span>Back</span>
                    </button>

                    <div className="flex items-center gap-2">
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#7c3aed" stroke="#7c3aed" />
                        </svg>

                        <span className="text-xl font-extrabold tracking-tighter text-gray-800">
                            partywitty
                        </span>
                    </div>
                </header>

                <main className="bg-white rounded-[24px] p-5 px-7 shadow-[0_12px_48px_rgba(0,0,0,0.04)] flex flex-col gap-4 flex-1 overflow-hidden min-h-0">

                    <section className="flex flex-col gap-4">

                        <div className="flex items-center gap-3 mb-0">
                            <h3 className="text-xl font-extrabold m-0 text-gray-900">
                                Illusion
                            </h3>

                            <div className="flex items-center gap-1 text-[13px] font-bold text-gray-900">
                                <svg viewBox="0 0 24 24" width="13" height="13" fill="#fbbf24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>

                                <span>4.1</span>
                            </div>

                            <span className="text-[13px] underline font-semibold text-gray-700 cursor-pointer">
                                Review (03)
                            </span>
                        </div>

                        <div className="flex items-center gap-4 relative">

                            <div className="w-[78px] h-[78px] rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-gray-50">
                                <img src={zoe_miller} alt="Zoe Miller" className="w-full h-full object-cover" />
                            </div>

                            <div className="flex flex-col">
                                <h4 className="text-[18px] font-extrabold m-0 mb-1 flex items-center gap-2 text-gray-900">
                                    Zoe Miller, 22

                                    <span className="bg-[#8b5cf6] w-4 h-4 rounded-full flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </span>
                                </h4>

                                <p className="text-sm font-semibold m-0 mb-1 text-gray-600">
                                    Nocturne Rooftop
                                </p>

                                <div className="flex items-center gap-2 text-[12px] text-gray-400 font-medium">
                                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>

                                    <span>Sector 38, Entertainment City • 13 km</span>
                                </div>
                            </div>

                            <div className="ml-auto bg-gray-100 px-3 py-2 rounded-[12px] flex flex-col items-center">
                                <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
                                    OCT
                                </span>

                                <span className="text-[18px] font-extrabold text-gray-800">
                                    24
                                </span>
                            </div>
                        </div>
                    </section>

                    <div className="flex justify-between items-center text-[16px] font-extrabold pt-2 border-t border-gray-100 text-gray-900">
                        <span>Tickets Price</span>
                        <span>₹59.00</span>
                    </div>

                    <div className="flex items-center gap-4 bg-[#fdfaf8] p-4 rounded-[22px] border border-[#fff1eb]">

                        <div className="w-[78px] h-[78px] rounded-full bg-black shrink-0 overflow-hidden shadow-lg border-2 border-white">
                            <img src={wine} alt="Drink" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col grow">
                            <h4 className="text-[18px] font-extrabold m-0 mb-1 text-gray-900">
                                Wine Glass
                            </h4>

                            <p className="text-[12px] text-gray-500 m-0 mb-2 font-medium">
                                Mint, Lime, Electric Glow
                            </p>

                            <div className="bg-[#dcfce7] text-[#16a34a] px-3 py-1.5 rounded-[8px] text-[10px] font-bold w-fit leading-tight">
                                You only pay for the drink if they accept your invite
                            </div>
                        </div>

                        <div className="ml-auto text-[16px] font-extrabold text-gray-900">
                            ₹2199
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 border-t border-dashed border-gray-200">

                        <h4 className="text-[16px] font-extrabold m-0 text-gray-900">
                            Bill Details
                        </h4>

                        <div className="flex justify-between text-sm font-bold text-gray-700">
                            <span>Tickets Amount</span>
                            <span>₹59</span>
                        </div>

                        <div className="flex justify-between text-sm font-bold text-[#7c3aed]">
                            <span className="underline cursor-pointer">
                                Platform & Other Charges
                            </span>

                            <span>₹5.90</span>
                        </div>

                        <div className="flex justify-between text-[17px] font-extrabold mt-1 pt-3 border-t border-gray-100 text-gray-900">
                            <span>Grand Total</span>
                            <span>₹64.90</span>
                        </div>
                    </div>
                </main>

                <div className="flex items-center gap-2 px-1 shrink-0">
                    <input
                        type="checkbox"
                        id="consent-check"
                        className="w-4 h-4 cursor-pointer accent-[#7c3aed]"
                    />

                    <label
                        htmlFor="consent-check"
                        className="text-[12px] font-bold text-gray-600 cursor-pointer select-none"
                    >
                        I agree to the{' '}
                        <span className="text-[#7c3aed] cursor-pointer hover:underline">
                            Terms of Service
                        </span>{' '}
                        and{' '}
                        <span className="text-[#7c3aed] cursor-pointer hover:underline">
                            Privacy Policy
                        </span>.
                    </label>
                </div>

                <div className="shrink-0 bg-white p-2 rounded-full flex items-center gap-2 shadow-[0_10px_32px_rgba(0,0,0,0.08)] border border-gray-50">

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f5f3ff]">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#7c3aed" strokeWidth="2.5">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#7c3aed]">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                            <circle cx="5" cy="12" r="2" />
                            <circle cx="12" cy="12" r="2" />
                            <circle cx="19" cy="12" r="2" />
                        </svg>
                    </div>

                    <button className="bg-[#7464e4] text-white px-8 py-3 rounded-full font-bold text-sm border-none cursor-pointer grow hover:bg-[#6354d1] transition-all shadow-md active:scale-95">
                        Make The Move Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;