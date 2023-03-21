import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid'; // Grid version 1
import Navbar from '../components/Navbar/FloatingAction';
import CheckboxList from './enterRequest';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

function CreateGroups() {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const [nomeGrupo, setNomeGrupo] = useState('');
  const [quantidadeMinima, setQuantidadeMinima] = useState(0);
  const [taxaAdm, setTaxaAdm] = useState(0);
  const [porcentagemCelular, setPorcentagemCelular] = useState(100);
  const [cobertura, setCobertura] = useState(100);
  const [grupos, setGrupos] = useState([]);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar o código para enviar os dados do formulário para o servidor
    const novoGrupo = { nome: nomeGrupo, quantidadeMinima, taxaAdm, porcentagemCelular, cobertura };
    setGrupos([...grupos, novoGrupo]);
    setShowModal(false);
    setNomeGrupo('');
    setQuantidadeMinima(0);
    setTaxaAdm(0);
    setPorcentagemCelular(100);
    setCobertura(100);

  };

  return (
    <>
      <Navbar />
      <Grid sx={{marginTop:11}}>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>
        Criar novos grupos
      </Button>
      </Grid>

      <Modal open={showModal} onClose={handleCloseModal}>
        <div className={classes.paper}>
          <h2>Criar novo grupo</h2>
          <form onSubmit={handleFormSubmit}>
            <TextField
              label="Nome do grupo"
              value={nomeGrupo}
              onChange={(event) => setNomeGrupo(event.target.value)}
              fullWidth
            />
            <TextField
              label="Quantidade mínima"
              type="number"
              value={quantidadeMinima}
              onChange={(event) => setQuantidadeMinima(event.target.value)}
              fullWidth
            />
            <TextField
              label="Taxa adm (5% do celular)"
              type="number"
              value={taxaAdm}
              onChange={(event) => setTaxaAdm(event.target.value)}
              fullWidth
            />

            <TextField
              label="Porcentagem do celular = 100%"
              type="number"
              value={porcentagemCelular}
              onChange={(event) => setPorcentagemCelular(event.target.value)}
              fullWidth
            />

            <TextField
              label="Cobertura = 100%"
              type="number"
              value={cobertura}
              onChange={(event) => setCobertura(event.target.value)}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Criar
            </Button>
          </form>
        </div>
      </Modal>

      {grupos.map((grupo, index) => (
        <div key={index}>
          <h2>{grupo.nome}</h2>
          <p>Quantidade mínima: {grupo.quantidadeMinima}</p>
          <p>Taxa adm: {grupo.taxaAdm}%</p>
          <p>Porcentagem do celular: {grupo.porcentagemCelular}%</p>
          <p>Cobertura: {grupo.cobertura}%</p>
        </div>
      ))}
    </>
  );
}

export default CreateGroups;

