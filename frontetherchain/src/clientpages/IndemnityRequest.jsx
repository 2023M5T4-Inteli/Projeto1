import React, { useState } from 'react';
import styled from '@mui/system/styled';
import {
  Button,
  Modal,
  TextField,
  
  FormControl,
  InputLabel,
  Select,
  MenuItem, Box, Grid, Divider, Link
} from '@mui/material';
import makeStyles from '@mui/system/style'
import { Navigate, useNavigate } from 'react-router-dom';
import BackNavbarReqClient from '../components/Navbar/BackNavbarReqClient';


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
  },
  formControl: {
    marginTop: 5, // Espaçamento acima do componente
    marginBottom: 20, // Espaçamento abaixo do componente
    minWidth: 350,
    margin: '10px', // Espaçamento em todas as direções
  },
}));

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

  return (
   <>
  <BackNavbarReqClient />
  <Box sx={{ width: '100%', padding: '60px 0 0 10px', }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
          
          <Grid item xs={12} md={6}>
            <h1 style={{ justifyContent: 'center', display: 'flex', zIndex: 1, position: 'relative', marginTop:'3rem' }}>Grupo 1</h1>
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
                Membros do Seguro:
              </p>
            </Item>
            <br>
            </br>

          </Grid>
        </Grid>
      </Box>
   <Grid style={{display:'flex', justifyContent:'center'}}>
  <Button variant="contained" color="primary" onClick={handleOpen} style={{ backgroundColor: '#02DE82', color: 'inherit', display:'flex', justifyContent:'center', marginTop:'20px' }}>
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
        <Grid style={{background:'white', padding:10, paddingBottom:30, marginTop:'25%' }}>
          <h2 id="modal-title">PEDIDO DE INDENIZAÇÃO</h2>
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
          <Button onClick={handleLink} variant="contained" color="primary" style={{ backgroundColor: '#02DE82', color: 'inherit' }}>
          Realizar pedido
          </Button>
          </Grid>
      
        </Grid>
      </Modal>
    </>
  );
};

export default IndemnityForm;
