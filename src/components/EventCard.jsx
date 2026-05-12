import React from 'react';
import './EventCard.css';

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="card-top">
        <div className="badge happening">HAPPENING NOW</div>
        <div className="badge vibe">Vibe Matches</div>
        <img src="" alt="Event" className="event-img" />
        
        <div className="card-overlay">
          <div className="club-name">PRISM NIGHTCLUB</div>
          <div className="event-header">
            <h3 className="event-title">F-Bar</h3>
            <div className="rating">
              <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.1</span>
            </div>
          </div>
          <div className="time-info">
            <span>Friday</span>
            <span>10:00 PM onwards</span>
          </div>
        </div>
      </div>

      <div className="card-bottom">
        <div className="visitor-pill">
           <div className="mini-avatar">
              <img src="" alt="User" />
           </div>
           <span>Zoya has been here twice</span>
        </div>

        <div className="location-details">
          <div className="location-info">
             <div className="loc-icon">
               <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="12" r="3" />
               </svg>
             </div>
             <div>
               <h4>Nocturne Rooftop</h4>
               <p>Sector 38, Entertainment City • 13 km</p>
             </div>
             <div className="arrow-icon">
               <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                 <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
               </svg>
             </div>
          </div>
        </div>

        <div className="circle-info">
          <div className="avatars">
            <div className="avatar-small"><img src="" alt="" /></div>
            <div className="avatar-small"><img src="" alt="" /></div>
            <div className="avatar-small"><img src="" alt="" /></div>
            <div className="avatar-count">22+</div>
          </div>
          <span className="circle-text">Your Circle</span>
          <div className="offer">
            <span className="percent">36% OFF</span>
            <span className="fnb">F&B</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
