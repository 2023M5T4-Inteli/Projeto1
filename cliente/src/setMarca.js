import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';
import Fab from '@mui/material/Fab';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import AvatarGroup from '@mui/material/AvatarGroup';
import { deepOrange } from '@mui/material/colors';
import { Typography, Grid } from '@mui/material';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import { height } from '@mui/system';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450, height: 320,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  paddingTop: 2,
  px: 3,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  flexDirection: 'column',
  pb: 3,
  borderRadius: 3
};
const style3 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 450,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  borderRadius:'20px'
};

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
      width: '42ch',
      '&:focus': {
        width: '43ch',
      },
    },

  },
}));
const estilo = {
  '&:hover': {
    backgroundColor: '#FAF9E9',
  }, color: 'black', height: '4rem', textTransform: 'none', width: '35rem', justifyContent: 'flex-start',
}

export default function SetMarca() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [value, setValue] = React.useState('Marca');
  const [value2, setValue2] = React.useState('Modelo');
  const [open3, setOpen3] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };
  const marca = () => {
    <>
      <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1rem 20rem 0 0' }}>
        Selecione a marca
      </Typography>
      <Button sx={{
        width: '30rem',
        height: '3rem',
        marginTop: '0.5rem',
        justifyContent: 'flex-start',
        background: '#FAF9E9',
        padding: '30px',
        borderRadius: '10px'

      }} onClick={handleOpen}>
        Marca
      </Button>
    </>
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>

          <Toolbar sx={{
            minHeight: "32px",
            '@media (min-width: 600px)': {
              minHeight: "32px",
            }, mt: 1
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
                placeholder="Marca"
                inputProps={{ 'aria-label': 'search' }}

              />

            </Search>

          </Toolbar>



          <ImageList sx={{ width: 458, height: 600, ml: 4, mt: 1, mb: -3, }} cols={3} rowHeight={200}>

            <ImageListItem>
              <Button variant="text" sx={estilo} onClick={() => { setValue('Apple'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  Apple
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue('Asus'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  Asus
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue('DOOGEE'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  DOOGEE
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue('Huawei'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  Huawei
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue('LGe'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  LGe
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue('Motorola'); setOpen(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                  Motorola
                </Typography>
              </Button>
            </ImageListItem>

          </ImageList>

        </Box>
      </Modal>


      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="parent-modal-title2"
        aria-describedby="parent-modal-description2"
      >
        <Box sx={style}>

          <Toolbar sx={{
            minHeight: "32px",

            '@media (min-width: 600px)': {
              minHeight: "32px",
            }, mt: 1

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
                placeholder="Modelo"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Toolbar>



          <ImageList sx={{ width: 458, height: 600, ml: -4, mt: 1, mb: -3, mr: -6 }} cols={3} rowHeight={200}>

            <ImageListItem>
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 - 256GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '10rem' }}>
                  Iphone 11 - 256GB
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 - 128GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '10rem' }}>
                  Iphone 11 - 128GB
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 - 64GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '10rem' }}>
                  Iphone 11 - 64GB
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 256GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '15rem' }}>
                  Iphone 11 Pro - 256GB
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 128GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '15rem' }}>
                  Iphone 11 Pro - 128GB
                </Typography>
              </Button>
              <Divider />
              <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 64GB'); setOpen2(false) }}>
                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2, width: '15rem' }}>
                  Iphone 11 Pro - 64GB
                </Typography>
              </Button>
            </ImageListItem>

          </ImageList>

        </Box>
      </Modal>

      <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1.5rem 20rem 0 0' }}>
          Selecione a marca
        </Typography>
        <Button sx={{
          width: '30rem',
          height: '3rem',
          marginTop: '0.5rem',
          justifyContent: 'flex-start',
          background: '#FAF9E9',
          color: '#737373',

          textTransform: 'none',
          padding: '30px',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#FAF9E9',
            border: '1px solid #e2dfb0'
          },

        }} onClick={handleOpen} placeholder='Marca'>
          {value}
        </Button>

        <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '2rem 20rem 0 0' }}>
          Selecione o modelo
        </Typography>
        <Button sx={{
          width: '30rem',
          height: '3rem',
          marginTop: '0.5rem',
          justifyContent: 'flex-start',
          background: '#FAF9E9',
          textTransform: 'none',
          color: '#737373',
          padding: '30px',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#FAF9E9',
            border: '1px solid #e2dfb0'
          },

        }} onClick={handleOpen2}>
          {value2}
        </Button>

        <Button sx={{
          width: '28rem',
          height: '2.4rem',
          marginTop: '3rem',
          justifyContent: 'center',
          background: '#02DE82',
          textTransform: 'none',
          color: 'white',
          padding: '30px',
          fontSize: '20px',
          borderRadius: '30px',
          '&:hover': {
            backgroundColor: '#5ad6a2',
          },

        }}
          onClick={handleOpen3}>
          Continuar
        </Button>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        onClose={handleClose3}
        closeAfterTransition
        
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open3}>
          <Box sx={style3}>
          {/* <Fab  aria-label="add">
        < ArrowBackIosIcon/>
      </Fab> */}
            <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#92949C', marginTop: '0.5rem' }}>
              PROTEÇÕES PARA ...
            </Typography>
            <Typography sx={{ fontWeight: '800', fontSize: '30px', color: '#06266A' }}>
              ESCOLHA O PLANO IDEAL
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#92949C', marginTop: '0.5rem' }}>
              Valor da cobertura ...
            </Typography>

          <Box sx={{display:'flex', flexDirection:'row'}}>
            <Card sx={{ maxWidth: 345, marginTop: 5, marginRight:2 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Danos acidentais
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1rem 2rem 0 0' }}>
                    R$23,98/mês
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                    Tenha mais tranquilidade no dia a dia
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '1rem 2rem 0 0' }}>
                    Acidentes com líquidos
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '0rem 2rem 0 0' }}>
                    Danos elétricos
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '0rem 2rem 0 0' }}>
                    Tela quebrada
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345, marginTop: 5 }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Danos acidentais
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1rem 2rem 0 0' }}>
                    R$23,98/mês
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
                    Tenha mais tranquilidade no dia a dia
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '1rem 2rem 0 0' }}>
                    Acidentes com líquidos
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '0rem 2rem 0 0' }}>
                    Danos elétricos
                  </Typography>
                  <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '0rem 2rem 0 0' }}>
                    Tela quebrada
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Box>

          </Box>
        </Fade>
      </Modal>



    </>
  );
}
