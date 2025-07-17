import { Outlet } from 'react-router-dom'
import SidebarNavigation from './SidebarNavigation'
import Navigation from './Navigation'
import { Box } from '@mui/material'

function Layout() {
  return (
    <Box style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* <Navigation /> */}
      <SidebarNavigation />
      <main style={{ 
        flex: 1, 
        marginTop: '64px', // Height of the AppBar
        paddingTop: '20px', // Additional spacing
        overflowY: 'auto',
        height: 'calc(100vh - 64px)'
      }}>
        <Outlet />
      </main>
    </Box>
  )
}

export default Layout 