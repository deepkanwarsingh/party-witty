import React from 'react';
import './FaceCard.css';

const FaceCard = () => {
  return (
    <div className="face-card-container">
      <button className="explore-btn">EXPLORE FEED</button>
      
      <div className="card-wrapper">
        <div className="face-card">
          <div className="image-container">
            <img src="" alt="Zoe Miller" className="profile-image" />
            <div className="overlay">
              <div className="vibes-tag">
                 <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                 </svg>
                 Matches Your Vibe
              </div>
              
              <div className="profile-details">
                <div className="profile-header">
                  <h2 className="name">Zoe Miller, 22</h2>
                  <div className="verified-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </div>
                  <button className="mate-btn">+ Mate</button>
                </div>
                
                <p className="mutuals">4 Mutual Mates</p>
                
                <div className="tags">
                  <span className="tag">Bollywood Nights</span>
                  <span className="tag">Chill Crowd</span>
                  <span className="tag">Party Regular</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="action-buttons">
          <button className="action-btn dismiss">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          <button className="action-btn go-tonight">
             <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM4.2 6.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0zm12.8 11.2c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8-.8.8-2 .8-2.8 0zM4.2 17.6c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8zm15.6-11.2c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0 .8.8.8 2 0 2.8z" />
             </svg>
             Go Tonight
          </button>

          <button className="action-btn like">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceCard;
