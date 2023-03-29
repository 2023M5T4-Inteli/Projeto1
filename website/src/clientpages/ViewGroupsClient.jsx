import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider, Grid } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link, useNavigate } from "react-router-dom";
import { CardActionArea } from '@mui/material';

// Tela que permite ao usuá\rio escolher qual grupo ele gostaria de fazer parte 

export default function ViewGroupsClient() {
    const navigate = useNavigate();
    function handleLink() {
        return navigate('/group1client');
    }
    return (
        <>

            <Navbar />

{/*  */}
            <Accordion sx={{paddingTop:10, backgroundColor:'rgba(9, 64, 180, 0.1)'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontFamily: 'Rubik' }} sx={{ fontSize: 26, fontWeight: 600, 
            // color: 'rgba(9, 64, 180, 0.8)',
            color:'black',  
            marginBottom:-0.5, marginTop:-2 }} color="black" gutterBottom>
                    Grupos disponíveis
                </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Divider/>
        <Typography style={{ fontFamily: 'Rubik' }} sx={{ marginTop:2,fontSize: 20, fontWeight: 600, color: '#06266A',    }} color="black" gutterBottom>
                    Selecione o grupo de seguro mútuo em que deseja participar.
                </Typography>
        </AccordionDetails>
      </Accordion>
{/*  */}

            <Box sx={{  display: 'flex', alignItems: 'flex-start', flexDirection: 'row', borderRadius: '24px',  }}>

                {/* <ComboBox/> */}


                <Grid container rowSpacing={2} sx={{ marginTop: 1, display:'flex', flexDirection:'row', justifyContent:'space-around', padding:'0 10% 0 10%'}} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>

                    <Card sx={{ minWidth: 275, marginTop: 2, borderRadius: '24px', width:'20rem', height:'15.5rem', }}>
                        <CardActionArea onClick={handleLink} sx={{width:'20rem', height:'20rem'}}>
                            <CardContent sx={{height:'20rem'}}>
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ fontSize: 20, fontWeight: 600,}} color="black" gutterBottom>
                                    Grupo 1
                                </Typography>
                                <Divider sx={{ mb: 1 }} />
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ mb: 0,fontSize: 20, }} color="text.secondary">
                                    Mínimo de membros: 10
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Taxa administrativa: 10%
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Valor do seguro: R$120,00
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Cobertura do seguro: 100%
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={{ marginTop: 2, borderRadius: '24px', width:'20rem', height:'15.5rem', marginBottom:2 }}>
                        <CardActionArea onClick={handleLink} sx={{  width:'20rem', height:'20rem' }}>
                            <CardContent sx={{height:'20rem'}}>
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ fontSize: 20, fontWeight: 600 }} color="black" gutterBottom>
                                    Grupo 2
                                </Typography>
                                <Divider sx={{ mb: 1 }} />
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ mb: 0,fontSize: 20, }} color="text.secondary">
                                    Mínimo de membros: 10
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Taxa administrativa: 10%
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Valor do seguro: R$120,00
                                    <br />
                                    <Divider sx={{marginTop:1, marginBottom:1}}/>
                                    Cobertura do seguro: 100%
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>

            </Box>
        </>

    )
}