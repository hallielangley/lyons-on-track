import { Link, useLocation } from 'react-router-dom';

import { useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

import { NAV_ITEMS, PATHS } from '../routes/paths';

function SidebarNavigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = NAV_ITEMS;

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleNavClick = (event) => {
    // Remove focus from the clicked element first
    if (event.currentTarget) {
      event.currentTarget.blur();
    }
    
    // Close drawer with a tiny delay to allow navigation to complete
    setTimeout(() => {
      setOpen(false);
    }, 50);
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
          to={PATHS.HOME}
          variant="h6"
          sx={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          No Agenda. Here to Listen.
        </Typography>
        <IconButton component={Link} to={PATHS.HOW_TO_VOTE} color="inherit">
          <HowToVoteIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );

  const drawer = (
    <Box sx={{ width: drawerWidth }} role="navigation" aria-label="Main navigation">
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
          id="drawer-title"
          variant="h6"
          sx={{
            fontWeight: 'bold',
          }}
        >
          Navigation
        </Typography>
        <Box sx={{ width: 40 }} />
      </Box>
      <List id="drawer-description" sx={{ pt: 1 }}>
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
                  backgroundColor: 'primary.main',
                  color: 'white',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                },
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'primary.dark',
                },
              }}
            >
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    fontWeight: 'bold',
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
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
            disableEnforceFocus: true, // Prevent focus management conflicts
            disableAutoFocus: true, // Prevent auto focus issues
            disableRestoreFocus: true, // Prevent restore focus issues
          }}
          PaperProps={{
            'aria-labelledby': 'drawer-title',
            'aria-describedby': 'drawer-description',
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
      </Box>
    </>
  );
}

export default SidebarNavigation;
