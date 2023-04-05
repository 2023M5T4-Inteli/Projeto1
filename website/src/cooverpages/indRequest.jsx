import React, { useEffect } from "react";
import { useState } from "react";
import List from "@mui/material/List";
import Axios from 'axios'
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import BackNavbarReq from "../components/Navbar/BackNavbarReq";
import Modal from "@mui/material/Modal";
import { Divider, Grid, Paper, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import Web3 from "web3";
import erc20ABI from "../erc20ABI.json"
import { DataGrid } from '@mui/x-data-grid';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { difference } from "lodash";
import { styleModal, buttonAccept, buttonModalNo, buttonModalYes, buttonRemove } from '../clientpages/styles/indRequest.styles'

// Função que permite aceitar ou não membros para fazerem parte do contrato 
export default function CheckboxList() {

  const columns = [
    { field: 'refundImei', headerName: 'Client IMEI', flex: 0.6 },
    { field: 'refundAdress', headerName: 'Refund wallet', flex: 0.7 },
    { field: 'refundPercentage', headerName: 'Refund Percentage', flex: 0.2 },
    { field: 'refundReason', headerName: 'Refund Reason', flex: 1 },

    {
      field: 'icon',
      headerName: '',
      width: 80,
      renderCell: (params) => (
        <IconButton
          onClick={() => console.log(params.row.refundImei)}
          sx={{ color: 'green' }}
        >
          <CheckIcon />
        </IconButton>
      )
    },
    {
      field: 'icon2',
      headerName: '',
      width: 80,
      renderCell: (params) => (
        // Botão que deleta a requisição de indenização
        <IconButton
          onClick={ async () =>{
            const id = params.row._id
            try {
              Axios.delete(`http://localhost:3001/deleteIndemRequest/${id}`)
              alert("Deletado com sucesso, recarregue a página e confira o resultado  ")
            } catch (err) {
              alert(err.message);
            }
          }}
          sx={{ color: 'red' }}
        >
          <ClearIcon />
        </IconButton>
      )
    },
  ];

  const [imei, setImei] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get("http://localhost:3001/getDataRefund").then((response) => {
      setImei(response.data);
      console.log(response.data)
    });
  }

  const newSelectionModel = () => (selection) => setSelectedRows(selection);
  const handleRowSelection = newSelectionModel();
  const getRowId = (row) => row._id;

  const selectedIds = difference(newSelectionModel, selectedRows)
  const selectedImei = imei.filter((row) => selectedIds.includes(row._id));

  const handlePrintSelectedIds = () => {
    handleRowSelection([1, 2, 3]);
    console.log(selectedImei);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Modal para a confirmação da aprovação */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{}}
      >
        <Box sx={styleModal}>
          <h2 id="child-modal-title">Solicitação de entrada</h2>
          <p style={{ fontFamily: 'Rubik' }} id="child-modal-description">
            Deseja mesmo permitir a entrada desses integrantes no grupo em
            questão?
          </p>
          {/*Conectar a esse botão uma função que adiciona integrantes no grupo */}
          <Button style={{ fontFamily: 'Rubik' }} variant="contained" onClick={handleClose} sx={buttonModalYes}>
            Sim
          </Button>
          {/* Conectar a esse botão uma função que apaga a solicitação e envia uma notificação ao respectivo integrante negado */}
          <Button variant="contained" onClick={handleClose} sx={buttonModalNo}>
            Não
          </Button>
        </Box>
      </Modal>

      <List
        sx={{
          width: "100%",
          maxWidth: 2000,
          bgcolor: "background.paper",
          padding: "20px 0 0 50px",
        }}
      >

        <BackNavbarReq />
        <Box sx={{ marginTop: 8, marginLeft: -5, }}>
          <Grid style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, }}>

              <Paper sx={{
                backgroundColor:
                  'rgba(9, 64, 180, 0.1)', width: '125px', marginTop: 2, borderRadius: 3
              }}>
                <Typography style={{
                  fontFamily: 'Rubik', fontSize: 25,
                  display: 'flex', justifyContent: 'center', fontWeight: 500
                }}>Grupo 1</Typography>
              </Paper>
            </Box>
            <Divider sx={{ width: '100%' }} />
            <p style={{ fontSize: '150%', fontFamily: 'Rubik', fontWeight:500 }}>  Solicitações de indenização </p>
            <Typography>Aqui nessa caixa é pego a solicitação que o cliente fez na pagina dele. 
              Infelizmente não deu pra integrar essa caixa, então o objetivo dela é meio que ser um local onde o cara veja quem tá pedindo indenização e o pq.
              Podendo indenizar no botão lá embaixo que funciona 
            </Typography>
          </Grid>

          <Divider sx={{}} />

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={imei} columns={columns} pageSize={5} getRowId={getRowId}
              disableRowSelectionOnClick
              onSelectionModelChange={handleRowSelection}
              selectionModel={selectedRows} />
          </div>

        </Box>
          <div style={{ height: 150, width: '100%' }}>
        <Typography style={{
                  fontFamily: 'Rubik', fontSize: 18,
                  display: 'flex', justifyContent: 'center', fontWeight: 500
                }}>Pagar uma requisição</Typography>
          </div>
          <PayRefundRequest></PayRefundRequest>
      </List>

    </>
  );
}

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

// Função que permite pagar a requisição de indenização 
function PayRefundRequest() {
  const[addressValue, setaddressValue] = useState('')
  const[valueToPay, setValuePayment] = useState('')

// Pagar a indenização 
  async function payIndeminity() {
    var walletToPay = addressValue
    var fixAddress = Web3.utils.toChecksumAddress(walletToPay)
    var totalPayment = valueToPay
    try {
      const contract = await getContract();
      /// Aqui tem que colocar a carteira do admin ou o contrato 
      const payIndeminity = await contract.methods.approveIndemnity(fixAddress).send({from:contractAddress, value: Web3.utils.toWei(totalPayment)})
      alert(JSON.stringify(payIndeminity));
    } catch (err) {
      alert(err.message);
    }
  }

  const handleWalletChange = (event) => {
    setaddressValue(event.target.value);
  };

  const handleValueChange = (event) => {
    setValuePayment(event.target.value);
  };


  return(
    <>
    <div>

    <TextField fullWidth label="Definir a  carteira" id="wallet"  value={addressValue} onChange={handleWalletChange}/>
    <TextField fullWidth label="Definir valor indenização " id="value"  value={valueToPay} onChange={handleValueChange}/>
    <Grid sx={{display:"flex", justifyContent:"center"}}>
    <Button variant="contained" onClick={payIndeminity} sx={buttonAccept} style={{fontFamily: 'Rubik'}}>
    Pagar cliente
    </Button>
    </Grid>
    </div>  
  </>
  )
}


