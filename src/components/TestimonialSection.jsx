import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import { styled, textAlign } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Section Wrapper for Testimonials
const TestimonialsSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(247, 247, 247)', // --color-light-gray
  padding: '80px 24px',
}));

// Content Wrapper
const TestimonialsContent = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '740px',
  margin: '0 auto',
  display: 'flex',
  gap: '36px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
}));

// Heading for Testimonials
const TestimonialHeading = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: 600,
  fontStyle: 'italic',
  color: 'rgb(162, 0, 0)', // --color-dark-red
}));

// Testimonial Wrap for Slick Slider
const TestimonialWrap = styled(Box)(({ theme }) => ({
  maxWidth: '430px',
  margin: '0 auto',
  '& .slick-dots': {
    listStyle: 'none',
    padding: 0,
    margin: '28px 0 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    position: 'relative',

    [theme.breakpoints.up('md')]: {
      marginLeft: '-24px',
      textAlign: 'left',
    },
  },
  '& .slick-dots li': {
    width: 'auto',
    height: 'auto',
  },
  '& .slick-dots li button': {
    fontSize: 0,
    width: '8px',
    height: '8px',
    borderRadius: '8px',
    backgroundColor: 'rgb(1, 41, 99)', // --color-primary
    border: 'none',
  },
  '& .slick-dots li button:before': {
    display: 'none',
  },
  '& .slick-dots li.slick-active button': {
    backgroundColor: 'rgba(1, 41, 99, 0.38)', // --color-primary with 38% opacity
  },
}));

// Individual Testimonial Item
const TestimonialItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '26px',
}));

// Client Info Section
const ClientInfo = styled(Box)(({ theme }) => ({
  marginTop: '20px',
}));

// Client Name
const ClientName = styled(Typography)(({ theme }) => ({
  fontSize: '15px',
  fontWeight: 700,
  color: 'rgb(9, 57, 136)', // --color-primary-bg
}));

// Description Text
const TestimonialDesc = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontStyle: 'italic',
  color: 'rgb(9, 57, 136)', // --color-primary-bg
}));

// About Client Text
const AboutClient = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  fontStyle: 'italic',
  color: 'rgb(9, 57, 136)', // --color-primary-bg
}));

const TestimonialSection = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
    infinite: true,
  };

  return (
    <TestimonialsSectionWrapper>
      <TestimonialsContent>
        <TestimonialHeading>¿Qué opinan nuestros clientes?</TestimonialHeading>
        <TestimonialWrap>
          <Slider {...settings}>
            {/* Testimonial 1 */}
            <TestimonialItem>
              <TestimonialDesc>
                ¡No he tenido que preocuparme por nada! Desde el primer momento demostraron una gran profesionalidad y rapidez en las gestiones.
              </TestimonialDesc>
              <ClientInfo>
                <ClientName>Susana Martín</ClientName>
                <AboutClient>Paracuellos de Jarama, Madrid</AboutClient>
              </ClientInfo>
            </TestimonialItem>

            {/* Testimonial 2 */}
            <TestimonialItem>
              <TestimonialDesc>
                ¡No he tenido que preocuparme por nada! Desde el primer momento demostraron una gran profesionalidad y rapidez en las gestiones.
              </TestimonialDesc>
              <ClientInfo>
                <ClientName>Susana Martín</ClientName>
                <AboutClient>Paracuellos de Jarama, Madrid</AboutClient>
              </ClientInfo>
            </TestimonialItem>

            {/* Testimonial 3 */}
            <TestimonialItem>
              <TestimonialDesc>
                ¡No he tenido que preocuparme por nada! Desde el primer momento demostraron una gran profesionalidad y rapidez en las gestiones.
              </TestimonialDesc>
              <ClientInfo>
                <ClientName>Susana Martín</ClientName>
                <AboutClient>Paracuellos de Jarama, Madrid</AboutClient>
              </ClientInfo>
            </TestimonialItem>
          </Slider>
        </TestimonialWrap>
      </TestimonialsContent>
    </TestimonialsSectionWrapper>
  );
};

export default TestimonialSection;
