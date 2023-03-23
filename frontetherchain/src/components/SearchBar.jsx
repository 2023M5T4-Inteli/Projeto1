import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({ 
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
    borderRadius:'24px'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:'24px'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    borderRadius:'24px',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
        
      },
    },
  },
}));

export default function SearchAppBar() {
  return (
    <Box sx={{flexGrow: 1, borderRadius:'24px'}}>
      <AppBar position="static" sx={{background:'transparent', borderRadius:'24px', width:'18rem'}}>
        <Toolbar sx={{background:'rgba(2, 222, 130, 0.2)', borderRadius:'24px', paddingRight:1, paddingLeft:1, 
      '@media (min-width: 600px)':{paddingLeft:0, minHeight:0}
      }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
    
          </Typography>
          <Search sx={{backgroundColor:'transparent', color:'black', '&:hover': {borderRadius:'24px',backgroundColor:'rgba(2, 222, 130, 0.15)'},
        '@media (min-width: 600px)':{width:'100%', marginLeft:0}}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
            sx={{'@media (min-width: 600px)':{width:'20ch ', marginLeft:0}, width:'20ch',marginLeft:0}}
              placeholder="Nome do grupo"
              inputProps={{   }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}