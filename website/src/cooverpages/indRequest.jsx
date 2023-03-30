import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import BackNavbarReq from "../components/Navbar/BackNavbarReq";
import Modal from "@mui/material/Modal";
import { Divider, Grid, Typography, Paper } from "@mui/material";
import Box from "@mui/material/Box";


// Constantes que tem o estilo dos componentes utilizados no frontend 

const styleModal = {
  position:"relative",
  width: "40rem",
  '@media (max-width: 800px)': {
    width: "30rem", left:'15%',  height:'13rem'
  },
  '@media (max-width: 500px)': {
    width: "23rem", left:'2%', height:'13rem'
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
  marginRight:5,
  color: "black",
  fontFamily: 'Rubik',
};

const buttonModalYes = {
  marginLeft:5,
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

  // Aqui sera a array com os dados enviados pelo backend
  const wallet_List = [
    {
      address: "0x5EaaAb0F75C41A4314FFa90fdadE8e2a33054544",
      label_Adress: "IMEI: 356133312444796",
    },

    {
      address: "0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd",
      label_Adress: "IMEI: 356133313214867",
    },

    {
      address: "0xf8094b52b1Bad1361aBC90993EAe757FFc91C5e3",
      label_Adress: "IMEI: 356133317784378",
    },
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
          <Box sx={{marginLeft:3}}>
          <h2 style={{ fontFamily: 'Rubik' }} id="child-modal-title">Solicitação de indenização</h2>
          <p style={{ fontFamily: 'Rubik' }} id="child-modal-description">
            Deseja mesmo permitir o pagamento de indenização a estes participantes?
          </p>
          </Box>
          {/*Conectar a esse botão uma função que adiciona integrantes no grupo */}
          <Grid sx={{display:'flex', justifyContent:'space-between', marginTop:4}}>
          <Button style={{ fontFamily: 'Rubik' }} variant="contained" onClick={handleClose} sx={buttonModalYes}>
            Sim
          </Button>
          {/* Conectar a esse botão uma função que apaga a solicitação e envia uma notificação ao respectivo integrante negado */}
          <Button style={{ fontFamily: 'Rubik' }} variant="contained" onClick={handleClose} sx={buttonModalNo}>
            Não
          </Button>
          </Grid>
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
        <Box sx={{marginTop:8, marginLeft:-5, }}>
        <Box sx={{display:'flex', justifyContent:'center', marginBottom:3}}>
            <Paper sx={{backgroundColor: 
            // isHover ? 'rgba(2, 222, 130, 0.8)' : 
            'rgba(9, 64, 180, 0.1)', width:'125px', marginTop:2,borderRadius:3 }}>
            <Typography style={{fontFamily: 'Rubik', fontSize:25, 
            display:'flex', justifyContent:'center', fontWeight:500
            }}>Grupo 1</Typography> 
            </Paper>
            </Box>

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
                  <ListItemIcon sx={{marginLeft:-2.5}}>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(index) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  </ListItemIcon>
                  <ListItemText id={labelId} primary={wallet.address} secondary={wallet.label_Adress}
                  />
                </ListItemButton>
              </ListItem>

            </div>
          );
        })}
        <Divider sx={{}}/>
        <Grid sx={{display:'flex', justifyContent:'center'}}>
          <Button variant="contained" onClick={handleOpen} sx={buttonAccept}>
            Aprovar
          </Button>
        </Grid>
        </Box>
      </List>
    </>
  );
}
