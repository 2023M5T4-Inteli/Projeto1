import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Navbar from '../components/FloatingAction';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(2),
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
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        <Navbar />
        <Grid item xs={12} md={6}>
          <br />
          <br />
          <br />
          <br />
          <Item>
            <h2>Grupo Y</h2>
            <p>
              Mínimo de membros: 35
            </p>
            <p>
              Taxa Administrativa: 10%
            </p>
            <p>
              Valor do seguro: R$ 10,00
            </p>
            <p>
               Cobertura do seguro: 10%
            </p>
            <p>
              Membros do Seguro: 
            </p>
            <p>
              Solicitações para entrar:
            </p>
            <p>
              Pedidos de Indenização:  
               <button style={{ marginLeft: '10px' }}>
                    4
                </button>
            </p>
            </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
