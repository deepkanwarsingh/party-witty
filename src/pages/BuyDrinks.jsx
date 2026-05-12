import React from 'react';
import Sidebar from '../components/Sidebar';
import DrinkCard from '../components/DrinkCard';
import './BuyDrinks.css';
import facecard_img from '../assets/Facecard_img.jpg';

const BuyDrinks = () => {
    const drinks = [
        { name: 'Dry Martini', price: '999', desc: 'Mint, Lime, Electric Glow', status: 'MOST LIKELY TO GET ACCEPTED', image: '' },
        { name: 'Cosmopolitan', price: '199', desc: 'Mint, Lime, Electric Glow', status: 'Essy Choose', image: '' },
        { name: 'Mai Tai', price: '899', desc: 'Mint, Lime, Electric Glow', status: 'Most Popular', image: '' },
        { name: 'Wine Glass', price: '2199', desc: 'Mint, Lime, Electric Glow', status: 'Make An Impression', image: '' },
        { name: 'Dry Martini', price: '999', desc: 'Mint, Lime, Electric Glow', status: 'MOST LIKELY TO GET ACCEPTED', image: '' },
        { name: 'Cosmopolitan', price: '199', desc: 'Mint, Lime, Electric Glow', status: 'Essy Choose', image: '' },
        { name: 'Mai Tai', price: '899', desc: 'Mint, Lime, Electric Glow', status: 'Most Popular', image: '' },
        { name: 'Wine Glass', price: '2199', desc: 'Mint, Lime, Electric Glow', status: 'Make An Impression', image: '' },
    ];

    return (
        <div className="page-container">
            <Sidebar />
            <main className="main-content buy-drinks-layout">
                <div className="selection-preview">
                    <header className="preview-header">
                        Home / Party Package / <span>Selected item</span>
                    </header>

                    <div className="user-profile-status glass">
                        <div className="profile-top">
                            <img src="" alt="Alen Markram" className="user-avatar-main" />
                            <div className="user-meta">
                                <span className="user-name-main">Alen Markram</span>
                                <button className="get-verified-btn">Get Verified</button>
                            </div>
                        </div>
                    </div>

                    <div className="preview-card glass">
                        <div className="preview-image-container">
                            <img src="" alt="Selection" className="preview-bg-image" />
                            <div className="preview-overlay">
                                <div className="zoe-mini-profile">
                                    <img src={facecard_img} alt="Zoe Miller" />
                                    <div className="zoe-meta">
                                        <h4>Zoe Miller, 22</h4>
                                        <p>Nocturne Rooftop</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="preview-footer">
                            <div className="preview-loc">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="12" r="3" />
                                </svg>
                                <span>Sector 38, Noida at ILLUSION</span>
                            </div>
                            <div className="preview-time">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                                </svg>
                                <span>Tonight, 10:30 PM -</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="drinks-selection-panel glass">
                    <div className="panel-header">
                        <h2>One Step Before Your First Move</h2>
                        <p>Verify your profile to send invites and offer drinks.</p>
                    </div>

                    <div className="drinks-grid">
                        {drinks.map((drink, index) => (
                            <DrinkCard key={index} {...drink} isSelected={index === 0 || index === 4} />
                        ))}
                    </div>

                    <div className="interaction-options">
                        <div className="option-item">
                            <div className="option-icon wave">👋</div>
                            <span className="option-label">Wave</span>
                            <span className="option-price">FREE</span>
                        </div>
                        <div className="option-item">
                            <div className="option-icon rose">🌹</div>
                            <span className="option-label">Send a Rose</span>
                            <span className="option-price">₹10</span>
                        </div>
                        <div className="option-item">
                            <div className="option-icon chocolate">🍬</div>
                            <span className="option-label">Chocolate</span>
                            <span className="option-price">₹25</span>
                        </div>
                    </div>

                    <div className="about-me-section">
                        <label>A Little About Me</label>
                        <div className="about-text-box">
                            <p>Hey, I'm Aman , into good music and chill nights</p>
                            <button className="edit-btn">
                                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default BuyDrinks;