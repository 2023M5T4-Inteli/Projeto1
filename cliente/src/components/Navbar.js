import React, { ReactElement, useState, createContext, useContext } from 'react';
import { Context } from '../Context';
import { Grid } from "@mui/material";
import { Cardio } from '../Cards';
import Pagination from '@mui/material/Pagination';
// import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  GridDividerHeader,
  GridTitle,
  DividerHeader,
  PaperDividerHeader,
  SpanIconTitle,
} from '../App.styles'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import Sidebar from './Sidebar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import { hover } from '@testing-library/user-event/dist/hover';



const tema = createTheme({
  palette: {
    primary: {
      // main: '#737373',
      main: '#737373',
    },
    '&:hover': {
      main: '#F1F1F1',
    },
    secondary: {
      // main: '#02DE82', 
      main: 'rgba(2, 222, 130, 0.5)'
    },
  },
});

const estilo = {
  '&:hover': {
    backgroundColor: '#FAF9E9',
  }, backgroundColor: '#FAF9E9', color: 'black', height: '35rem', textTransform: 'none', justifyContent: 'flex-start',
  display: 'flex', top: '10%', left: '25%', '@media (max-width: 600px)': {
    left: '3%',
  },
  position: 'absolute', borderRadius: 2, flexDirection: 'column'
}

const estilo2 = {
  '&:hover': {
    backgroundColor: 'white',
  }, backgroundColor: 'white', color: 'black', alignItems: 'center', height: '15rem', textTransform: 'none', justifyContent: 'flex-start',
  display: 'flex', top: '25%', left: '30%', '@media (max-width: 600px)': {
    left: '25%',
  },
  position: 'absolute', borderRadius: 2, flexDirection: 'column'
}

function ChildModal() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <React.Fragment>
      <Button>Saiba mais</Button>
      <Button onClick={handleOpen} variant='contained' sx={{ marginLeft: 3 }}>Indenização</Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...estilo2, width: 200 }}>
          <Button onClick={handleClose}>Close Child Modal</Button>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>

        </Box>
      </Modal>
    </React.Fragment>
  );
}

// import { IHeaderMenuProps } from "../../interfaces/components/IHeaderMenuProps";

export default function Navbar() {
  const value = useContext(Context)
  // const [cardHook, setCardHook] = useState('');
  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => {
    setOpen4(true);
  };
  const handleClose4 = () => {
    setOpen4(false);
  };

  return (

    <>
      {/* <Context.Provider value={[cardHook, setCardHook]}> */}
      <ThemeProvider theme={tema}>
        {/* <PaperDividerHeader> */}
        <GridDividerHeader style={{}}>
          {/* <Stack sx={{position:"fixed", left:'1rem'}}>  */}
          <Sidebar />
          {/* </Stack> */}

          <Stack spacing={0} direction="row" sx={{
            position: 'fixed', left: '20%', top: '18px',
            '@media (max-width: 425px)': {
              left: '18%'
            }, '@media (max-width: 350px)': {
              left: '14%'
            }
            , '@media (min-width: 600px)': {
              left: '25%'
            }, '@media (min-width: 700px)': {
              left: '40%'
            }
          }} >


            <Button variant='text' size='small' sx={{ color: 'white' }} >Início</Button>
            <Button variant='text' size='small' sx={{ color: 'white' }}>Sobre nós</Button>
            <Button variant='text' size='small' sx={{ color: 'white' }}>Ajuda</Button>
          </Stack>

          <Stack spacing={2} direction="row">
            <Button variant='contained' color='secondary' onClick={handleOpen4} sx={{
              position: 'fixed', left: '67%',
              '@media (min-width: 600px)': {
                left: '80%'
              }, '@media (min-width: 800px)': {
                left: '89%'
              }, '@media (max-width: 400px)': {
                left: '70%'
              }, '@media (max-width: 600px)': {
                left: '76%'
              },
            }}>
              <div style={{ color: 'White', fontWeight: 'bold', }}>
                Wallet</div>
            </Button>
          </Stack>

          <Modal
            open={open4}
            disableScrollLock
            onClose={handleClose4}
          >
            <Box sx={{ ...estilo, width: 400 }}>
              <Grid sx={{ padding: 4 }}>
                <Typography gutterBottom variant="h5" component="div">
                  Dados
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                  Nome
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                  Email
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                  Chave pública
                </Typography>
                <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                  RG / CPF
                </Typography>
              </Grid>

              <Card sx={{ maxWidth: 345, marginTop: -2, marginRight: 5, height: '15.5rem', marginLeft: 5, marginBottom: 0 }}>
                <CardActionArea >
                  <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                      {value.state.card}
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1rem 2rem 0 0' }}>
                      {value.state.valor}
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                      {value.state.text}
                    </Typography>
                    <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between' }}>
                      <Grid sx={{ display: 'flex', flexDirection: 'row', fontWeight: 450, marginTop: 2, marginRight: 3 }}>
                        <ChildModal />
                      </Grid>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
              <Grid sx={{ display: 'flex', justifyContent: 'center', marginTop: 3, marginRight: 5 }}>
                <Pagination count={3} variant="outlined" color="secondary" />
              </Grid>
            </Box>
          </Modal>


        </GridDividerHeader>
        {/* </PaperDividerHeader> */}
      </ThemeProvider>
      {/* </Context.Provider> */}

    </>


  );
}

