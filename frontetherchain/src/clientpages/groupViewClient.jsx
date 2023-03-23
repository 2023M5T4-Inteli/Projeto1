import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbarClient from '../components/Navbar/BackNavbarClient';
import { Link } from 'react-router-dom';
import { Divider, Button, Modal, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import erc20ABI from "../erc20ABI.json"
import Web3 from 'web3';

const modalContent = (
  <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', boxShadow: 24, padding: '20px', width: '300px', borderRadius: '24px', background: 'white', display:'flex', justifyContent:'center', flexDirection:'column', }}>
    <Typography style={{ fontFamily: 'Rubik' }} variant="h6" component="h2" gutterBottom>
      Sua solicitação foi enviada com sucesso!
    </Typography>
    <Typography style={{ fontFamily: 'Rubik' }} variant="body1" sx={{ mb: 2 }}>
      Nosso time irá analisá-la e você receberá o resultado na aba de notificações.
    </Typography>
    <Button >
      <Link to='/gruposclient2' style={{fontFamily: 'Rubik', textDecoration: 'none', color: 'black' }}>
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
  color:'black',
  fontWeight:'bold',
  width: '17rem',
  // mt: 2,
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
  fontFamily: 'Rubik',
  '& h3': {
    marginBottom: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    fontFamily: 'Rubik',
  },
  '& p': {
    margin: 0,
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    fontSize: '20px',
    fontFamily: 'Rubik'
  },
  '& button': {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    cursor: 'pointer',
    marginTop: theme.spacing(2),
    fontFamily: 'Rubik',
  },
}));


export default function GruposClient() {
  const [openModal, setOpenModal] = React.useState(false);
  const [numberUsers, setnumberUsers] = useState ()
  useEffect(() =>{
    activeMembers().then(number => {
      setnumberUsers(number);
    });

  },[]);
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
      <Box sx={{ width: '100%', padding: '60px 0 0 10px', }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{}}>
          <BackNavbarClient />
          <Grid item xs={12} md={12}>
            <h1 style={{fontFamily: 'Rubik', justifyContent: 'center', display: 'flex', zIndex: 1, position: 'relative' }}>Grupo 1</h1>
            <Divider sx={{ mb: '15px' }} />
            <Item>
              <p>
                Mínimo de membros: {}
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Taxa Administrativa: {}
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Valor do seguro: {}
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Cobertura do seguro: {}
              </p>
            </Item>
            <br>
            </br>
            <Item>
              <p>
                Membros do Seguro:{numberUsers}
              </p>
            </Item>
            <br>
            </br>
            <Box sx={{display:'flex', justifyContent:'center', marginTop:2}}>
            <Button sx={button2} onClick={() => setOpenModal(true)} >
              {/* <Link to='/indrequestclient' style={{textDecoration:'none', color:'black'}}> */}
              Solicitar entrada
              {/* </Link> */}
            </Button>
            </Box>

          </Grid>
        </Grid>
      </Box>
    </>
  );
}


// Definindo o endereço do contrato 
const contractAddress = "0x1B0b42d9c38C98C22377A622Cf3227a920E8CC7C"
// Pegando o json com informações sobre o contrato 
const abi = erc20ABI

// Essa função conecta ao contrato e executa a função de checar quantos usuarios tem no contrato 
async function activeMembers() {
  const web3 = new Web3(window.ethereum);
  try {
    const contract = new web3.eth.Contract(abi, contractAddress);
    // Aqui é onde está sendo executada a função definida no contrato
    const numberMembers = await contract.methods.showAllMembers().call();
    var totalUsers = Object.keys(numberMembers).length
  } catch (err) {
    console.log(err.message);
  }
  return (totalUsers)
}
