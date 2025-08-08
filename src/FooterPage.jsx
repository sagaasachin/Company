import React from 'react';
import { Box, Typography, IconButton, Stack, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e0e0e0',
        py: 3,
        mt: 5,
        textAlign: 'center',
      }}
    >
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 1 }}>
        <Link href="https://www.facebook.com" target="_blank" underline="none">
          <IconButton
            sx={{
              color: 'green',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#1b5e20',
              },
            }}
          >
            <FacebookIcon />
          </IconButton>
        </Link>
        <Link href="https://www.twitter.com" target="_blank" underline="none">
          <IconButton
            sx={{
              color: 'green',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#1b5e20',
              },
            }}
          >
            <TwitterIcon />
          </IconButton>
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" underline="none">
          <IconButton
            sx={{
              color: 'green',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#1b5e20',
              },
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com" target="_blank" underline="none">
          <IconButton
            sx={{
              color: 'green',
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                color: '#1b5e20',
              },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Link>
      </Stack>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} WebTech Solutions. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
