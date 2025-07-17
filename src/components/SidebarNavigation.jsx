import { Link, useLocation } from 'react-router-dom';

import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import { useResponsive } from '../hooks/useResponsive';
import {
  getResponsiveValue,
  responsiveStyles,
} from '../utils/responsiveStyles';

function SidebarNavigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { isMobile, getNavText } = useResponsive();

  const navItems = [
    {
      path: '/how-to-vote',
      text: getNavText('Vote', 'How to Vote'),
      color: 'secondary',
    },
    { path: '/solutions', text: 'Solutions', color: 'success' },
    { path: '/about', text: 'About Our Candidates', color: 'info' },
    { path: '/contact', text: 'Contact Us', color: 'warning' },
  ];

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavClick = () => {
    setOpen(false);
  };

  const drawerWidth = 280;

  // App bar/header with MenuIcon, only when Drawer is closed
  const appBarHeader = (
    <AppBar>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            color: 'white',
            textDecoration: 'none',
            fontSize: getResponsiveValue(
              responsiveStyles.fontSize.large,
              isMobile
            ),
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          No Agenda. Here to Listen.
        </Typography>
        <IconButton component={Link} to="/how-to-vote" color="inherit">
          <HowToVoteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <Box sx={{ width: drawerWidth }}>
      <Box
        sx={{
          p: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        }}
      >
        <IconButton onClick={handleDrawerToggle} color="inherit">
          <CloseIcon />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: getResponsiveValue(
              responsiveStyles.fontSize.large,
              isMobile
            ),
          }}
        >
          Navigation
        </Typography>
        <Box sx={{ width: 40 }} />
      </Box>
      <List sx={{ pt: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              onClick={handleNavClick}
              selected={location.pathname === item.path}
              sx={{
                mx: 1,
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  backgroundColor: `${item.color}.main`,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: `${item.color}.dark`,
                  },
                },
                '&:hover': {
                  backgroundColor: `${item.color}.light`,
                  color: `${item.color}.dark`,
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
                    fontSize: getResponsiveValue(
                      responsiveStyles.fontSize.normal,
                      isMobile
                    ),
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {!open && appBarHeader}
      <Drawer
        variant="temporary"
        open={open}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            backgroundColor: 'background.paper',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

export default SidebarNavigation;
