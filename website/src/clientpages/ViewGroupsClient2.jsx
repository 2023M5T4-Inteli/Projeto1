import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link, useNavigate } from "react-router-dom";
import {Divider} from "@mui/material";
import { CardActionArea } from '@mui/material';


// Tela que permite ao usuário visualizar mais detalhes sobre seu atual grupo

export default function ViewGroupsClient2() {
  const navigate = useNavigate();
  function handleLink() {
    return navigate('/idemnityreq');
 }
    
    return (
        <>

            <Navbar />
            <Box sx={{ paddingTop: 10, display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderRadius:'24px', paddingLeft:2 }}>
            <Typography style={{fontFamily: 'Rubik'}} sx={{ marginBottom:2, fontSize: 20, fontWeight:600, color:'black' }} color="black" gutterBottom>
                    Selecione um dos seus grupos para visualizar ou interagir. 
                </Typography>
               <Divider sx={{ width:'100%'}}/>
                {/* <ComboBox sx={{borderRadius:'24px'}} /> */}
                {/* <Box></Box> */}
                <br></br>
                <br></br>
              
                <Card sx={{ minWidth: 275,  borderRadius:'24px'}}>
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
            </Box>
        </>
    )
}