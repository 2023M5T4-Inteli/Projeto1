import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Divider, Grid} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { CardActionArea } from '@mui/material';

// Tela que permite ao usuário escolher qual grupo ele gostaria de fazer parte 

export default function ViewGroupsClient() {
    const navigate = useNavigate();
    function handleLink() {
      return navigate('/group1client');
   }
    return (
        <>

            <Navbar />
            <Box sx={{ paddingTop: 10, display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderRadius:'24px', paddingLeft:2 }}>
            <Typography style={{fontFamily: 'Rubik'}} sx={{ marginBottom:2, fontSize: 20, fontWeight:600, color:'black' }} color="black" gutterBottom>
                    Selecione o grupo de seguro mútuo em que deseja participar.
                </Typography>
               <Divider sx={{marginBottom:2, width:'100%'}}/>
                {/* <ComboBox/> */}
                

                <Grid container rowSpacing={2} sx={{marginTop:2, marginLeft:2}} columnSpacing={{ xs: 2, sm: 2, md: 2 }}>
                <Card sx={{ minWidth: 275, marginTop:2, borderRadius:'24px',  marginLeft:2 }}>
                    <CardActionArea onClick={handleLink}>
                    <CardContent>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ fontSize: 16, fontWeight:600 }} color="black" gutterBottom>
                            Grupo 1
                        </Typography>
                        <Divider sx={{mb:1}}/>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ mb: 0 }} color="text.secondary">
                        Mínimo de membros: 10 
                        <br />
                        Taxa administrativa: 10%
                        <br />  
                        Valor do seguro: R$120,00
                        <br />
                        Cobertura do seguro: 100%
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ minWidth: 275, marginTop:2, marginLeft:2, borderRadius:'24px',  }}>
                    <CardActionArea onClick={handleLink}>
                    <CardContent>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ fontSize: 16, fontWeight:600 }} color="black" gutterBottom>
                            Grupo 2
                        </Typography>
                        <Divider sx={{mb:1}}/>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ mb: 0 }} color="text.secondary">
                        Mínimo de membros: 70 
                        <br />
                        Taxa administrativa: 5%
                        <br />  
                        Valor do seguro: R$400,00
                        <br />
                        Cobertura do seguro: 75%
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>

            </Box>
        </>

    )
}