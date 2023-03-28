import * as React from "react";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
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
  position: "flex",
  width: "50%",
  height: "40%",
  left:'25%',
  top: "100%",
  background: "rgba(133, 251, 202, 0.88)",
  borderRadius: "22px",
  color: "black",
  marginTop: "1%",
};
const buttonRemove = {
  position: "flex",
  width: "50%",
  height: "5%",
  left:'25%',
  top: "100%",
  background: "rgba(255, 0, 0, 0.35)",
  borderRadius: "22px",
  color: "black",
  marginTop: "1%",
};

export default function CheckboxList() {
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

  const wallet_List = [
    {
      address: "0x5EaaAb0F75C41A4314FFa90fdadE8e2a33054544",
      label_Adress: "1",
    }
  ];

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
        <Box sx={{display:'flex', justifyContent:'center'}}>
            <Paper
            // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
            sx={{backgroundColor:
            // isHover ? 'rgba(2, 222, 130, 0.8)' :
            'rgba(2, 222, 130, 0.6)', width:'125px', marginTop:3, borderRadius:3,marginBottom:2,  }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:25,
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography>
            </Paper>
            </Box>
            <Divider sx={{width: '100%'}}/>
          <p style={{fontSize: '150%', fontFamily: 'Rubik' }}> Solicitações de entrada </p>
        </Grid>
        <Divider sx={{}}/>

        {wallet_List.map((wallet, index) => {
          const labelId = `checkbox-list-label-${index}`;
          
          return (
            <div alignItems="center" display="flex">
              <ListItem
                key={index}
                secondaryAction={<h6>{/* Data de solicitação */}</h6>}
                disablePadding
              >
                <ListItemButton
                  role={undefined}
                  onClick={handleToggle(index)}
                  dense
                >
                  <ListItemIcon sx={{marginLeft:-2.5}} style={{fontFamily: 'Rubik'}}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={wallet.address} />
                </ListItemButton>
              </ListItem>

              {/* <ApproveDecline /> */}
            </div>
          );
        })}
        <Divider sx={{}}/>
        <div>
          {/* <Button onClick={doSave}>Teste input</Button> */}
          {/* <Button onClick={getWallets} >Teste Função view</Button> */}
          {/* <Button variant="contained" onClick={handleOpen} sx={buttonAccept}>
            Aprovar
          </Button> */}
        </div>
        </Box>

      </List>
      <AddNewMembersByWallet></AddNewMembersByWallet>
      <RemoveMembersByWallet></RemoveMembersByWallet>
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
    <Button variant="contained" onClick={doSave2} sx={buttonAccept} style={{fontFamily: 'Rubik'}}>
    Adicionar
    </Button>
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
    <Box sx={{ marginTop: '1rem' }}>
  <TextField fullWidth label="Remover uma carteira" id="fullWidth" value={addressValue} onChange={handleInputChange} />
</Box>

    <Button variant="contained" onClick={doRemove} sx={buttonRemove} style={{fontFamily: 'Rubik'}}>
    Remover
    </Button>
    </div>  
  </>
  )
}