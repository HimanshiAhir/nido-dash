import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

// Service Section Container
const SectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '96px 24px 40px 24px',
}));

// Content Wrapper for Partners and Installers
const ContentWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '864px',
  width: '100%',
  margin: '0 auto',
  gap: '48px 32px',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
}));

// Individual Partner and Installer Content
const ContentBlock = styled(Box)(({ theme }) => ({
  maxWidth: '354px',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
}));

// Headings for Partners and Installers
const Heading = styled(Typography)(({ theme }) => ({
  fontSize: '45px',
  fontWeight: 600,
  fontStyle: 'italic',
  color: theme.palette.error.main,
}));

// Description Text for Partners and Installers
const Description = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '20px',
  textAlign: 'justify',
  lineHeight: '26px',
}));

// View More Link
const ViewLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  gap: '10px',
  textDecoration: 'none',
}));

// View More Link Text with Underline
const LinkText = styled(Typography)(({ theme }) => ({
  fontSize: '21px',
  fontWeight: 700,
  lineHeight: '20.16px',
  borderBottom: `1px solid ${theme.palette.primary.main}`,
}));

// Arrow Icon for the Link
const ArrowIcon = styled('svg')({
  width: '20px',
  height: '20px',
});

const ServiceSection = () => {
  return (
    <SectionWrapper>
      <ContentWrap>
        {/* Partner Content */}
        <ContentBlock>
          <Heading>Partners</Heading>
          <Description>
            Somos una empresa de software que facilita la cotización, diseño e instalación de Aerotermia. Nido surge con el propósito de impulsar la transición energética a través de la instalación de sistemas de aerotermia (bombas de calor) en viviendas residenciales.
          </Description>
          <ViewLink href="#">
            <LinkText>Ver más</LinkText>
            <ArrowIcon viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z"
                fill="#093988"
                stroke="#093988"
                strokeWidth="2"
              />
              <path d="M7 5L12 9.5L7 14" stroke="white" strokeWidth="2" />
            </ArrowIcon>
          </ViewLink>
        </ContentBlock>

        {/* Installer Content */}
        <ContentBlock>
          <Heading>Instaladores</Heading>
          <Description>
            Somos una empresa de software que facilita la cotización, diseño e instalación de Aerotermia. Nido surge con el propósito de impulsar la transición energética a través de la instalación de sistemas de aerotermia (bombas de calor) en viviendas residenciales.
          </Description>
          <ViewLink href="#">
            <LinkText>Ver más</LinkText>
            <ArrowIcon viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z"
                fill="#093988"
                stroke="#093988"
                strokeWidth="2"
              />
              <path d="M7 5L12 9.5L7 14" stroke="white" strokeWidth="2" />
            </ArrowIcon>
          </ViewLink>
        </ContentBlock>
      </ContentWrap>
    </SectionWrapper>
  );
};

export default ServiceSection;
