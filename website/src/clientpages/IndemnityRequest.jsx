import React, { useState, useEffect } from 'react';
import erc20ABI from "../erc20ABI.json"
import Web3 from 'web3';
import Axios from 'axios'
import styled from '@mui/system/styled';
import Input from '@mui/material/Input';
import sha256 from 'crypto-js/sha256';
import {  Button, Modal, TextField, FormControl, InputLabel, Select,MenuItem, Box, Grid, Divider, Link, Paper, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import {  useNavigate } from 'react-router-dom';
import BackNavbarReqClient from '../components/Navbar/BackNavbarReqClient';

// Constantes que tem o estilo dos componentes utilizados no frontend 

const button2 = {
  border: '1px solid',
  borderColor: 'rgba(2, 222, 130, 0.6)',
  backgroundColor: 'rgba(2, 222, 130, 0.1)',
  padding: 1.5,
  marginTop:'5%',
  height:'3rem',
  paddingLeft: 2,
  borderRadius: '40px',
  color:'black',
  fontWeight:'bold',
  width: '17rem',
  display: 'flex',
  justifyContent: 'center',
}
const Item = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffffff',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#444d58' : '#ced7e0',
  padding: theme.spacing(2),
  borderRadius: '24px',
  marginTop:'1%',
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
    marginBottom: '3%', // Espaçamento abaixo do componente
    minWidth: 350,
    margin: '10px', // Espaçamento em todas as direções
  },
}));


// Tela que permite ao cliente fazer um pedido de indenização 

