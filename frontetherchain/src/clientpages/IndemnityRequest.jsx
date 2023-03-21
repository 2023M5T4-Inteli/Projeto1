import React, { useState } from 'react';
import {
  Button,
  Modal,
  TextField,
  makeStyles,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 500,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  formControl: {
    marginTop: theme.spacing(2), // Espaçamento acima do componente
    marginBottom: theme.spacing(3), // Espaçamento abaixo do componente
    minWidth: 350,
    margin: '10px', // Espaçamento em todas as direções
  },
}));

const IndemnityForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [imei, setImei] = useState('');
  const [coverage, setCoverage] = useState('');
  const [reason, setReason] = useState('');

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
    <div>
  <Button variant="contained" color="primary" onClick={handleOpen} style={{ backgroundColor: '#02DE82', color: 'inherit' }}>
    Solicitar Indenização
  </Button>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className={classes.paper}>
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
          <Button variant="contained" color="primary" onClick={handleOpen} style={{ backgroundColor: '#02DE82', color: 'inherit' }}>
          Realizar pedido
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default IndemnityForm;
