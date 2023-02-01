import React, { ReactElement, useState, createContext, useContext} from 'react';
import { Grid } from "@mui/material";
// import DashboardIcon from "@mui/icons-material/Dashboard";
import {GridDividerHeader, 
    GridTitle, 
    DividerHeader,
    PaperDividerHeader,
    SpanIconTitle } from '../App.styles'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    primary: {
      main: '#888EA1',
    },
    secondary: {
      main: '#02DE82',
    },
  },
});

// import { IHeaderMenuProps } from "../../interfaces/components/IHeaderMenuProps";

export default function Navbar() {

    return ( 
        
    <>
    <ThemeProvider theme={tema}>
    <PaperDividerHeader>
    <GridDividerHeader style={{}}>

    <Stack spacing={4} direction="row">
      <Button variant='text' >Início</Button>
      <Button variant='text'   >Sobre nós</Button>
      <Button variant='text' >Ajuda</Button>
    </Stack>
      
    <Stack spacing={2} direction="row">
      <Button variant='contained' color='secondary'>
        <div style={{color:'white', fontWeight:'bold'}}>Começar</div></Button>
    </Stack>

    </GridDividerHeader>
    </PaperDividerHeader>
    </ThemeProvider>
    
    </>
      

    );
}

