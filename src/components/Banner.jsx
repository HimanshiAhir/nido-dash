import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, List, ListItem, Container } from '@mui/material';
import { styled } from '@mui/system';

// Hero Section Wrapper
const HeroSection = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  minHeight: '420px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
}));

// Video Styling
const HeroVideo = styled('video')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

// Logo Wrap
const LogoWrap = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  gap: '44px',
  maxWidth: '436px',
  color: '#FFFFFF',
  position: 'relative',
}));

// Logo Image
const LogoImage = styled('img')({
  width: '112px',
  display: 'inline-flex',
  flexShrink: 0,
});

// Slide Options List
const SlideOptionsList = styled(List)(({ theme }) => ({
  display: 'inline-flex',
  color: '#FFFFFF',
  listStyle: 'none',
  fontWeight: 600,
  fontSize: '26px',
  lineHeight: '0.96',
  width: '100%',
  maxWidth: '436px',
  justifyContent: 'space-between',
  gap: '32px',
  position: 'absolute',
  bottom: '120px',
  zIndex: 99,
  padding: 0,
}));

const SlideOption = styled(ListItem)(({ theme }) => ({
  padding: '16px 24px',
  borderBottom: '2px solid #FFFFFF',
  cursor: 'pointer',
  fontStyle: 'italic',
  justifyContent: 'center',
}));

// Slide Container
const Slide = styled(Box)(({ theme, background }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 99,
  display: 'none', // Default to hidden
  opacity: 0,
  visibility: 'hidden',
  transition: '0.2s all',
  color: '#FFFFFF',
  backgroundColor: '#080808',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  padding: '24px',
  '&.active': {
    opacity: 1,
    visibility: 'visible',
  },
}));

const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '400px',
  padding: '120px 4px 120px',
  alignItems: 'flex-start',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  lineHeight: '0.96',
  marginBottom: '18px',
  fontStyle: 'italic',
  fontWeight: 600,
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '1.3',
  fontWeight: 400,
  marginBottom: '26px',
}));

const BannerButton = styled(Button)(({ theme }) => ({
  boxShadow: '3px 3px 4px 0px rgba(0, 0, 0, 0.56)',
}));

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(null);

  const handleSlideEnter = (slideId) => {
    // Hide all slides instantly and remove active class
    setActiveSlide(slideId);

    setTimeout(() => {
      document.getElementById(slideId).classList.add('active');
    }, 100); // Add active class after 100ms
  };

  const handleSlideLeave = () => {
    // Remove 'active' class and hide the slides instantly
    document.querySelectorAll('.n-header-slide').forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('active');
    });
    setActiveSlide(null);
  };

  useEffect(() => {
    if (activeSlide) {
      const slideElement = document.getElementById(activeSlide);
      if (slideElement) {
        // Instantly display the slide
        slideElement.style.display = 'block';
      }
    }

    // Clean up if necessary
    return () => {
      if (activeSlide) {
        document.getElementById(activeSlide)?.classList.remove('active');
      }
    };
  }, [activeSlide]);

  return (
    <HeroSection onMouseLeave={handleSlideLeave}>
      {/* Video Background */}
      <HeroVideo
        preload="none"
        src={`${process.env.PUBLIC_URL}/assets/media/SitioWeb_Nido_Header_V3.mp4`}
        playsInline
        autoPlay
        muted
        loop
        aria-label="header video about nido"
      />

      {/* Logo and Title */}
      <LogoWrap>
        <LogoImage
          src={`${process.env.PUBLIC_URL}/assets/media/banner-icon.svg`}
          alt="Banner Icon"
        />
        <Typography variant="h2" sx={{ fontSize: '46px', fontWeight: 600, lineHeight: 1 }}>
          Aerotermia Fácil
        </Typography>
      </LogoWrap>

      {/* Slide Options */}
      <SlideOptionsList>
        <SlideOption onMouseEnter={() => handleSlideEnter('partners')}>
          Partners
        </SlideOption>
        <SlideOption onMouseEnter={() => handleSlideEnter('installation')}>
          Instaladores
        </SlideOption>
      </SlideOptionsList>

      {/* Slides */}
      <Slide id="partners" className="n-header-slide" background={`${process.env.PUBLIC_URL}/assets/media/partner-header.png`}>
        <Container>
          <ContentWrapper>
            <Heading>Partners</Heading>
            <Paragraph>
              Somos una empresa de software que facilita la cotización, diseño e instalación de Aerotermia. Nido surge con el propósito de impulsar la transición energética a través de la instalación de sistemas de aerotermia (bombas de calor) en viviendas residenciales.
            </Paragraph>
            <BannerButton variant="contained" color="primary">Descubre más</BannerButton>
          </ContentWrapper>
        </Container>
      </Slide>

      <Slide id="installation" className="n-header-slide" background={`${process.env.PUBLIC_URL}/assets/media/installation-header.png`}>
        <Container>
          <ContentWrapper>
            <Heading>Instaladores</Heading>
            <Paragraph>
              Somos una empresa de software que facilita la cotización, diseño e instalación de Aerotermia. Nido surge con el propósito de impulsar la transición energética a través de la instalación de sistemas de aerotermia (bombas de calor) en viviendas residenciales.
            </Paragraph>
            <BannerButton variant="contained" color="primary">Descubre más</BannerButton>
          </ContentWrapper>
        </Container>
      </Slide>
    </HeroSection>
  );
};

export default Banner;
