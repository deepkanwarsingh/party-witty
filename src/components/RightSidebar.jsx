import React from 'react';
import './RightSidebar.css';

const RightSidebar = () => {
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
    <aside className="right-sidebar glass">
      <div className="user-header">
        <div className="profile-avatar">
          <img src="" alt="Profile" />
        </div>
        <h3>Make Your First Move</h3>
        <p className="subtitle">Verify your profile to start sending invites and offering drinks.</p>
      </div>

      <div className="how-it-works">
        <h4>How It Works</h4>
        <div className="steps-list">
          {steps.map((step) => (
            <div key={step.id} className="step-item">
              <div className="step-thumb">
                 <img src="" alt={`Step ${step.id}`} />
                 <span className="step-badge">{step.id}</span>
                 <div className="step-icon">
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                    </svg>
                 </div>
              </div>
              <div className="step-info">
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="benefits-section">
        {benefits.map((benefit, i) => (
          <div key={i} className="benefit-item">
            <div className="check-icon">
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      <div className="verification-footer">
        <button className="verify-btn">Get Verified</button>
        <p className="timer">Takes less than 60 seconds</p>
        <button className="maybe-later">Maybe later</button>
      </div>
    </aside>
  );
};

export default RightSidebar;
