import React from 'react';
import './OrderSummary.css';
import facecard_img from '../assets/Facecard_img.jpg';

const OrderSummary = () => {
  return (
    <div className="order-summary-root">
      <div className="order-summary-layout">
        <header className="summary-nav">
          <button className="btn-back">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
          <div className="brand-logo">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#7c3aed" stroke="#7c3aed" />
            </svg>
            <span className="brand-name">partywitty</span>
          </div>
        </header>

        <main className="summary-main-card">
          <section className="venue-user-info">
            <div className="venue-header-row">
              <h3>Illusion</h3>
              <div className="star-rating">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="#fbbf24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span>4.1</span>
              </div>
              <span className="link-review">Review (03)</span>
            </div>
            
            <div className="user-highlight-row">
              <div className="user-img-large">
                <img src={facecard_img} alt="Zoe Miller" />
              </div>
              <div className="user-meta-info">
                <h4>
                  Zoe Miller, 22
                  <span className="icon-verified-small">
                    <svg viewBox="0 0 24 24" width="10" height="10" fill="white">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                  </span>
                </h4>
                <p className="text-rooftop">Nocturne Rooftop</p>
                <div className="text-location">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z" /><circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Sector 38, Entertainment City • 13 km</span>
                </div>
              </div>
              <div className="badge-date">
                <span className="date-label">OCT</span>
                <span className="date-number">24</span>
              </div>
            </div>
          </section>

          <div className="price-line">
            <span>Tickets Price</span>
            <span>₹59.00</span>
          </div>

          <div className="drink-card-small">
             <div className="drink-icon-circle">
                <img src="" alt="Drink" />
             </div>
             <div className="drink-desc-col">
                <h4>Wine Glass</h4>
                <p>Mint, Lime, Electric Glow</p>
                <div className="pill-info">
                  You only pay for the drink if they accept your invite
                </div>
             </div>
             <div className="val-price-bold">₹2199</div>
          </div>

          <div className="bill-breakdown">
             <h4>Bill Details</h4>
             <div className="row-item">
                <span>Tickets Amount</span>
                <span>₹59</span>
             </div>
             <div className="row-item highlight">
                <span className="link-charges">Platform & Other Charges</span>
                <span>₹5.90</span>
             </div>
             <div className="row-item row-total">
                <span>Grand Total</span>
                <span>₹64.90</span>
             </div>
          </div>
        </main>

        <div className="consent-row">
           <input type="checkbox" id="consent-check" />
           <label htmlFor="consent-check">
             I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>.
           </label>
        </div>

        <div className="action-float-bar">
           <div className="icon-box soft-bg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#7c3aed" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
           </div>
           <div className="icon-box purple-bg">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
              </svg>
           </div>
           <button className="btn-proceed">Make The Move Now</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
