import React, { useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Container,
} from '@mui/material';

import AOS from 'aos';
import 'aos/dist/aos.css';

import e1 from './assets/ee.jpg';
import e2 from './assets/port.jpg';
import e3 from './assets/e3.jpg';
import e4 from './assets/dash.jpg';

// Project data array
const projects = [
  {
    image: e1,
    title: 'E-commerce Platform',
    description: 'Developed a full-stack e-commerce solution with user authentication, cart system, and secure payments.',
    link: '#'
  },
  {
    image: e2,
    title: 'Portfolio Website',
    description: 'Built a personal portfolio for a designer with animations, project galleries, and contact integration.',
    link: '#'
  },
  {
    image: e3,
    title: 'Landing Page',
    description: 'Created a high-conversion landing page for a digital campaign using optimized layout and SEO practices.',
    link: '#'
  },
  {
    image: e4,
    title: 'Stock Maintenance',
    description: 'Designed and developed a dynamic dashboard with charts, filters, and real-time analytics using React.',
    link: 'https://stockmaintain.netlify.app/'
  }
];

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <Box sx={{ pt: 10, pb: 5, backgroundColor: '#f9f9f9', minHeight: '100vh', }}>
      <Container maxWidth="xl">
        <Typography variant="h4" align="center" gutterBottom color="green">
          Our Projects
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {projects.map((project, index) => (
            <Grid
              item
              key={index}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-duration="900"
              data-aos-once="false"
              
            >
              <Card
                sx={{
                  width: 350,
                  minHeight: 460,
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  background: '#fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  transition: 'transform 0.4s, box-shadow 0.4s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 30px rgba(0, 128, 0, 0.3)',
                    '& .hover-button': {
                      opacity: 1,
                      transform: 'translateY(0)'
                    }
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="300"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    px: 3,
                    pb: 6,
                    pt: 3
                  }}
                >
                  <Box>
                    <Typography variant="h6" color="green" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </Box>
                </CardContent>

                {/* Hover Button */}
                <Box
                  className="hover-button"
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    left: 16,
                    right: 16,
                    textAlign: 'center',
                    opacity: 0,
                    transform: 'translateY(20px)',
                    transition: 'opacity 0.3s ease, transform 0.3s ease'
                  }}
                >
                  <Typography
                    component="a"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'inline-block',
                      color: 'green',
                      border: '1px solid green',
                      borderRadius: '8px',
                      padding: '6px 16px',
                      fontWeight: 'bold',
                      textDecoration: 'none',
                      fontSize: '15px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'green',
                        color: 'white',
                        textDecoration: 'none'
                      }
                    }}
                  >
                    Visit the Site
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectPage;
