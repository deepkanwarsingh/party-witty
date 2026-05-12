import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = [
    { name: 'My Plan', icon: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z' },
    { name: 'My Bids', icon: 'M14.5 12.5L21 6M10 17l-5 5M6 13l4-4M16 3l4 4' },
    { name: 'My Booking', icon: 'M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z' },
    { name: 'Search', icon: 'M21 21l-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0z' },
    { name: 'Chat Room', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { name: 'Notifications', icon: 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0' },
    { name: 'Save & Like', icon: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z' },
    { name: 'Rewards', icon: 'M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4M4 6v12c0 1.1.9 2 2 2h14v-4M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z' },
  ];

  return (
    <aside className={`sidebar glass ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="34" rx="17" fill="#C5C0E5"/>
          <path d="M23.0417 9H11.9583C10.9089 9.00112 9.90269 9.41851 9.1606 10.1606C8.41851 10.9027 8.00112 11.9089 8 12.9583V20.875C8.00112 21.9245 8.41851 22.9306 9.1606 23.6727C9.90269 24.4148 10.9089 24.8322 11.9583 24.8333H23.0417C24.0911 24.8322 25.0973 24.4148 25.8394 23.6727C26.5815 22.9306 26.9989 21.9245 27 20.875V12.9583C26.9989 11.9089 26.5815 10.9027 25.8394 10.1606C25.0973 9.41851 24.0911 9.00112 23.0417 9ZM9.58333 20.875V12.9583C9.58333 11.6494 10.6494 10.5833 11.9583 10.5833H15.125V23.25H11.9583C10.6494 23.25 9.58333 22.1839 9.58333 20.875ZM25.4167 20.875C25.4167 22.1839 24.3506 23.25 23.0417 23.25H16.7083V10.5833H23.0417C24.3506 10.5833 25.4167 11.6494 25.4167 12.9583V20.875ZM13.5417 16.125C13.5417 16.335 13.4583 16.5363 13.3098 16.6848C13.1613 16.8333 12.96 16.9167 12.75 16.9167H11.9583C11.7484 16.9167 11.547 16.8333 11.3985 16.6848C11.2501 16.5363 11.1667 16.335 11.1667 16.125C11.1667 15.915 11.2501 15.7137 11.3985 15.5652C11.547 15.4167 11.7484 15.3333 11.9583 15.3333H12.75C12.96 15.3333 13.1613 15.4167 13.3098 15.5652C13.4583 15.7137 13.5417 15.915 13.5417 16.125ZM13.5417 19.2917C13.5417 19.5016 13.4583 19.703 13.3098 19.8515C13.1613 19.9999 12.96 20.0833 12.75 20.0833H11.9583C11.7484 20.0833 11.547 19.9999 11.3985 19.8515C11.2501 19.703 11.1667 19.5016 11.1667 19.2917C11.1667 19.0817 11.2501 18.8803 11.3985 18.7319C11.547 18.5834 11.7484 18.5 11.9583 18.5H12.75C12.96 18.5 13.1613 18.5834 13.3098 18.7319C13.4583 18.8803 13.5417 19.0817 13.5417 19.2917ZM11.1667 12.9583C11.1667 12.7484 11.2501 12.547 11.3985 12.3985C11.547 12.2501 11.7484 12.1667 11.9583 12.1667H12.75C12.96 12.1667 13.1613 12.2501 13.3098 12.3985C13.4583 12.547 13.5417 12.7484 13.5417 12.9583C13.5417 13.1683 13.4583 13.3697 13.3098 13.5181C13.1613 13.6666 12.96 13.75 12.75 13.75H11.9583C11.7484 13.75 11.547 13.6666 11.3985 13.5181C11.2501 13.3697 11.1667 13.1683 11.1667 12.9583Z" fill="#7464E4"/>
        </svg>
      </button>
      <div className="logo-container">
        <div className="logo-icon">
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="var(--brand-purple)" stroke="var(--brand-purple)" />
          </svg>
        </div>
        {!isCollapsed && <span className="logo-text">partywitty</span>}
      </div>

      <nav className="nav-menu">
        {navItems.map((item) => (
          <a key={item.name} href={`#${item.name.toLowerCase().replace(/\s/g, '-')}`} className="nav-item" title={item.name}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={item.icon} />
            </svg>
            {!isCollapsed && <span>{item.name}</span>}
          </a>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="more-menu">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          {!isCollapsed && <span>More</span>}
        </div>

        {!isCollapsed && (
          <div className="promo-card">
            <img src="" alt="Promo Banner" className="promo-img" />
          </div>
        )}

        <div className="user-profile">
          <div className="user-avatar">
            <img src="" alt="User" />
          </div>
          {!isCollapsed && (
            <div className="user-info">
              <span className="user-name">Zeeshan Ahmad</span>
              <span className="user-title">Indus Global Pvt Ltd Admin</span>
            </div>
          )}
          {!isCollapsed && (
            <div className="user-action">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
