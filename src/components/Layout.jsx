import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import SidebarNavigation from './SidebarNavigation';

function Layout() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <SidebarNavigation />
      <main
        style={{
          flex: 1,
          marginTop: '64px', // Height of the AppBar
          paddingTop: 1, // Additional spacing
          overflowY: 'auto',
          height: 'calc(100vh - 64px)',
        }}
      >
        <Outlet />
      </main>
    </Box>
  );
}

export default Layout;
