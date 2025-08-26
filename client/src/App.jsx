import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Profile } from './pages';

const App = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024); // lg breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="relative bg-[#13131a] min-h-screen flex flex-row">
      
      {/* Sidebar - hidden on mobile, visible on desktop */}
      {isDesktop && (
        <div className="h-screen mr-10">
          <Sidebar />
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 max-w-[1280px] mx-auto p-4 lg:p-8">
        <Navbar isDesktop={isDesktop} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
