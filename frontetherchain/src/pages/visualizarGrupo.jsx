import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import { auto } from 'async';

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(1),
  borderRadius: '4px',
  textAlign: 'left',
}));

export default function Grupos() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 450, sm: 50, md: 10 }}>
        <Grid xs={6}>
            <h2>
                Grupo Y
            </h2>
          <Item>
            Minímo de membros = 35
          </Item>
          <Item>
            Taxa Administrativa: 10%
          </Item>
          <Item>
            Valor do seguro: R$ 10,00
          </Item>
          <Item>
            Cobertura do seguro: 10%
          </Item>
          <Item>
            Membros do Seguros
          </Item>
          <Item>
            Solicitações para entrar
          </Item>
          <Item>
            Pedidos de Indenização
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}