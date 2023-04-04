import React, { useEffect } from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Axios from 'axios'
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar/FloatingAction";
import BackNavbarReq from "../components/Navbar/BackNavbarReq";
import Modal from "@mui/material/Modal";
import { Divider, Grid, Paper, Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import Web3 from "web3";
import erc20ABI from "../erc20ABI.json"
import { DataGrid } from '@mui/x-data-grid';
import { values } from "lodash";
import { any } from "bluebird";

// Constantes que tem o estilo dos componentes utilizados no frontend 

const styleModal = {
  position: "relative",
  width: "40rem",
  '@media (max-width: 800px)': {
    width: "30rem", left: '15%', height: '13rem'
  },
  '@media (max-width: 500px)': {
    width: "23rem", left: '2%', height: '13rem'
  },
  height: "12rem",
  left: "20%",
  top: "15rem",
  boxSizing: "border-box",
  background: "#FFFFFF",
  border: "1px solid #C8C8C8",
  borderRadius: "20px",
  padding: "5px",
  fontSize: "100%",
  fontFamily: 'Rubik'
};

const buttonModalNo = {
  width: "50px",
  height: "30px",
  background: "rgba(255, 0, 0, 0.35)",
  borderRadius: "22px",
  marginRight: 5,
  color: "black",
  fontFamily: 'Rubik',
};

const buttonRemove = {
  width: "150px",
  height: "30px",
  marginTop: 2,
  background: "rgba(255, 0, 0, 0.35)",
  borderRadius: "22px",
  color: "black",
  fontFamily: 'Rubik',
};

const buttonModalYes = {
  marginLeft: 5,
  background: "rgba(2, 222, 130, 0.35)",
  width: "50px",
  height: "30px",
  borderRadius: "22px",
  color: "black",
  fontFamily: 'Rubik',
};

const buttonAccept = {
  width: "100px",
  height: "40px",
  top: "100px",
  background: "rgba(133, 251, 202, 0.88)",
  borderRadius: "22px",
  color: "black",
  fontFamily: 'Rubik'
};


// Função que permite aceitar ou não membros para fazerem parte do contrato 
export default function CheckboxList() {

  const columns = [
    { field: 'refundImei', headerName: 'Client Cell Value', flex: 1 },
    { field: 'refundPercentage', headerName: 'Client Address', flex: 1 },
    { field: 'refundReason', headerName: 'Client IMEI', flex: 1 },
    {
      field: 'icon',
      headerName: '',
      width: 80,
      renderCell: (params) => (
        <IconButton
          onClick={() => console.log(params.row.refundImei)}
          sx={{color:'grey'}}
        >
          <DeleteIcon>phone</DeleteIcon>
        </IconButton>
      )
    },
  ];

  const [imei, setImei] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);

  const [checkedValues, setCheckedValues] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get("http://localhost:3001/getDataRefund").then((response) => {
      setImei(response.data);
      console.log(response.data)
    });
  }

  const getRowId = (row) => row._id;


  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlePrintSelectedImeis = () => {
    const selectedImeis = selectedRows.map(rowId => {
      const row = imei.find(row => row._id === rowId);
      return row.refundImei;
    });
    console.log(selectedImeis);
  }

  const handleToggle = (value) => () => {
    const currentIndex = checkedValues.indexOf(value);
    const newCheckedValues = [...checkedValues];

    if (currentIndex === -1) {
      newCheckedValues.push(value);
    } else {
      newCheckedValues.splice(currentIndex, 1);
    }

    setCheckedValues(newCheckedValues);
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
        {/* Navbar da página */}
        <BackNavbarReq />
        <Box sx={{ marginTop: 8, marginLeft: -5, }}>
          <Grid style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3, }}>

              <Paper sx={{
                backgroundColor:
                  // isHover ? 'rgba(2, 222, 130, 0.8)' : 
                  'rgba(9, 64, 180, 0.1)', width: '125px', marginTop: 2, borderRadius: 3
              }}>
                <Typography style={{
                  fontFamily: 'Rubik', fontSize: 25,
                  display: 'flex', justifyContent: 'center', fontWeight: 500
                }}>Grupo 1</Typography>
              </Paper>
            </Box>
            <Divider sx={{ width: '100%' }} />
            <p style={{ fontSize: '150%', fontFamily: 'Rubik' }}>  Solicitações de indenização </p>

          </Grid>

          <Divider sx={{}} />

          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={imei} columns={columns} pageSize={5} getRowId={getRowId} checkboxSelection
              disableRowSelectionOnClick
              onSelectionModelChange={(selection) => setSelectedRows(selection)}
              selectionModel={selectedRows} />
          </div>

        </Box>
      </List>
      
      <Button variant="contained" onClick={payIndeminity} sx={{ marginTop: 2 }}>
        POST FROM BLOCKCHAIN 
      </Button>
      <Button onClick={getFromBlockchain}> GET FROM BLOCKCHAIN</Button>

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
//funcao222

