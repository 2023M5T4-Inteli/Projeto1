import React from "react";
import ComboBox from "../components/SearchBar";
import Navbar from "../components/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function ViewGroups() {
    return (
        <>

            <Navbar />
            <Box sx={{ paddingTop: 7, display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <div>
                    <h2>Visualizar Grupos:</h2>
                </div>
                <ComboBox />

                <Card sx={{ minWidth: 275, marginTop:5 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                            Grupo 1
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
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
                        <Button size="small">Ver grupo</Button>
                    </CardActions>
                </Card>

            </Box>
        </>

    )
}