export const IndemnityForm = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imei, setImei] = useState('');
  const [walletReq, setWalletReq] = useState('');
  const [cellValue, setCellValue] = useState('');
  const [coverage, setCoverage] = useState('');
  const [reason, setReason] = useState('');
  const [openModal, setOpenModal] = React.useState(false);

  function handleLink() {
    return navigate('/gruposclient2');
 }

       // Função que envia os dados do BD
       const sendRefundData = () => {
        // Aqui é feito o hash do imei por motivos de segurança
        const refundImeiHash = sha256(imei).toString()

        Axios.post('http://localhost:3001/insertRefund', 
        { refundImei : refundImeiHash, 
          refundPercentage : coverage, 
          refundValue : cellValue,
          refundReason : reason ,
          refundAdress : walletReq,
       })
       console.log('Data sent ->', 'wallet:', refundImeiHash, 'imei:',coverage,'reason:', reason,"Cell", cellValue )
      }


  // Função que executa multiplas funções 
  function handleLinkAndSendData() {
    handleLink();
    sendRefundData();
    makeIndemRequest();
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
    setWalletReq(event.target.value);
  };

  const handleCellChange = (event) => {
    setCellValue(event.target.value);
  };

  const handleCoverageChange = (event) => {
    setCoverage(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };



  const [numberUsers, setnumberUsers] = useState ();
  const [totalFunds, setTotalFunds] = useState()

  useEffect(() =>{
    activeMembers().then(number => {
      setnumberUsers(number);
    });

  },[]);

  useEffect(() => {
    avaibleFunds().then(cash => {
      setTotalFunds(cash);
    });

  },  
  []);



// Definindo o endereço do contrato 
const contractAddress = "0x6776743D36549408dBd47f1f061401BcD5e83208"
// Pegando o json com informações sobre o contrato 
const abi = erc20ABI

// Sempre é necessário instanciar o contrato para poder enviar dados 
async function getContract() {
  if (!window.ethereum) return console.log(`No MetaMask found!`);

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) return console.log('Wallet not found/allowed!');

  return new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
}


  //Função que vai permitir enviar direto a carteira para requisitar uma indenização
  async function makeIndemRequest() {
    var walletClientIndem = 1
    var fixAddress = Web3.utils.toChecksumAddress("0xff27a22195b74b06af498fc5e63f0a3b0f3ed9bd")


    try {
      const contract = await getContract();
      // const accounts = await Web3.eth.getAccounts();
      // {from:contractAddress, value: Web3.utils.toWei(totalPayment)}
      const tx = await contract.methods.requestIndemnity(10).send();
      //console.log(fixAddress)
      alert(JSON.stringify(tx));
    } catch (err) {
      alert(err.message);
    }
  }


  return (
   <>
  <BackNavbarReqClient />
  <Box sx={{ width: '100%', padding: '60px 0 0 10px', }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          
          <Grid item xs={12} md={12} >
          <Box sx={{display:'flex', justifyContent:'center', marginBottom:3, marginTop:1}}>
            <Paper sx={{backgroundColor: 
            // isHover ? 'rgba(2, 222, 130, 0.8)' : 
            'rgba(9, 64, 180, 0.1)', width:'125px', marginTop:2,borderRadius:3 }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:25, 
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography> 
            </Paper>
            </Box>
            <Divider sx={{  }} />
            <Item sx={{marginTop:2}}>
              <p>
              Valor disponível : {totalFunds} ETH
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
                Membros do Seguro : {numberUsers}
              </p>
            </Item>
            <br>
            </br>

          </Grid>
        </Grid>
      </Box>
   <Grid style={{display:'flex', justifyContent:'center', marginTop:10}}>
  <Button variant="contained" color="primary"  onClick={handleOpen}
  sx={button2}
   >
    Solicitar Indenização
  </Button>
  <GetWallet></GetWallet>
  </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* #TO-DO Colocar os valores daqui no BANCO DE DADOS  */}
        <Grid style={{background:'white', padding:10, paddingBottom:30, marginTop:'10rem', marginLeft:'10%', display:'flex', justifyContent:'center', flexDirection:'column', maxWidth:'80%', minWidth:'400px' }}>
          <Grid style={{display:'flex', justifyContent:'center'}}>
          <h2 id="modal-title">PEDIDO DE INDENIZAÇÃO</h2>
          </Grid>
          <FormControl className={classes.formControl}>
            <InputLabel id="imei-label" shrink>Imei do celular</InputLabel>
            <TextField
              id="imei"
              labelId="imei-label"
              value={imei}
              onChange={handleImeiChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="adress-label" shrink>Valor do aparelho</InputLabel>
            <TextField
              id="valueCell"
              labelId="value-label"
              value={cellValue}
              onChange={handleCellChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="adress-label" shrink>Endereço da carteira</InputLabel>
            <TextField
              id="adress"
              labelId="imei-label"
              value={walletReq}
              onChange={handleWalletChange}
            />
          </FormControl>
          <FormControl className={classes.formControl}>

            <InputLabel id="coverage-label">Cobertura desejada</InputLabel>
            <Select
              labelId="coverage-label"
              id="coverage"
              value={coverage}
              onChange={handleCoverageChange}
            >
              <MenuItem value={10}>10%</MenuItem>
              <MenuItem value={25}>25%</MenuItem>
              <MenuItem value={50}>50%</MenuItem>
              <MenuItem value={75}>75%</MenuItem>
              <MenuItem value={100}>100%</MenuItem>


            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
          <InputLabel id="reason-label" shrink>Motivo do pedido</InputLabel>
            <TextField
              id="reason"
              labelId="reason-label"
              value={reason}
              onChange={handleReasonChange}
            />

          </FormControl>
          
          <Grid style={{display:'flex', justifyContent:'center'}}>
          <Button onClick={handleLinkAndSendData} variant="contained" color="primary" style={button2}>
          Realizar pedido OI
          </Button>
          </Grid>
      
        </Grid>
      </Modal>
    </>
  );
};

// Componente para criar um input no BD

const GetWallet = () => {
  const [walletAddress, setwalletAddress] = useState("")

  // Função que pega todos os dados do BD
  const getData = () => {
    Axios.get("http://localhost:3001/getData").then((response) => {
      console.log(response)
    })
  }

  // Função que envia os dados do BD
  const postData = () => {
    Axios.post('http://localhost:3001/insert', 
    {clientAddress : walletAddress })
  }


  return(
    <>

    </>
  )

}





// Definindo o endereço do contrato 
const contractAddress = "0x6776743D36549408dBd47f1f061401BcD5e83208"
// Pegando o json com informações sobre o contrato 
const abi = erc20ABI

// Essa função conecta ao contrato e executa a função de checar quantos usuarios tem no contrato 
async function activeMembers() {
  const web3 = new Web3(window.ethereum);
  try {
    const contract = new web3.eth.Contract(abi, contractAddress);
    // Aqui é onde está sendo executada a função definida no contrato
    const numberMembers = await contract.methods.getTotalWalletClients().call();
    var totalUsers = Object.keys(numberMembers).length
    // console.log(totalUsers)
  } catch (err) {
    console.log(err.message);
  }
  return (totalUsers)
}

// Essa função conecta ao contrato e executa a função de checar o valor disponível no contrato
async function avaibleFunds() {
  const web3 = new Web3(window.ethereum);
  try {
    const contract = new web3.eth.Contract(abi, contractAddress);
    // Aqui é onde está sendo executada a função definida no contrato
    const numberMembers = await contract.methods.getBalance().call();
    // Convertendo o valor disponível no contrato para um valor legivel
    const totalFinally = numberMembers/(Math.pow (10,18))
    var finalValue = totalFinally
  } catch (err) {
    console.log(err.message);
  }
  return (finalValue)
}


export default IndemnityForm;
