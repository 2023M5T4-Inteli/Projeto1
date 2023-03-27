import React, {useContext} from 'react'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Paper from '@mui/material/Paper';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Badge from '@mui/material/Badge';
import TemporaryDrawer from '../Drawer';
import BasicMenu from '../Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


/* Essa constante define o número de notificações.
Se esse número for maior que 0, o ícone se altera para alertar o usuário. 
const value = useContext(NotificationsContext); */

export default function Navbar() {
  return (
    <>
      <Paper
        sx={{
          borderRadius: 0,
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
            justifyContent: 'space-between', 
            backgroundColor: 'rgba(2, 222, 130, 0.3)',

            
            '& > :not(style)': {
              m: 2,
              borderRadius: 10,
            },
          }}
        >
          <Fab sx={{   '&:hover': {
      backgroundColor: 'rgba(2, 222, 130, 1)',
    },backgroundColor: 'rgba(2, 222, 130, 0.4)' }} 
    size="small" color="secondary" aria-label="add">
            <BasicMenu/>
            <MenuOpenIcon sx={{ fill: 'black', position:'absolute', backgroundColor: 'transparent', borderRadius:10,padding:1}} />
          </Fab>

          <Fab sx={{backgroundColor: 'rgba(2, 222, 130, 0.4)', '&:hover': {
      backgroundColor: 'rgba(2, 222, 130, 1)',
    },}} size="small" color="secondary" aria-label="add">
            {/* <Link to={'/notifications'} style={{ textDecoration: 'none', lineHeight: 0, fill: 'black' }}> */}
           
            <TemporaryDrawer />
           

            <Badge
              color="success"
              variant="standard"
              showZero={false}
              sx={{}}
              // badgeContent={value.notificationsCount}
            >
              <NotificationsNoneIcon sx={{ fill: 'black', backgroundColor: 'transparent', borderRadius:10,padding:1 }}  />
            </Badge>
            {/* </Link> */}
          </Fab>
        </Box>
      </Paper>
    </>
  );
}