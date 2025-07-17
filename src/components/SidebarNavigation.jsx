import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    IconButton,
    Box,
    Typography,
    Divider,
    Toolbar
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useResponsive } from '../hooks/useResponsive'
import { responsiveStyles, getResponsiveValue } from '../utils/responsiveStyles'

function SidebarNavigation() {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const { isMobile, getNavText } = useResponsive()

    const navItems = [
        { path: '/how-to-vote', text: getNavText('Vote', 'How to Vote'), color: 'secondary' },
        { path: '/solutions', text: 'Solutions', color: 'success' },
        { path: '/about', text: 'About Our Candidates', color: 'info' },
        { path: '/contact', text: 'Contact Us', color: 'warning' },
    ]

    const handleDrawerToggle = () => {
        setOpen(!open)
    }

    const handleNavClick = () => {
        setOpen(false)
    }

    const drawerWidth = 280

    const drawer = (
        <Box sx={{ width: drawerWidth }}>
            <Toolbar />
            <Box sx={{
                p: 2,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
            }}>
                <IconButton />
                <Typography
                    variant="h6"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: getResponsiveValue(responsiveStyles.fontSize.large, isMobile)
                    }}
                >
                    Navigation
                </Typography>
                <IconButton onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
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
                                    }
                                },
                                '&:hover': {
                                    backgroundColor: `${item.color}.light`,
                                    color: `${item.color}.dark`,
                                }
                            }}
                        >
                            <ListItemText
                                primary={item.text}
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontWeight: 'bold',
                                        fontSize: getResponsiveValue(responsiveStyles.fontSize.normal, isMobile)
                                    }
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                    mr: 2,
                    position: 'fixed',
                    top: 16,
                    left: 16,
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 1)',
                    }
                }}
            >
                <MenuIcon />
            </IconButton>

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
                        backgroundColor: 'background.paper'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    )
}

export default SidebarNavigation 