import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import FaceCard from '../components/FaceCard';
import RightSidebar from '../components/RightSidebar';
import GoTonight from '../components/GoTonight';
import Verification from '../components/Verification';
import Verification2 from '../components/Verification2';
import Verification3 from '../components/Verification3';
import Verification4 from '../components/Verification4';

const FreeBids = () => {
  const [isGoTonightOpen, setIsGoTonightOpen] = useState(false);
  const [isVerificationOpen, setIsVerificationOpen] = useState(false);
  const [isVerification2Open, setIsVerification2Open] = useState(false);
  const [isVerification3Open, setIsVerification3Open] = useState(false);
  const [isVerification4Open, setIsVerification4Open] = useState(false);

  const handleMakeMove = () => {
    setIsGoTonightOpen(false);
    setIsVerificationOpen(true);
  };

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
      <main className="flex-1 h-screen overflow-y-auto flex justify-center bg-transparent scrollbar-none">
        <FaceCard onGoTonight={() => setIsGoTonightOpen(true)} />
      </main>
      <RightSidebar onVerify={() => setIsVerificationOpen(true)} />
      
      <GoTonight 
        isOpen={isGoTonightOpen} 
        onClose={() => setIsGoTonightOpen(false)}
        onMakeMove={handleMakeMove}
      />

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

export default FreeBids;
