import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import {CookiesProvider} from "react-cookie";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Typography from '@mui/material/Typography';

import Header from './components/basic/Header'
import Footer from './components/basic/Footer'

const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
    typography: {
      fontFamily: [
        'Helvetica Neue',
        'HelveticaNeue-Medium',
        'HelveticaNeue-Light',
        'Roboto',
        'sans-serif'
      ].join(','),
    },
  });

  return (
    // <CookiesProvider>
    <Router>
      <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <Typography variant="h1">React Project</Typography>
          <Footer />
        </ThemeProvider>
      </React.StrictMode>
    </Router>
    // </CookiesProvider> 
  )
}

export default App