import React, { useEffect } from 'react';
import { Box, Typography, Container, useTheme, useMediaQuery } from '@mui/material';
import visionImage from './assets/vision.jpg'; // Replace with your actual image path
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurVisionPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Left Side - Image */}
          <Box
            component="img"
            src={visionImage}
            alt="Our Vision"
            data-aos="fade-right"
            data-aos-duration="1200"
            sx={{
              width: { xs: '100%', md: '50%' },
              height: { xs: '300px', md: '700px'},
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />

          {/* Right Side - Text Content */}
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              id="our vision"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              Our Vision
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              At WebTech Solutions, our vision is to empower businesses across the globe through innovative digital solutions.
              We aim to bridge the gap between technology and creativity, delivering websites, digital marketing, and design
              services that not only look great but also perform exceptionally.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              paragraph
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              We envision a digital future where every brand—regardless of size—has the tools, strategies, and presence
              needed to thrive in an ever-changing online world. Our commitment to quality, creativity, and integrity drives us forward.
            </Typography>

            {/* Bold Questions */}
            <Box sx={{ mt: 4 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Why are we here?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                We are here to help brands grow online with impactful design, performance-focused websites,
                and smart digital marketing. Our purpose is to simplify the digital transformation journey for businesses of all sizes.
              </Typography>
            </Box>

            <Box sx={{ mt: 3 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                gutterBottom
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                What can we do?
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                From custom websites and e-commerce platforms to SEO, social media campaigns, and branding—our team is equipped
                to deliver complete digital experiences that captivate and convert.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurVisionPage;
