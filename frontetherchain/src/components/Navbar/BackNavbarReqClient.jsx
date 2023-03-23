import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function BackNavbarReqClient() {
// Essa constante define o número de notificações.
// Se esse número for maior que 0, o ícone se altera
// para alertar o usuário. 
// const value = useContext(NotificationsContext);

  return (
    <>

      <Paper
        sx={{
          borderRadius: '0',
          backgroundColor: 'white',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          
        }}
      >
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'rgba(2, 222, 130, 0.3)',
            justifyContent: 'space-between',  borderRadius:'20px',
            '& > :not(style)': {
              m: 2,
              borderRadius: '20px',
            },
          }}
        >
          <Link to='/gruposclient2' style={{ }}>

          <Fab sx={{  '&:hover': {borderRadius:'20px',
      backgroundColor: 'rgba(2, 222, 130, 1)',},
      backgroundColor: 'rgba(2, 222, 130, 0.4) !important', borderRadius:'20px !important'}} 
    size="small" color="secondary" aria-label="add" >

            <ArrowBackIosIcon sx={{ fill: 'black', position:'absolute', backgroundColor: 'transparent', borderRadius:'10px',padding:'0 0 0 8px'}} />
          </Fab>
          </Link>

        </Box>
      </Paper>
    </>
  );
}
