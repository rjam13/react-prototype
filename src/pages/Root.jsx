import React from 'react'
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/basic/Header'
import Footer from '../components/basic/Footer'

const Root = () => {
  const headerHeight = "4.3rem";

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff3366',
      },
      secondary: {
        main: '#fff',
      },
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
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />     
        <Header height={headerHeight}/>
        <Box id="detail" sx={{mt: headerHeight}}>
          <Outlet />
        </Box>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default Root