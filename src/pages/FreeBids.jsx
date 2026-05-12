import React from 'react';
import Sidebar from '../components/Sidebar';
import FaceCard from '../components/FaceCard';
import RightSidebar from '../components/RightSidebar';
import './FreeBids.css';

const FreeBids = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <main className="main-content">
        <FaceCard />
      </main>
      <RightSidebar />
    </div>
  );
};

export default FreeBids;
