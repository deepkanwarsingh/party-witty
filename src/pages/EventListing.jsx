import React from 'react';
import Sidebar from '../components/Sidebar';
import EventCard from '../components/EventCard';
import RightSidebar from '../components/RightSidebar';
import './EventListing.css';
import Zoe_miller from '../assets/Zoe_miller.jpg';
import MakeYourFirstMove from '../assets/MakeYourFirstMove.png';


const EventListing = () => {
    return (
        <div className="page-container">
            <Sidebar />
            <main className="main-content">
                <div className="event-listing-content">
                    <header className="event-header-top">
                        <div className="breadcrumbs">
                            Home / Party Package / <span>Selected item</span>
                        </div>

                        <div className="selection-bar">
                            <div className="plan-pill glass">
                                <span className="pill-text">Pick a plan you'd both enjoy</span>
                                <div className="profile-small">
                                    <img src={Zoe_miller} alt="Zoe Miller" />
                                    <span className="profile-name">Zoe Miller, 22</span>
                                    <div className="verified-mini">
                                        <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="user-status glass">
                                <div className="status-profile">
                                    <img src={MakeYourFirstMove} alt="Alen Markram" />
                                    <div className="status-info">
                                        <span className="status-name">Alen Markram</span>
                                        <button className="verify-btn-mini">Get Verified</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    <section className="search-section">
                        <h1 className="main-title">Tonight near you</h1>
                        <div className="search-bar-container">
                            <div className="search-input-wrapper">
                                <svg className="search-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                                </svg>
                                <input type="text" placeholder="Search..." className="search-input" />
                                <svg className="mic-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" />
                                </svg>
                            </div>
                        </div>
                    </section>

                    <div className="event-grid">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </main>
            {/* <RightSidebar /> */}
        </div>
    );
};

export default EventListing;
