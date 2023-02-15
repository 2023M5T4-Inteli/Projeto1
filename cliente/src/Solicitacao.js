import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Icon } from './App.styles'
import ImageList from './ImageList'
import { Images, Text, Papel } from './App.styles'
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import SetMarca from './setMarca'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  // backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor: '#E7E7E7',
  '&:hover': {
    backgroundColor: '#F1F1F1',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
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
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '26ch',
      },
    },

  },
}));

function Solicitacao() {
  return (
    <>

      <Navbar />
 
      <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '30px' }}>
      {/* <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', }}> */}
        {/* <Toolbar sx={{
          minHeight: "32px",
          '@media (min-width: 600px)': {
            minHeight: "32px"
          }, 
        }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, }}
          >
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
         */}
        {/* </Grid> */}

        
          <Typography sx={{ fontWeight: '800', fontSize: '30px', color: '#06266A'}}>
            Escolha um plano para o seu celular
          </Typography>
          <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#92949C', marginTop:'0.5rem' }}>
            Para começar, precisamos identificar o modelo do seu smartphone.
          </Typography>
         
          <SetMarca/>
     

        {/* <Images>
          <ImageList />
        </Images> */}


      </Grid>
  

    </>
  );
}

export default Solicitacao;
