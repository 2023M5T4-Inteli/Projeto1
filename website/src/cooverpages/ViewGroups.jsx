import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {useNavigate } from "react-router-dom";
import {CardActionArea } from '@mui/material';
import {Divider} from "@mui/material";


/* Tela que mostra os grupos disponiveis*/
export default function ViewGroups() {
    const navigate = useNavigate();
    function handleLink() {
      return navigate('/group1');
   }
    return (
        <>

            <Navbar />
            <Box sx={{ paddingTop: 10, display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderRadius:'24px', paddingLeft:2 }}>
            <Typography style={{fontFamily: 'Rubik'}} sx={{ marginBottom:1, fontSize: 20, fontWeight:600, color:'black' }} color="black" gutterBottom>
                    Selecione abaixo o grupo que deseja visualizar ou interagir.
                </Typography>
               <Divider sx={{marginBottom:2, width:'100%'}}/>
                {/* <ComboBox sx={{borderRadius:'24px', }} /> */}
         
                <Card sx={{ minWidth: 275, marginTop:3, borderRadius:'24px' }}>
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
                        Valor do seguro: R$10,00
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

