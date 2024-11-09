import { Button } from '@mui/material'
import React from 'react'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import NavebarComp from './Component/NavebarComp/NavebarComp'

const theme = createTheme({
  // You can customize the theme here
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />  {/* To normalize styles */}
        <NavebarComp />  {/* Your component */}
      </ThemeProvider>
      {/* <NavebarComp/> */}
    </div>
  )
}
