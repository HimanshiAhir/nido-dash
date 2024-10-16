import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material';

const nidotheme = createTheme({
  palette: {
    primary: {
      main: '#012963',       // --color-primary
      dark: '#093988',       // --color-primary-bg
      contrastText: '#FFFFFF', // --color-white
    },
    secondary: {
      main: '#E50A0A',       // --color-primary-red
      dark: '#A20000',       // --color-dark-red
    },
    background: {
      default: '#F7F7F7',    // --color-light-gray
      paper: '#E8E8E8',      // --color-text-light
    },
    error: {
      main: '#BC0408',       // --color-dark-red
    },
  },
  typography: {
    fontFamily: 'Barlow, sans-serif;',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: 'none',
          boxShadow: 'none',
          outline: 'none',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          fontSize: '18px',
          lineHeight: '1',
          fontWeight: 600,
          color: theme.palette.primary.contrastText,  // Correct access to theme
          backgroundColor: theme.palette.secondary.dark,  
          borderWidth: '2px',
          borderStyle: 'solid',
          borderColor: 'transparent',
          padding: '12px 24px',
          minWidth: '124px',
          transition: '0.3s ease-in-out',
          position: 'relative',
          '&:hover': {
            backgroundColor: theme.palette.primary.contrastText,  // Correct access to theme
            color: theme.palette.secondary.dark,  // Correct access to theme
            borderColor: theme.palette.secondary.dark,  // Correct access to theme
          },
        }),
      },
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('nidoRoot'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={nidotheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
