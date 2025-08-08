// HeaderPage.jsx
import React, { useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './assets/logo.jpg';
import image from './assets/wall1.jpg';

// Sections
import OurVisionPage from './OurVisionPage';
import ExpertPage from './Expertpage';
import ProjectPage from './projectpage';
import ContactPage from './ContactPage';

const HeaderPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Section refs
  const homeRef = useRef(null);
  const visionRef = useRef(null);
  const expertRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { label: 'Home', ref: homeRef },
    { label: 'Our Vision', ref: visionRef },
    { label: 'Expertise', ref: expertRef },
    { label: 'Projects', ref: projectRef },
    { label: 'Connect', ref: contactRef }
  ];

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  const scrollToSection = (ref) => {
    setDrawerOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Navbar */}
      <AppBar position="fixed" color="default" elevation={2}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)} sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
            <img src={logo} alt="Company Logo" style={{ width: 50, height: 50, marginRight: 10 }} />
            <Typography variant="h6">WebTech Solutions</Typography>
          </Box>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' }, color: 'text.primary' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.ref)}
                sx={{
                  color: 'black', // Text color
                  '&:hover': { color: 'gray' }
                }}
              >
                {item.label}
              </Button>
            ))}
            <a href="tel:+1234567890" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="success">Call Now</Button>
            </a>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer (Mobile) */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => scrollToSection(item.ref)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <Divider />
            <ListItem disablePadding sx={{ mt: 1, px: 2 }}>
              <a href="tel:+1234567890" style={{ width: '100%', textDecoration: 'none' }}>
                <Button fullWidth variant="contained" color="success">Call Now</Button>
              </a>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Sections */}
      <Box ref={homeRef} sx={{ pt: 10 }}>
        <Box sx={{ position: 'relative' }}>
          <img src={image} alt="Banner" style={{ width: '100%', height: 'auto', display: 'block' }} />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: 3,
              borderRadius: 2,
              textAlign: 'center',
              maxWidth: '90%',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Building the Web, One Pixel at a Time
            </Typography>
            <Typography variant="body1">
              Your trusted partner in web development, marketing, and creative design.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box ref={visionRef}>
        <OurVisionPage />
      </Box>

      <Box ref={expertRef}>
        <ExpertPage />
      </Box>

      <Box ref={projectRef}>
        <ProjectPage />
      </Box>

      <Box ref={contactRef}>
        <ContactPage />
      </Box>
    </div>
  );
};

export default HeaderPage;
