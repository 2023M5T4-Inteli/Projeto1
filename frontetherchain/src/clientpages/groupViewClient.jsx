import * as React from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbarClient from '../components/Navbar/BackNavbarClient';
import { Link } from 'react-router-dom';
import { Divider, Button, Modal, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';

const modalContent = (
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 24, padding: '20px', width: '300px', borderRadius: '24px', background: 'white', display:'flex', justifyContent:'center', flexDirection:'column', }}>
    <Typography variant="h6" component="h2" gutterBottom>
      Sua solicitação foi enviada com sucesso!
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Nosso time irá analisá-la e você receberá o resultado na aba de notificações.
    </Typography>
    <Button >
      <Link to='/gruposclient2' style={{ textDecoration: 'none', color: 'black' }}>
        Entendi
      </Link>
    </Button>
  </Box>
);

const button2 = {
  border: '1px solid',
  borderColor: 'rgba(2, 222, 130, 0.6)',
  backgroundColor: 'rgba(2, 222, 130, 0.1)',
  padding: 1.5,
  paddingLeft: 2,
  borderRadius: '40px',
  width: '17rem',
  ml: 5,
  mt: 2,
  display: 'flex',
  justifyContent: 'center',
}
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

export default function GruposClient() {
  const [openModal, setOpenModal] = React.useState(false);
  return (
    <>
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {modalContent}
      </Modal>
      <Box sx={{ width: '100%', padding: '60px 0 0 10px' }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          <BackNavbarClient />
          <Grid item xs={12} md={6}>
            <h1 style={{ justifyContent: 'center', display: 'flex', zIndex: 1, position: 'relative' }}>Grupo 1</h1>
            <Divider sx={{ mb: '15px' }} />
            <Item>
              <p>
                Mínimo de membros: 35
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Taxa Administrativa: 10%
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Valor do seguro: R$ 10,00
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Cobertura do seguro: 10%
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Membros do Seguro:
              </p>
            </Item>
            <br>
            </br>

            <Button sx={button2} onClick={() => setOpenModal(true)}>
              {/* <Link to='/indrequestclient' style={{textDecoration:'none', color:'black'}}> */}
              Solicitar entrada
              {/* </Link> */}
            </Button>



          </Grid>
        </Grid>
      </Box>
    </>
  );
}
