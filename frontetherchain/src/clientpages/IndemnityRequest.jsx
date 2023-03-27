import React, { useState, useEffect } from 'react';
import erc20ABI from "../erc20ABI.json"
import Web3 from 'web3';
import styled from '@mui/system/styled';
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
    marginBottom: 20, // Espaçamento abaixo do componente
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
  const [coverage, setCoverage] = useState('');
  const [reason, setReason] = useState('');
  const [openModal, setOpenModal] = React.useState(false);

  function handleLink() {
    return navigate('/gruposclient2');
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

  const handleCoverageChange = (event) => {
    setCoverage(event.target.value);
  };

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleSubmit = () => {
    // Submit the form data
    console.log('IMEI:', imei);
    console.log('Coverage:', coverage);
    console.log('Reason:', reason);
    handleClose();
  };

  const [numberUsers, setnumberUsers] = useState ()
  useEffect(() =>{
    activeMembers().then(number => {
      setnumberUsers(number);
    });

  },[]);

  return (
   <>
  <BackNavbarReqClient />
  <Box sx={{ width: '100%', padding: '60px 0 0 10px', }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          
          <Grid item xs={12} md={12} >
          <Box sx={{display:'flex', justifyContent:'center'}}>
            <Paper
            // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            sx={{backgroundColor:
            // isHover ? 'rgba(2, 222, 130, 0.8)' :
            'rgba(2, 222, 130, 0.2)', width:'125px', marginTop:2, borderRadius:3 }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:20,
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography>
            </Paper>
            </Box> 
           <Divider sx={{  }} />
            <Item sx={{marginTop:2}}>
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
                Membros do Seguro : {numberUsers}
              </p>
            </Item>
            <br>
            </br>

          </Grid>
        </Grid>
      </Box>
   <Grid style={{display:'flex', justifyContent:'center', marginTop:10}}>
  <Button variant="contained" color="primary" onClick={handleOpen}
  sx={button2}
  //  style={{ backgroundColor: '#02DE82', color: 'inherit', display:'flex', justifyContent:'center', marginTop:'20px' }}
   >
    Solicitar Indenização
  </Button>
  </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* <div className={classes.paper}> */}
        <Grid style={{background:'white', padding:10, paddingBottom:30, marginTop:'25%', display:'flex', justifyContent:'center', flexDirection:'column' }}>
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


            <InputLabel id="coverage-label">Cobertura desejada</InputLabel>
            <Select
              labelId="coverage-label"
              id="coverage"
              value={coverage}
              onChange={handleCoverageChange}
            >
              <MenuItem value="option1">5%</MenuItem>
              <MenuItem value="option2">10%</MenuItem>
              <MenuItem value="option3">15%</MenuItem>
              <MenuItem value="option4">20%</MenuItem>


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
          <Button onClick={handleLink} variant="contained" color="primary" style={button2}>
          Realizar pedido
          </Button>
          </Grid>
      
        </Grid>
      </Modal>
    </>
  );
};

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


export default IndemnityForm;
