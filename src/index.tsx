import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C7FFF',
      contrastText: '#fff',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: 'Apple SD Gothic Neo',
    h3: {
      fontWeight: 700,
      fontSize: '20px',
      lineHeight: '27px',
    },
    h4: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '14px',
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '18px',
    },
    caption: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '17px',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: 'Apple SD Gothic Neo',
          maxWidth: '640px',
          margin: '0 auto',
          padding: '0 16px',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
