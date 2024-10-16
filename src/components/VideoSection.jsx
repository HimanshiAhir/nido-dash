import React from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

// Section Wrapper for Video Section
const VideoSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '90px 24px 80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

// Button Wrapper for centering the button
const ButtonWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '24px', // Adjust margin for spacing
}));

const VideoSection = () => {
  return (
    <VideoSectionWrapper>
      {/* Video Element */}
      <video
        width="100%"
        preload="none"
        src={`${process.env.PUBLIC_URL}/assets/media/Video_3D_SitioWeb.mp4`}
        playsInline
        autoPlay
        muted
        loop
        aria-label="video about nido"
      ></video>

      {/* Button */}
      <ButtonWrap>
        <Button
          variant="contained"
          color="primary"
          href="#"
          sx={{
            padding: '12px 24px',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Interactúa con nuestro plano 3D
        </Button>
      </ButtonWrap>
    </VideoSectionWrapper>
  );
};

export default VideoSection;