async function getFromBlockchain() {
  try {
    const contract = await getContract();
    const customer = await contract.methods.getBalance().call();
    alert(JSON.stringify(customer));
  } catch (err) {
    alert(err.message);
  }
}



// Input a member
async function payIndeminity() {
  var walletizinha = "0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd"
  var fixAddress = Web3.utils.toChecksumAddress(walletizinha)
  var imeizinho = "testeMundo123456OLA"
  var valorzinho = 10
  try {
    const contract = await getContract();
    const payIndeminity = await contract.methods.initialPayment(imeizinho, fixAddress,valorzinho).send({from:"0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd", value: Web3.utils.toWei("0.0166")})
    alert(JSON.stringify(payIndeminity));
  } catch (err) {
    alert(err.message);
  }
}

// const fundit = await  mycontract.methods.fundIt().send({
//   from: '0xbf443ed3b73159d5bf427568359c7de4103413c3', 
//   value: 3 
//  })
// .then(res => 
// console.log('Success', res))
// .catch(err => console.log(err)) 

// Input a member
async function postToBlockchain() {
  var walletizinha = "0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd"
  var fixAddress = Web3.utils.toChecksumAddress(walletizinha)
  var imeizinho = "testeMundo123456OLA"
  var valorzinho = 10
  try {
    const contract = await getContract();
    const tx = await contract.methods.initialPayment(imeizinho, fixAddress,valorzinho).send({value:  0.03});
    console.log(fixAddress)
    alert(JSON.stringify(tx));
  } catch (err) {
    alert(err.message);
  }
}







function AddNewMembersByWallet() {
  const [addressValue, setaddressValue] = useState('')

  async function doSave2() {
    var walletizinha = "0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd"
    var fixAddress = Web3.utils.toChecksumAddress(walletizinha)

    try {
      const contract = await getContract();
      const tx = await contract.methods.addMember(fixAddress).send();
      console.log(fixAddress)
      alert(JSON.stringify(tx));
    } catch (err) {
      alert(err.message);
    }
  }

  function handleInputChange(event) {
    setaddressValue(event.target.value)
  }

  return (
    <>
      <div>

        <TextField fullWidth label="Adicionar uma carteira" id="fullWidth" value={addressValue} onChange={handleInputChange} />
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={doSave2} sx={buttonAccept} style={{ fontFamily: 'Rubik' }}>
            Adicionar
          </Button>
        </Grid>
      </div>
    </>
  )
}



function RemoveMembersByWallet() {
  const [addressValue, setaddressValue] = useState('')

  async function doRemove() {
    var walletizinha = addressValue
    var fixAddress = Web3.utils.toChecksumAddress(walletizinha)

    try {
      const contract = await getContract();
      const tx = await contract.methods.removeMember(fixAddress).send();
      console.log(fixAddress)
      alert(JSON.stringify(tx));
    } catch (err) {
      alert(err.message);
    }
  }

  function handleInputChange(event) {
    setaddressValue(event.target.value)
  }

  return (
    <>
      <div>
        <Box sx={{ marginTop: '2rem' }}>
          <TextField fullWidth label="Remover uma carteira" id="fullWidth" value={addressValue} onChange={handleInputChange} />
        </Box>
        <Grid sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained" onClick={doRemove} sx={buttonRemove} style={{ fontFamily: 'Rubik' }}>
            Remover
          </Button>
        </Grid>
      </div>
    </>
  )
}
