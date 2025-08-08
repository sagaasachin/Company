import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container
} from '@mui/material';
import a1 from './assets/fe.jpg';
import a2 from './assets/be.jpg';
import a3 from './assets/ui ux.jpg';
import a4 from './assets/ve.jpg';
import a5 from './assets/gd.jpg';
import a6 from './assets/dm.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experts = [
  {
    image: a1,
    heading: 'Frontend Developer',
    description: 'Responsive and interactive UI with React.'
  },
  {
    image: a2,
    heading: 'Backend Specialist',
    description: 'Secure and scalable backend with Node.js.'
  },
  {
    image: a3,
    heading: 'UI/UX Designer',
    description: 'Beautiful and intuitive design experiences.'
  },
  {
    image: a6,
    heading: 'Digital Marketing Specialist',
    description: 'Boost your online visibility with strategy.'
  },
  {
    image: a5,
    heading: 'Graphic Designer',
    description: 'Creative visuals for your brand identity.'
  },
  {
    image: a4,
    heading: 'Video Editing Expert',
    description: 'Professional and engaging video content.'
  }
];

const ExpertPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <Box sx={{ pt: 10, pb: 5, backgroundColor: '#f5f5f5', minHeight: '100vh', overflow: 'hidden' }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" gutterBottom color="green">
          Our Experts
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {experts.map((expert, index) => (
            <Grid item key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              <Card
                sx={{
                  height: 400,
                  width: 400,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(3, 3, 3, 0.8)',
                    overflow: 'hidden'
                  },
                  borderRadius: 3,
                  backgroundColor: '#ffffff',
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                <Box sx={{ position: 'relative', height: 400 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={expert.image}
                    alt={expert.heading}
                    sx={{ objectFit: 'cover', height: '100%' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      color: 'white',
                      px: 2,
                      py: 3
                    }}
                  >
                    <Typography variant="h6" fontWeight="bold">
                      {expert.heading}
                    </Typography>
                    <Typography variant="body2">
                      {expert.description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExpertPage;
