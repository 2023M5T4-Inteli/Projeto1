import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from '@mui/system/styled';
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbar from '../components/Navbar/BackNavbar';
import { Link } from 'react-router-dom';
import { Divider, Button, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import erc20ABI from "../erc20ABI.json"
import Web3 from 'web3';
import '../components/App.css';


// Constantes que tem o estilo dos componentes utilizados no frontend 
const button = {
  marginTop:'0 !important',
  backgroundColor:'white !important'
}
const button2 = {
  marginTop:'0 !important',
  backgroundColor:'white !important'
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

// Tela que permite com que o administrador veja dados sobre o grupo e permite aceitar ou não membros para esse contrato 
export default function Grupos() {
  const [numberUsers, setnumberUsers] = useState ()
  useEffect(() =>{
    activeMembers().then(number => {
      setnumberUsers(number);
    });

  },[]);


  return (
    <>
    <BackNavbar/>
    <Box sx={{ width: '100%', padding:'60px 0 0 10px' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
        <Grid item xs={12} md={12} >
            <h1 style={{justifyContent:'center', display:'flex', zIndex:1, position:'relative', fontFamily: 'Rubik'}}>Grupo 1</h1>
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
               Cobertura do seguro: 100%
            </p>
            </Item>
            <br>
            </br>
            <Item>
            <p style={{ fontFamily: 'Rubik' }}>
              Membros do Seguro: {numberUsers}
            </p>
            </Item>
            
            <br>
            </br>

            <Item sx={{padding:0.7,display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:2}}>
            <Link to='/requisicoes' style={{textDecoration:'none', fontFamily: 'Rubik',}}>
            <Typography style={{marginLeft:'10px'}}> Solicitações de entrada
            </Typography>
            </Link>
            <Badge color="success" overlap="circular" badgeContent="1" sx={{ scale:'1.2', paddingRight:'40%'
             }}/>
            </Item>

            <Item sx={{padding:0.7,display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Link to='/indrequest' style={{textDecoration:'none', fontFamily: 'Rubik'}}>
              <Typography style={{marginLeft:'10px'}}> 
                 Solicitações de indenização 
                 </Typography>
              </Link>
            <Badge color="error" overlap="circular" badgeContent="5" sx={{ scale:'1.2', paddingRight:'40%'
            }}/>
            </Item>

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
    console.log(totalUsers)
  } catch (err) {
    console.log(err.message);
  }
  return (totalUsers)
}