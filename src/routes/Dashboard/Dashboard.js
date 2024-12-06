import React, { useState } from 'react';
import { Box } from '@mui/material';
import Navbar from '../../components/NavbarDash'; 
import Home from '../Home/Home';
import Sidebar from '../../components/Sidebar'; 
import Movements from '../Movements/Movements';
import Profile from '../Profile/Profile'; // Import the Profile page

const Dashboard = () => {
  // State to track the currently active page
  const [activePage, setActivePage] = useState('home'); // Default to "home"

  // Function to handle navigation
  const handleNavigation = (page) => {
    setActivePage(page);
  };

  const showPerfil = () => {
    setActivePage('profile');
  }

  // Render the active component dynamically
  const renderContent = () => {
    switch (activePage) {
      case 'home':
        return <Home showPerfil={showPerfil} />;
      case 'movements':
        return <Movements />;
      case 'profile':
        return <Profile />;
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Navbar */}
      <Navbar onNavigate={handleNavigation} handleProfileClick={showPerfil} />

      {/* Dashboard Container */}
      <Box sx={{ display: 'flex', height: 'calc(100vh - 105px)' }}>
        {/* Sidebar */}
        <Sidebar onNavigate={handleNavigation} />

        {/* Main Area */}
        <Box
          sx={{
            flex: 1,
            marginLeft: '350px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            boxShadow: 2,
            padding: '20px',
            overflowY: 'auto',
            height: 'calc(100vh - 105px)',
            marginRight: '25px',
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
