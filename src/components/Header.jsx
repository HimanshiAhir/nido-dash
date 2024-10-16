import React, { useState, useEffect } from 'react';
import { Box, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { alpha } from '@mui/material/styles';

// Custom styled header
const HeaderWrapper = styled(Box)(({ theme, isSticky }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 9999,
  transition: 'all 0.3s ease',
  backgroundColor: isSticky ? 'rgba(255, 255, 255, 0.75)' : 'transparent',
  backdropFilter: isSticky ? 'blur(10px)' : 'none',
}));

// Header inner container
const HeaderInner = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap',
  padding: '24px',
  width: '100%',
  maxWidth: '1240px',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.down('md')]: {
    gap: '16px'
  }
}));

// Logo styles
const LogoWrap = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  height: '42px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '38px',
  },
}));

const Logo = styled('img')(({ isSticky }) => ({
  height: '100%',
  opacity: isSticky ? 0 : 1,
  visibility: isSticky ? 'hidden' : 'visible',
  transition: 'opacity 0.3s ease, visibility 0.3s ease',
}));

const StickyLogo = styled('img')(({ isSticky }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  opacity: isSticky ? 1 : 0,
  visibility: isSticky ? 'visible' : 'hidden',
  transition: 'opacity 0.3s ease, visibility 0.3s ease',
}));

const LangButton = styled(Button)(({ theme }) => ({
  width: '42px',
  height: '42px',
  minWidth: 'auto !important',
  padding: '8px !important',
  borderRadius: '12px',
  backgroundColor: alpha(theme.palette.error.main, 0.1),  // Use palette color with alpha
  outline: 'none',
  boxShadow: 'none',
  border: 'none',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'background-color 0.3s ease',  // Smooth hover effect
  '&:hover': {
    backgroundColor: alpha(theme.palette.error.main, 0.1),  // Same color on hover
  },
}));

const LangIcon = styled('img')({
  width: '100%',
  maxHeight: '100%',
  objectFit: 'cover',
  objectPosition: 'left top',
  borderRadius: '2px',
});

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Handle scroll-based sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 400) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderWrapper isSticky={isSticky}>
      <HeaderInner>
        <LogoWrap href="/">
          <Logo
            src={`${process.env.PUBLIC_URL}/assets/media/logo.svg`}
            alt="Logo"
            isSticky={isSticky}
          />
          <StickyLogo
            src={`${process.env.PUBLIC_URL}/assets/media/logo-dark.svg`}
            alt="Sticky Logo"
            isSticky={isSticky}
          />
        </LogoWrap>

        <Button
          variant="contained"
          color="primary"
          sx={{
            marginLeft: 'auto',
          }}
        >
          Acceder
        </Button>

        <LangButton>
          <LangIcon
            src={`${process.env.PUBLIC_URL}/assets/media/flag_of_spain.svg`}
            alt="Language"
          />
        </LangButton>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
