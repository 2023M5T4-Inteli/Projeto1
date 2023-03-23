import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function ViewGroupsClient2() {
    return (
        <>

            <Navbar />
            <Box sx={{ paddingTop: 10, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <ComboBox />
                <Card sx={{ minWidth: 275, marginTop:5 }}>
                    <CardContent>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ fontSize: 14 }} color="black" gutterBottom>
                            Grupo 1
                        </Typography>
                        <Typography style={{fontFamily: 'Rubik'}} sx={{ mb: 1.5 }} color="text.secondary">
                        Mínimo de membros: 10 
                        <br />
                        Taxa administrativa: 10%
                        <br />  
                        Valor do seguro: R$10,00
                        <br />
                        Cobertura do seguro: 100%
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small"><Link to='/idemnityreq'>Ver grupo</Link></Button>
                    </CardActions>
                </Card>
            </Box>
        </>
    )
}