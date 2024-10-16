import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';

// Key Metric Section Wrapper
const KeyMetricSectionWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  backgroundPosition: 'top',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  padding: '80px 24px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    height: '10px',
    width: '100%',
    bottom: 'calc(100% - 1px)',
    left: 0,
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/media/wave-bg.svg)`
  },
}));

// Metric Content Wrapper
const MetricContentWrap = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1100px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
}));

// Individual Metric Block
const MetricBlock = styled(Box)(({ theme }) => ({
  width: '28%',
  textAlign: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

// Metric Heading
const MetricHeading = styled(Typography)(({ theme }) => ({
  fontSize: '120px',
  fontWeight: 900,
  color: theme.palette.error.main, // Assuming --color-primary-red is error.main
  letterSpacing: '-0.32px',
  [theme.breakpoints.down('md')]: {
    fontSize: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '64px',
  },
}));

// Metric Description
const MetricDesc = styled(Typography)(({ theme }) => ({
  fontSize: '25px',
  fontWeight: 800,
  color: theme.palette.primary.contrastText, // Assuming --color-white is primary.contrastText
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    fontSize: '22px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

// Divider Component between metrics
const StyledDivider = styled(Divider)(({ theme }) => ({
  height: '60px',
  backgroundColor: theme.palette.primary.contrastText, // Assuming --color-white is primary.contrastText
  width: '2px',
  [theme.breakpoints.down('sm')]: {
    height: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const KeyMetricSection = () => {
  return (
    <KeyMetricSectionWrapper>
      <MetricContentWrap>
        {/* First Metric */}
        <MetricBlock>
          <MetricHeading component="h3">30"</MetricHeading>
          <MetricDesc>
            Para generar una <br /> oferta vinculante
          </MetricDesc>
        </MetricBlock>

        {/* Divider */}
        <StyledDivider orientation="vertical" flexItem />

        {/* Second Metric */}
        <MetricBlock>
          <MetricHeading component="h3">50%</MetricHeading>
          <MetricDesc>
            de aumento de <br /> conversión a venta
          </MetricDesc>
        </MetricBlock>

        {/* Divider */}
        <StyledDivider orientation="vertical" flexItem />

        {/* Third Metric */}
        <MetricBlock>
          <MetricHeading component="h3">20%</MetricHeading>
          <MetricDesc>
            de ahorro en <br /> materiales
          </MetricDesc>
        </MetricBlock>
      </MetricContentWrap>
    </KeyMetricSectionWrapper>
  );
};

export default KeyMetricSection;
