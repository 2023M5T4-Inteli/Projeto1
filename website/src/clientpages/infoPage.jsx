import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import BackNavbar from "../components/Navbar/BackNavbar"

// Tela com mais informações sobre a solução desenvolvida 
const CellphoneInsurance = () => {
  return (

    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <BackNavbar></BackNavbar>
      {/* <img src={CooverLogo} alt="Coover Logo" style={{ width: '15rem', height: '15rem' }} /> */}
      <br></br>
      <br></br>
      <br></br>
      <Typography variant="h4" sx={{ paddingTop: '2rem', display: 'flex', justifyContent:'center' }} style={{fontFamily: 'Rubik'}}>
        Seguro Mútuo de Celular
      </Typography>

      <Typography variant="h5" sx={{ paddingTop: '3rem', display: 'flex', justifyContent:'right', width:'80%' }} style={{fontFamily: 'Rubik'}}>
        Proteja seu celular contra roubo, quebra e outros danos. Com a Coover, você pode se unir a outros
        usuários de celular para compartilhar o risco de danos ao seu dispositivo.
      </Typography>

      <Typography variant="h6" sx={{ paddingTop: '2rem', display: 'flex', justifyContent:'right', width:'80%' }} style={{fontFamily: 'Rubik'}}>
        Funciona assim: todos os usuários pagam um valor fixo, e se um celular for danificado, o próprio grupo específico
        cobre o custo de reparo ou substituição. Quanto mais usuários participarem, menor será o custo
        para cada pessoa!
      </Typography>

      <Typography variant="h6" sx={{ paddingTop: '2rem', display: 'flex', justifyContent:'right', width:'80%' }} style={{fontFamily: 'Rubik'}}>
        Para se inscrever, é necessário criar uma carteira de criptomoedas e se juntar a um Grupo de seguros, que possuíra uma reserva de risco. 
        O valor dessa reserva é usada para cobrir os custos de reparo ou substituição
        dos celulares danificados.
      </Typography>

      <Grid container sx={{ paddingTop: '2rem' }}>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <Button variant="contained" size="large" sx={{ borderRadius: '15px', backgroundColor: '#EAEAEA', color: 'black' }}>
            <strong style={{ fontFamily: 'Rubik' }}>Voltar</strong>
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
          <Button variant="contained" size="large" sx={{ borderRadius: '15px', backgroundColor: '#02DE82' }}>
            <strong style={{ fontFamily: 'Rubik' }}>Seguinte</strong>
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CellphoneInsurance;