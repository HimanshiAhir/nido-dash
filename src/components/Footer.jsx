import React from 'react';
import { Box, Container, Typography, Link as MuiLink, Divider, Button } from '@mui/material';
import { styled } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled('footer')({
  backgroundColor: '#243C84',
  color: '#ffffff',
});

const FooterRow = styled('section')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '32px 24px',
  padding: '54px 0',
});

const FooterColumn = styled(Box)({
  width: '100%',
  maxWidth: '338px',
  flexShrink: 0,
});

const LogoWrap = styled(Box)({
  width: '200px',
  marginBottom: '12px',
});

const MadeByWrap = styled(Box)({
  marginTop: '42px',
  marginBottom: '34px',
});

const MadeByLogo = styled('img')({
  height: '30px',
  display: 'flex',
  margin: '8px 4px',
});

const IVFLogo = styled('img')({
  height: '80px',
  display: 'flex',
  marginBottom: '12px',
});

const MenuColumn = styled(Box)({
  width: '100%',
  maxWidth: '178px',
  marginRight: 'auto',
});

const AddressColumn = styled(Box)({
  width: '100%',
  maxWidth: '272px',
});

const LinksColumn = styled(Box)({
  width: '100%',
  maxWidth: '292px',
});

const FooterTitle = styled(Typography)({
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '35px',
  marginBottom: '17px',
});

const FooterText = styled(Typography)({
  fontSize: '17px',
  marginBottom: '12px',
});

const FooterNav = styled('ul')({
  listStyle: 'none',
  marginBottom: '8px',
});

const FooterNavItem = styled('li')({
  marginBottom: '14px',
  '& a': {
    fontSize: '17px',
    lineHeight: '20px',
    paddingTop: '6px',
    paddingBottom: '6px',
    display: 'flex',
    width: '100%',
    color: '#ffffff',
    transition: '0.2s',
    textDecoration: 'none',
    '&:hover': {
      transform: 'scale(1.01)',
    },
  },
});

const SocialWrap = styled(Box)({
  marginTop: "24px",
});

const SocialList = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
});

const SocialIcon = styled(Box)({
  textDecoration: "none",
  height: "50px",
  width: "50px",
  flexShrink: 0,
  borderRadius: "6px",
  backgroundColor: "rgb(190, 0, 0)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "25px",
  lineHeight: "25px",
  color: "#ffffff",
  transition: "0.2s",
  "&:hover": {
    opacity: 0.9,
  },
});

const StickyCTA = styled(MuiLink)({
  position: 'fixed',
  right: '24px',
  bottom: '24px',
  width: '60px',
  zIndex: 999,
  height: '60px',
  borderRadius: '60px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#25d366',
  color: '#fff',
  fontSize: '40px',
  '&:hover': {
    opacity: 0.9,
  },
});

const FooterBottom = styled(Box)({
  paddingTop: '30px',
  paddingBottom: '30px',
  borderTop: '1px solid #e4e4e4',
});

const Footer = () => {
  return (
    <FooterSection>
      <Container maxWidth="lg">
        <FooterRow>
          <FooterColumn className="n-footer-first-col">
            <LogoWrap className="n-footer-logo-wrap">
              <img src={`${process.env.PUBLIC_URL}/assets/media/logo-mono.svg`} alt="nido dark logo" style={{ width: '100%' }} />
            </LogoWrap>
            <FooterText>Soluciones de climatización<br />por aerotermia.</FooterText>
            <MadeByWrap className="n-footer-madeby-wrap">
              <FooterText>Una iniciativa de:</FooterText>
              <MadeByLogo src={`${process.env.PUBLIC_URL}/assets/media/zubi-labs-logo.png`} alt="zubi labs logo" />
              <FooterText>Made with ♥ from Spain</FooterText>
            </MadeByWrap>
            <IVFLogo src={`${process.env.PUBLIC_URL}/assets/media/logo-institut-valencia-finances.svg`} alt="IVF logo" />
            <FooterText>Con el soporte del IVF.</FooterText>
          </FooterColumn>

          <MenuColumn className="n-footer-menu-col">
            <FooterTitle>Mapa web</FooterTitle>
            <FooterNav>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Aerotermia
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Blog
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  FAQS
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Instaladores
                </MuiLink>
              </FooterNavItem>
            </FooterNav>
            <Button
              href="https://app.gonido.com/form/"
              variant="contained"
              size="small"
              sx={{ fontSize: '16px', padding: '10px 20px'}}
              disableRipple
              disableElevation
            >
              Calcula tu ahorro
            </Button>
          </MenuColumn>

          <AddressColumn className="n-footer-address-col">
            <FooterTitle>Contacto</FooterTitle>
            <FooterText className="n-compnay-name">Build Tech Energy S.L.</FooterText>
            <Divider className="n-hr-light" sx={{ borderColor: 'rgba(255, 255, 255, 0.8)' }} />
            <Box className="n-address-wrap" sx={{ marginTop: '16px', marginBottom: '16px' }}>
              <FooterText component="address" sx={{ paddingTop: '6px', lineHeight: '20px', fontStyle: 'normal' }}>
                C. de Eloy Gonzalo 27
                <br />28010 Madrid
              </FooterText>
              <br />
              <FooterText component="address" sx={{ paddingTop: '6px', lineHeight: '20px', fontStyle: 'normal'}}>
                Paseo de las Facultades 3
                <br />46021 Valencia, España
              </FooterText>
            </Box>
          </AddressColumn>

          <LinksColumn className="n-footer-links-col">
            <FooterTitle>Legal</FooterTitle>
            <FooterNav>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Aviso legal
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Política de privacidad
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Uso de cookies
                </MuiLink>
              </FooterNavItem>
              <FooterNavItem>
                <MuiLink href="#" color="inherit" underline="none" sx={{ paddingLeft: 0, paddingRight: 0 }}>
                  Política de privacidad Instaladores
                </MuiLink>
              </FooterNavItem>
            </FooterNav>

            <SocialWrap className="n-social-wrap">
                <FooterText sx={{ opacity: '0.9'}}>Síguenos en redes sociales</FooterText>
                <SocialList className="n-social-list">
                    <MuiLink href="#" sx={{ textDecoration: 'none' }}>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </SocialIcon>
                    </MuiLink>
                    <MuiLink href="#" sx={{ textDecoration: 'none' }}>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faFacebook} />
                    </SocialIcon>
                    </MuiLink>
                    <MuiLink href="#" sx={{ textDecoration: 'none' }}>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                    </MuiLink>
                </SocialList>
            </SocialWrap>
          </LinksColumn>
        </FooterRow>
        <FooterBottom>
          <Typography align="center" sx={{ fontSize: '16px', lineHeight: '34px', marginBottom: '14px' }}>
            &copy; 2024 Nido
          </Typography>
        </FooterBottom>
      </Container>
      <StickyCTA href="https://wa.me/+123456789">
        <FontAwesomeIcon icon={faWhatsapp} />
      </StickyCTA>
    </FooterSection>
  );
};

export default Footer;
