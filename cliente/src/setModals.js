import React, { useState, useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Context from './Context';
import Divider from '@mui/material/Divider';

import { Card1, Card2, Card3 } from './Cards';
import { Style1, Style2, ContinueButton, ModelButton, MarcaButton } from './App.styles';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
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
    }, color: 'black', height: '4rem', textTransform: 'none', width: '27rem', justifyContent: 'flex-start'
}

export default function SetModals() {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [cardOne, setCardOne] = React.useState(false);
    const [cardTwo, setCardTwo] = React.useState(false);
    const [cardThree, setCardThree] = React.useState(false);
    const [value, setValue] = React.useState('Marca');
    const [value2, setValue2] = React.useState('Modelo');
    const [valueCover, setValueCover] = React.useState('');
    const [modelChoose, setModelChoose] = React.useState('');
    const [modelSelection, setModelSelection] = React.useState('');
    const [open3, setOpen3] = React.useState(false);

    const button1 = () => {
        setValue2('Iphone 11 - 256GB'); setOpen2(false); setValueCover('R$ 1.100,00'); setCardOne(
            <>
                <Card1 />
                <Card2 />
            </>
        )
    };
    const button2 = () => {
        setValue2('Iphone 11 - 128GB'); setOpen2(false); setValueCover('R$ 1.100,00'); setCardOne(
            <>
                <Card1 />
            </>
        )
    };
    const button3 = () => {
        setValue2('Iphone 11 - 64GB'); setOpen2(false); setValueCover('R$ 1.100,00'); setCardOne(
            <>
                <Card3 />
                <Card2 />
            </>
        )
    };

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




    const ModelChooseApple = () => {
        return (
            <>
                <Button variant="text" sx={estilo} onClick={button1}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 - 256GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={button2}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 - 128GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={button3}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 - 64GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 256GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 Pro - 256GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 128GB'); setOpen2(false); setValueCover('R$ 1.200,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 Pro - 128GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Iphone 11 Pro - 64GB'); setOpen2(false); setValueCover('R$ 2.500,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Iphone 11 Pro - 64GB
                    </Typography>
                </Button>
            </>
        )
    }
    const ModelChooseAsus = () => {
        return (
            <>
                <Button variant="text" sx={estilo} onClick={() => { setValue2('ROG Phone 2 - 128GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        ROG Phone 2 - 128GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('ROG Phone 3 - 128GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        ROG Phone 3 - 128GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('ZENFONE 2 - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        ZENFONE 2 - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Zenfone 3 - 64GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Zenfone 3 - 64GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('ZENFONE 3 - 32GB'); setOpen2(false); setValueCover('R$ 1.200,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        ZENFONE 3 - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('ZENFONE 3 - 16GB'); setOpen2(false); setValueCover('R$ 2.500,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        ZENFONE 3 - 16GB
                    </Typography>
                </Button>
            </>
        )
    }
    const ModelChooseMotorola = () => {
        return (
            <>
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Edge plus - 256GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Edge plus - 256GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('G7 PLUS - 64GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        G7 PLUS - 64GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('G7 POWER - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        G7 POWER - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('G7 POWER - 64GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        G7 POWER - 64GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('G8 PLAY - 64GB'); setOpen2(false); setValueCover('R$ 1.200,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        G8 PLAY - 64GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('G8 PLAY - 32GB'); setOpen2(false); setValueCover('R$ 2.500,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        G8 PLAY - 32GB
                    </Typography>
                </Button>
            </>
        )
    }
    const ModelChooseSamsung = () => {
        return (
            <>
                <Button variant="text" sx={estilo} onClick={() => { setValue2('A03 Core - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        A03 Core - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Galaxy A01 - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Galaxy A01 - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Galaxy A01 Core - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Galaxy A01 Core - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Galaxy A02 - 32GB'); setOpen2(false); setValueCover('R$ 1.800,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Galaxy A02 - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Galaxy A02s - 32GB'); setOpen2(false); setValueCover('R$ 1.200,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Galaxy A02s - 32GB
                    </Typography>
                </Button>
                <Divider />
                <Button variant="text" sx={estilo} onClick={() => { setValue2('Galaxy A03 - 32GB'); setOpen2(false); setValueCover('R$ 2.500,00') }}>
                    <Typography id="modal-modal-description" sx={{ mt: 3, mb: 2, width: '15rem', display: 'flex' }}>
                        Galaxy A03 - 32GB
                    </Typography>
                </Button>
            </>
        )
    }
    // const [cardHook, setCardHook] = useState('');
    // const [cardHook, setCardHook] = useContext(Context);

    return (
        <>
            {/* <Context.Provider value={[cardHook, setCardHook]}> */}
            <Modal
                open={open}
                disableScrollLock
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={Style1}>

                    {/* <Toolbar sx={{
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

                    </Toolbar> */}



                    <ImageList sx={{
                        width: 458, '@media (max-width: 500px)': {
                            width: 360, ml: 0
                        }, height: 600, ml: 4, mt: 0, mb: -3,
                    }} cols={3} rowHeight={200}>

                        <ImageListItem>
                            <Button variant="text" sx={estilo} onClick={() => { setValue('Apple'); setValue2('Modelo'); setOpen(false); setModelChoose(<ModelChooseApple />); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    Apple
                                </Typography>
                            </Button>
                            <Divider />
                            <Button variant="text" sx={estilo} onClick={() => { setValue('Asus'); setValue2('Modelo'); setOpen(false); setModelChoose(<ModelChooseAsus />); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    Asus
                                </Typography>
                            </Button>
                            <Divider />
                            <Button variant="text" sx={estilo} onClick={() => { setValue('Motorola'); setValue2('Modelo'); setOpen(false); setModelChoose(<ModelChooseMotorola />); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    Motorola
                                </Typography>
                            </Button>
                            <Divider />
                            <Button variant="text" sx={estilo} onClick={() => { setValue('Samsung'); setValue2('Modelo'); setOpen(false); setModelChoose(<ModelChooseSamsung />); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    Samsung
                                </Typography>
                            </Button>
                            <Divider />
                            <Button variant="text" sx={estilo} onClick={() => { setValue('LGe'); setValue2('Modelo'); setOpen(false); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    LGe
                                </Typography>
                            </Button>
                            <Divider />
                            <Button variant="text" sx={estilo} onClick={() => { setValue('Xiaomi'); setValue2('Modelo'); setOpen(false); }}>
                                <Typography id="modal-modal-description" sx={{ mt: 3, mr: 45, mb: 2 }}>
                                    Xiaomi
                                </Typography>
                            </Button>
                        </ImageListItem>

                    </ImageList>

                </Box>
            </Modal>
            <Modal
                open={open2}
                disableScrollLock
                onClose={handleClose2}
                aria-labelledby="parent-modal-title2"
                aria-describedby="parent-modal-description2"
            >
                <Box sx={Style1}>

                    {/* <Toolbar sx={{
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
                    </Toolbar> */}



                    <ImageList sx={{
                        width: 458, height: 600,
                        '@media (max-width: 650px)': {
                            width: 350, mr: -4
                        }, ml: -4, mt: 0, mb: -3, mr: -8
                    }} cols={3} rowHeight={200}>

                        <ImageListItem>
                            {modelChoose}
                        </ImageListItem>

                    </ImageList>

                </Box>
            </Modal>

            <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                {/* Seleção de marca */}
                <Typography sx={{
                    fontWeight: '500', fontSize: '15px', 
                    color: 'white', 
                    margin: '5rem 20rem 0 0',
                    '@media (max-width: 500px)': {
                        margin: '8rem 15rem 0 0', '@media (max-width: 400px)': {
                            margin: '8em 13rem 0 0',
                        },
                    },
                }}>
                    Selecione a marca
                </Typography>
                <Button sx={MarcaButton} onClick={handleOpen} placeholder='Marca'>
                    {value}
                </Button>

                {/* Seleção de modelo */}
                <Typography sx={{
                    fontWeight: '500', fontSize: '15px',
                    // color: '#02DE82', 
                    // color: '#0865D3',
                    color: 'white',
                    margin: '5rem 20rem 0 0',
                    '@media (max-width: 500px)': {
                        margin: '5em 15rem 0 0', '@media (max-width: 400px)': {
                            margin: '5rem 13rem 0 0',
                        },'@media (min-height: 600px)': {
                            margin: '3rem 13rem 0 0',
                        },
                    },
                }}>
                    Selecione o modelo
                </Typography>

                
                <Button sx={ModelButton} onClick={handleOpen2}>
       
                    {value2}
              
                </Button>
              

                {/* Mostrar grupos */}
                <Button sx={ContinueButton}
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
                disableScrollLock
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 5000,
                }}
            >
                <Fade in={open3}>
                    <Box sx={Style2}>

                        <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#92949C', marginTop: '0.5rem', display: 'flex', flexDirection: 'row' }}>
                            PROTEÇÕES PARA <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 1, fontSize: '15px' }}>{value2}</Typography></Typography>
                        <Typography sx={{ fontWeight: '800', fontSize: '30px', color: '#06266A' }}>
                            ESCOLHA O PLANO IDEAL
                        </Typography>
                        <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#92949C', marginTop: '0.5rem', display: 'flex', flexDirection: 'row' }}>
                            Valor da cobertura <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bold', marginLeft: 1, fontSize: '20px', }}>{valueCover}</Typography>
                        </Typography>

                        <Box sx={{
                            // display: 'flex', flexDirection: 'column',
                            position: 'absolute',
                            top: '65%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 300, height: 400,

                            '@media (max-width: 400px)': {
                                width: 340
                            },
                            bgcolor: 'background.paper',
                            // border: '2px solid #000',
                            boxShadow: 12,
                          
                            px: 3,
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            flexDirection: 'column',
                            pb: 3,
                            borderRadius: 3
                        }} >
                            <ImageList cols={1} sx={{}}>
                                <ImageListItem>
                                    {cardOne}
                                    {cardTwo}
                                    {cardThree}
                                </ImageListItem>
                            </ImageList>
                        </Box>

                    </Box>
                </Fade>
            </Modal>
            {/* </Context.Provider> */}

        </>
    )
};
