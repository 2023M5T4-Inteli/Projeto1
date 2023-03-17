import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material/styles';

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
        sx={{ top:0, height:'50px', zIndex:1}}
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
          }, width:120, alignItems:'flex-start', left:10,  },
        }}
        theme={theme}
      >
        <MenuItem sx={{}}>Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </div>
  );
}
