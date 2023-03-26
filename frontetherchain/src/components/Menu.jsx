import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import CheckboxList from '../cooverpages/enterRequest';

// Constantes que tem o estilo dos componentes utilizados no frontend 

const theme = createTheme({
    components: {
      MuiMenu: {
        styleOverrides: {
          list: {
            display:'flex', flexDirection:'column'
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            
          },
        },
      },
    },
  });


 // Função que gera o menu  
export default function BasicMenu() {
 
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ top:5, height:'50px', zIndex:1}}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{display:'flex', flexDirection:'column'}}
        MenuListProps={{
            disablePadding: true, 
          'aria-labelledby': 'basic-button',
          sx: { display:'flex', flexDirection:'column', '& .MuiList-root': {
            
          }, width:120, alignItems:'flex-start', left:10},
        }}
        theme={theme}
      >
        <MenuItem sx={{width:'110px', left:-5, 
        '& .MuiButtonBase-root':{alignItems:'flex-start',}}}
        >
         <Link to='/CellphoneInsurance' style={{textDecoration:'none'}}>Saiba mais</Link> </MenuItem>
        <MenuItem sx={{width:'110px', left:-5}} ><Link to='/' style={{textDecoration:'none'}}>Logout</Link></MenuItem>
      </Menu>
 
    </div>
  );
}
