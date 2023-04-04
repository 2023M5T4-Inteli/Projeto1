import React, {useEffect} from "react";
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
import { Divider, Grid, Paper, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Web3 from "web3";
import erc20ABI from "../erc20ABI.json"
import { DataGrid } from '@mui/x-data-grid';
import { values } from "lodash";
import { any } from "bluebird";


const styleModal = {
  transform: "translate(50%, 50%)",
  position: "flex",
  width: "50%",
  height: "50%",
  left: "50%",
  top: "50%",
  boxSizing: "border-box",
  background: "#FFFFFF",
  border: "1px solid #C8C8C8",
  borderRadius: "20px",
  padding: "5%",
  fontSize: "100%",
};

const buttonModalNo = {
  position: "flex",
  width: "50%",
  height: "13.5%",
  left: "5%",
  top: "35%",
  background: "rgba(255, 0, 0, 0.35)",
  borderRadius: "22px",
  fontSize: "100%",
  padding: "5%",
  color: "black",
};

const buttonModalYes = {
  position: "flex",
  width: "50%",
  height: "13.5%",
  left: "-5%",
  top: "35%",
  background: "rgba(2, 222, 130, 0.35)",
  borderRadius: "22px",
  fontSize: "100%",
  padding: "5%",
  color: "black",
};

const buttonAccept = {
  background: "rgba(2, 222, 130, 0.35)",
  width: "150px",
  height: "30px",
  borderRadius: "22px",
  color: "black",
  fontFamily: 'Rubik',
  marginTop:2
};
const buttonRemove = {
  width: "150px",
  height: "30px",
  marginTop:2,
  background: "rgba(255, 0, 0, 0.35)",
  borderRadius: "22px",
  color: "black",
  fontFamily: 'Rubik',
};

export default function CheckboxList() {
 
  const columns = [
    { field: 'clientCellValue', headerName: 'Client Cell Value', flex: 1 },
    { field: 'clientAdresss', headerName: 'Client Address', flex: 1 },
    { field: 'clientImei', headerName: 'Client IMEI', flex: 1 }
  ];

  const [imei, setImei] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState([]);
  
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get("http://localhost:3001/getData").then((response) => {
      setImei(response.data);
      console.log(response.data)
    });
  }

  const getRowId = (row) => row._id;

// 

const handleChange = (value) => () => {
  const currentIndex = selectedRows.indexOf(value);
  const newSelectedRows = [...selectedRows];

  if (currentIndex === -1) {
    newSelectedRows.push(value);
  } else {
    newSelectedRows.splice(currentIndex, 1);
  }

  setSelectedRows(newSelectedRows);
};

const handleExcludeRows = () => {
  const filteredRows = imei.filter(row => !selectedRows.includes(getRowId(row)));
  setImei(filteredRows);
  setSelectedRows([]);
}

  const [checked, setChecked] = React.useState([0]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // const wallet_List = [
  //   {
  //     address: "0x5EaaAb0F75C41A4314FFa90fdadE8e2a33054544",
  //     label_Adress: "1",
  //   }
  // ];

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
          maxWidth:2000,
          bgcolor: "background.paper",
          padding: "20px 0 0 50px",
        }}
      >
        {/* Navbar da página */}
        <BackNavbarReq />
        <Box sx={{marginTop:8, marginLeft:-5, }}>
        <Grid style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
        <Box sx={{display:'flex', justifyContent:'center', marginBottom:3, }}>
          
            <Paper sx={{backgroundColor: 
            // isHover ? 'rgba(2, 222, 130, 0.8)' : 
            'rgba(9, 64, 180, 0.1)', width:'125px', marginTop:2,borderRadius:3 }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:25, 
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography> 
            </Paper>
            </Box>
            <Divider sx={{width: '100%'}}/>
          <p style={{fontSize: '150%', fontFamily: 'Rubik' }}>  Solicitações de entrada </p>

        </Grid>
       
        <Divider sx={{}}/>

        <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={imei} columns={columns} pageSize={5} getRowId={getRowId} checkboxSelection
        disableRowSelectionOnClick 
        onSelectionModelChange={(selection) => setSelectedRows(selection)} selectionModel={selectedRows}/>
    </div>
{/* 
    <Button variant="contained" onClick={handleExcludeRows}>
        Exclude selected rows
      </Button> */}

        </Box>

      </List>
      <Grid style={{display:'flex',  flexDirection:'column'}}>
      
      <AddNewMembersByWallet></AddNewMembersByWallet>
      <RemoveMembersByWallet></RemoveMembersByWallet>
      </Grid>
    </>
  );
}



// Definindo o endereço do contrato 
const contractAddress = "0x1B0b42d9c38C98C22377A622Cf3227a920E8CC7C"
// Pegando o json com informações sobre o contrato 
const abi = erc20ABI


async function getContract() {
  if (!window.ethereum) return console.log(`No MetaMask found!`);
 
  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) return console.log('Wallet not found/allowed!');
 
  return new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
}
 

function AddNewMembersByWallet() {
  const[addressValue, setaddressValue] = useState('')

  async function doSave2() {
    var walletizinha = addressValue
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

  function handleInputChange(event){
    setaddressValue(event.target.value)
  }

  return(
    <>
    <div>

    <TextField fullWidth label="Adicionar uma carteira" id="fullWidth"  value={addressValue} onChange={handleInputChange}/>
    <Grid sx={{display:"flex", justifyContent:"center"}}>
    <Button variant="contained" onClick={doSave2} sx={buttonAccept} style={{fontFamily: 'Rubik'}}>
    Adicionar
    </Button>
    </Grid>
    </div>  
  </>
  )
}



function RemoveMembersByWallet() {
  const[addressValue, setaddressValue] = useState('')

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

  function handleInputChange(event){
    setaddressValue(event.target.value)
  }

  return(
    <>
    <div>
    <Box sx={{ marginTop: '2rem' }}>
  <TextField fullWidth label="Remover uma carteira" id="fullWidth" value={addressValue} onChange={handleInputChange} />
</Box>
<Grid sx={{display:"flex", justifyContent:"center"}}>
    <Button variant="contained" onClick={doRemove} sx={buttonRemove} style={{fontFamily: 'Rubik'}}>
    Remover
    </Button>
    </Grid>
    </div>  
  </>
  )
}