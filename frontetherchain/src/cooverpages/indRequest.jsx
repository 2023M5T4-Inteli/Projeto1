import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import styled from "@mui/system/styled";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "../components/Navbar/FloatingAction";
import BackNavbarReq from "../components/Navbar/BackNavbarReq";
import Modal from "@mui/material/Modal";
import { Divider, Grid } from "@mui/material";
import Box from "@mui/material/Box";

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
  marginTop: "10%",
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
    },

    {
      address: "0xFf27a22195b74b06Af498FC5E63f0A3b0F3Ed9Bd",
      label_Adress: "2",
    },

    {
      address: "0xf8094b52b1Bad1361aBC90993EAe757FFc91C5e3",
      label_Adress: "3",
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
          <h2 id="child-modal-title">Solicitação de indenização</h2>
          <p id="child-modal-description">
            Deseja mesmo permitir o pagamento de indenização a estes participantes?
          </p>
          {/*Conectar a esse botão uma função que adiciona integrantes no grupo */}
          <Button variant="contained" onClick={handleClose} sx={buttonModalYes}>
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
          maxWidth: 360,
          bgcolor: "background.paper",
          padding: "20px 0 0 50px",
        }}
      >
        {/* Navbar da página */}
        <BackNavbarReq />
        <Box sx={{marginTop:8, marginLeft:-5, }}>
        <Grid style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
          <h1 style={{marginBottom:-1}}>Grupo 1</h1>
          _____________________________________________
          <p style={{fontSize: '150%'}}> Solicitações de indenização </p>
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
                  <ListItemIcon sx={{marginLeft:-2.5}}>
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
          <Button variant="contained" onClick={handleOpen} sx={buttonAccept}>
            Aprovar
          </Button>
        </div>
        </Box>
      </List>
    </>
  );
}
