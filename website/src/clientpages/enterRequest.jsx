import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from '@mui/system/styled';
import Navbar from '../components/Navbar/FloatingAction';
import BackNavbarClient from '../components/Navbar/BackNavbarClient';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles'
import Axios from 'axios'
// import makeStyles from '@mui/system/style';
import sha256 from 'crypto-js/sha256';
import {  Button, Modal, TextField, FormControl, InputLabel, Select,MenuItem, Box, Grid, Divider, Paper, Typography} from '@mui/material';
import erc20ABI from "../erc20ABI.json"
import Web3 from 'web3';


// Pop up avisando que a solicitação foi realizada com sucesso
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

// Constantes que tem o estilo dos componentes utilizados no frontend 

const button2 = {
  border: '1px solid',
  borderColor: 'rgba(2, 222, 130, 0.6)',
  backgroundColor: 'rgba(2, 222, 130, 0.1)',
  padding: 1.5,
  paddingLeft: 2,
  marginTop:'10%',
  borderRadius: '40px',
  color:'black',
  fontWeight:'bold',
  width: '17rem',
  display: 'flex',
  justifyContent: 'center',
}



const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: 'blue',
    border: '2px solid #000',
    boxShadow: '5px',
    padding: 10,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontFamily: 'Rubik',
  },
  formControl: {
    marginTop: 5, // Espaçamento acima do componente
    marginBottom: 20, // Espaçamento abaixo do componente
    minWidth: 100,
    margin: '10px', // Espaçamento em todas as direções
  },
}));

const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(2),
  marginTop:'1%',
  borderRadius: '24px',
  textAlign: 'left',
  '& h3': {
    marginBottom: theme.spacing(2),
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    fontFamily: 'Rubik',
  },
  '& p': {
    margin: 0,
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000',
    fontSize: '20px',
    fontFamily: 'Rubik',
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




// Tela que permite solicitar uma entrada no grupo 
export default function GruposClient() {
  const [openModal, setOpenModal] = React.useState(false);
  const [numberUsers, setnumberUsers] = useState ()
  const [open, setOpen] = useState(false);
  const [imei, setImei] = useState('');
  const [walletAdress, setWalletAdress] = useState('');
  const classes = useStyles();
  const [reason, setReason] = useState('');

  const handleOpenModal = () => {
    setOpenModal(true);
  };

      // Função que envia os dados do BD
      const postData = () => {
        // Aqui é feito o hash do imei por motivos de segurança
        const imeiHash = sha256(imei).toString()
        Axios.post('http://localhost:3001/insert', 
        {clientAddress : walletAdress,
          clientImei : imeiHash,
          clientFundsValue : reason
       })
       console.log('Data sent ->', 'wallet:', walletAdress, 'imei:',imeiHash,'reason:', reason )
      }
  

   function handleLinkAndPostData() {
     handleOpenModal();
     postData();
     payToEnter();

  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleImeiChange = (event) => {
    setImei(event.target.value);
  };

  const handleWalletChange = (event) => {
    setWalletAdress(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };


  useEffect(() =>{
    activeMembers().then(number => {
      setnumberUsers(number);
    });

  },[]);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };

      // Definindo o endereço do contrato 
      const contractAddress = "0x1a329C1596cFa1190E695C45f55F31d79cbcb4D7"
      // Pegando o json com informações sobre o contrato 
      const abi = erc20ABI


      async function getContract() {
        if (!window.ethereum) return console.log(`No MetaMask found!`);

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        if (!accounts || !accounts.length) return console.log('Wallet not found/allowed!');

        return new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
      }


      // Pagar a para entrar no grupo TODO
      async function payToEnter() {
        var walletizinha = walletAdress
        var fixAddress = Web3.utils.toChecksumAddress(walletizinha)
        var imeizinho = imei
        var valorzinho = reason
        try {
          const contract = await getContract();
          // Defini um valor arbitrario para pagar e entrar ao grupo
          const payIndeminity = await contract.methods.initialPayment(imeizinho, fixAddress,valorzinho).send({from: fixAddress, value: Web3.utils.toWei("0.015")})
          alert(JSON.stringify(payIndeminity));
        } catch (err) {
          alert(err.message);
        }
      }

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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* <div className={classes.paper}> */}
        <Grid style={{background:'white', padding:30, paddingBottom:30, marginTop:'15%', display:'flex', justifyContent:'center', flexDirection:'column', marginLeft:'30px', marginRight:'30px' }}>
          <Grid style={{display:'flex', justifyContent:'center'}}>
          <Typography sx={{fontWeight:700, fontSize:18, marginBottom:2}}>PEDIDO DE ENTRADA</Typography>
          </Grid>
          <FormControl className={classes.formControl} sx={{marginBottom:3}}>
            <InputLabel id="imei-label" shrink>Endereço da carteira</InputLabel>
            <TextField
              id="wallet"
              labelId="wallet-label"
              value={walletAdress}
              onChange={handleWalletChange}
            />
          </FormControl>
          <FormControl className={classes.formControl} sx={{marginBottom:3}}>


            <InputLabel id="coverage-label">IMEI</InputLabel>
            <TextField
              id="imei"
              labelId="imei-label"
              value={imei}
              onChange={handleImeiChange}
            />
            
          </FormControl>
          <FormControl className={classes.formControl} sx={{marginBottom:3}}>
          <InputLabel id="reason-label" shrink>Valor do celular</InputLabel>
            <TextField
              id="reason"
              labelId="reason-label"
              value={reason}
              type={Number}
              onChange={handleReasonChange}
            />

          </FormControl>
          <Grid style={{display:'flex', justifyContent:'center', marginTop:10}}>

          <Button onClick={handleLinkAndPostData} variant="contained" style={{button2, fontFamily: 'Rubik', backgroundColor: 'rgba(2, 222, 130, 0.35)'}}>
                
                  <Typography sx={{color:"black", fontWeight:700}}>
                    Realizar pedido
                  </Typography>
                    
          
              </Button>
          {/* <Button onClick={postData}> ola teste</Button> */}
          </Grid>
      
        </Grid>
      </Modal>

      <BackNavbarClient />
      <Box sx={{ width: '100%', padding: '60px 0 0 10px', }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }} sx={{marginTop:-1}}>
          <Grid item xs={12} md={12}>


            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Paper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} sx={{backgroundColor: 
            // isHover ? 'rgba(2, 222, 130, 0.8)' : 
            'rgba(9, 64, 180, 0.1)', width:'125px', marginTop:2,borderRadius:3, marginBottom:1 }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:25, 
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography> 
            </Paper>
            </Box>

            <Divider sx={{ mb: '10px', mt:'10px' }} />
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
                Membros do Seguro: {numberUsers}
              </p>
            </Item>
            <br>
            </br>
            <Box sx={{display:'flex', justifyContent:'center'}}>
            <Button sx={button2} onClick={handleOpen} >
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
  const contractAddress = "0x1a329C1596cFa1190E695C45f55F31d79cbcb4D7"
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
