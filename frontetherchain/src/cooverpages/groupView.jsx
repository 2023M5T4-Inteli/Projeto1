import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbar from '../components/Navbar/BackNavbar';
import { Link } from 'react-router-dom';
import { Divider, Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import '../components/App.css';

const button = {
  border: '1px solid',
  borderColor:'rgb(1, 1, 1, 0.5)',
  padding: 1.5,
  paddingLeft:2,
  borderRadius: '40px',
  // width:'46.5rem',
  width:'46.5rem',
  display:'flex', 
  justifyContent:'flex-start',

}
const button2 = {
  border: '1px solid',
  borderColor:'rgb(1, 1, 1, 0.5)',
  padding: 1.5,
  paddingLeft:2,
  paddingRight:1,
  borderRadius: '40px',
  // width:'46.5rem',
  width:'46.5rem',
  textAlign: 'left',
  mt:2,
  display:'flex', 
  justifyContent:'flex-start',
}
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  border: '1px solid',
  borderColor:'rgb(1, 1, 1, 0.5)',
  padding: theme.spacing(1.5),
  borderRadius: '24px',
  textAlign: 'left',
  '& h3': {
    marginBottom: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
  },
  '& p': {
    margin: 0,
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    fontSize: '20px'
  },
  '& button': {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    cursor: 'pointer',
    marginTop: theme.spacing(2),
  },
}));

export default function Grupos() {
  return (
    <Box sx={{ width: '100%', padding:'60px 0 0 10px' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        <BackNavbar/>
        <Grid item xs={12} md={6}>
            <h1 style={{justifyContent:'left', display:'flex', zIndex:1, position:'relative', fontFamily: 'Rubik'}}>Grupo 1</h1>
            <Divider sx={{mb:'15px'}}/>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
              Mínimo de membros: 35
            </p>
            </Item>
            <br>
            </br>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
              Taxa Administrativa: 10%
            </p>
            </Item>
            <br>
            </br>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
              Valor do seguro: R$ 10,00
            </p>
            </Item>
            <br>
            </br>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
               Cobertura do seguro: 10%
            </p>
            </Item>
            <br>
            </br>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
              Membros do Seguro: 
            </p>
            </Item>
            <br>
            </br>

            <Button sx={button}>
            <Link to='/requisicoes' style={{textDecoration:'none', fontFamily: 'Rubik'}}>Solicitações de entrada</Link>
            <Badge color="success" overlap="circular" badgeContent="1" sx={{ml:'100px', scale:'1.2',
            paddingRight:51
             }}/>
            </Button>
         
            <Button sx={button2}>
            
            <Link to='/indrequest' style={{textDecoration:'none', fontFamily: 'Rubik'}}>Solicitações de indenização</Link>
            <Badge color="error" overlap="circular" badgeContent="5" sx={{ml:'70px', scale:'1.2', 
            paddingRight:51
            }}/>
            </Button>
           
   

        </Grid>
      </Grid>
    </Box>
  );
}
