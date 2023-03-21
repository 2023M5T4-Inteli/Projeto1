import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { MyContextProvider } from '../../Contextt';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

export default function BackNavbar() {
// Essa constante define o número de notificações.
// Se esse número for maior que 0, o ícone se altera
// para alertar o usuário. 
// const value = useContext(NotificationsContext);

  return (
    <>

      <Paper
        sx={{
          borderRadius: 0,
          backgroundColor: 'rgba(2, 222, 130, 0.1)',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', 
            '& > :not(style)': {
              m: 2,
              borderRadius: 10,
            },
          }}
        >
          <Link to='/gruposclient'>
            
          <Fab sx={{   '&:hover': {
      backgroundColor: 'rgba(2, 222, 130, 1)',
    },backgroundColor: 'rgba(2, 222, 130, 0.4)', borderRadius:10 }} 
    size="small" color="secondary" aria-label="add" >

            <ArrowBackIosIcon sx={{ fill: 'black', position:'absolute', backgroundColor: 'transparent', borderRadius:10,padding:'0 0 0 8px'}} />
          </Fab>
          </Link>

        </Box>
      </Paper>
    </>
  );
}
