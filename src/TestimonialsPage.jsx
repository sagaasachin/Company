import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Allan Collins',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'I’ve been working with these guys for a long time and I can say that my house is in the perfect hands.'
  },
  {
    name: 'Clay Washington',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    feedback:
      'Working with WebTech is just great, every problem in my project is solved in a matter of days.'
  },
  {
    name: 'Tanya Grant',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    feedback:
      'Once a bug appeared in my app and hours later it was already fixed, thanks to WebTech.'
  },
  {
    name: 'Allan Collins',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    feedback:
      'I’ve been working with these guys for a long time and I can say that my house is in the perfect hands.'
  },
  {
    name: 'Clay Washington',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    feedback:
      'Working with WebTech is just great, every problem in my project is solved in a matter of days.'
  },
];

const TestimonialsPage = () => {
  return (
    <Box sx={{ backgroundColor: '#f0fdf4', py: 8, textAlign: 'center' }}>
      <Typography variant="h4" color="green" mb={4}>
        What our clients say about us.
      </Typography>

      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 }
        }}
        style={{ paddingBottom: '50px' }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                width: 300,
                height: 200,
                mx: 'auto',
                p: 2,
                backgroundColor: '#e8f5e9',
                borderRadius: 2,
                boxShadow: '0 4px 16px rgba(0, 128, 0, 0.2)',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.1)'
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'left'
              }}
            >
              <Box>
                <FormatQuoteIcon sx={{ fontSize: 30, color: 'green' }} />
                <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                  “{testimonial.feedback}”
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mt={2}>
                <Avatar src={testimonial.image} sx={{ width: 40, height: 40, mr: 1 }} />
                <Typography variant="subtitle2" color="green">
                  {testimonial.name}
                </Typography>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dot Styling */}
      <style>{`
        .swiper-pagination {
          position: absolute;
          bottom: 10px;
        }
        .swiper-pagination-bullet {
          background-color: #c8e6c9;
          opacity: 1;
          width: 10px;
          height: 10px;
          margin: 0 4px !important;
        }
        .swiper-pagination-bullet-active {
          background-color: green;
        }
      `}</style>
    </Box>
  );
};

export default TestimonialsPage;
