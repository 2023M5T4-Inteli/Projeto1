import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Typography, Grid } from '@mui/material';
import {Context} from './Context';
import React, { useContext, createContext } from "react";
import Button from '@mui/material/Button';

export const Card1 = () => {
    // const Contexto = createContext(['', () => {}]);
    // const [cardHook, setCardHook] = useContext(Context);
    const value = useContext(Context)
    console.log(value.state)
    return (
      <>
      {/* <Context.Provider value={[cardHook, setCardHook]}> */}
      <Card onClick={()=>{value.setState({
        close: 'handleClose3',
        card:"Danos acidentais", 
        valor:'R$38,28 / mês',
        text:'Proteja-se contra as adversidades mais comuns do cotidiano',
        slogan1:'Acidentes com líquidos',
        slogan2:'Danos elétricos',
        slogan3:'Tela quebrada',
        slogan4:'E muito mais'
        })}} sx={{ maxWidth: 345, marginRight: 0}}>
        <CardActionArea >
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              Danos acidentais
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '1rem 2rem 0 0' }}>
              R$38,28 / mês
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#666', margin: '1rem 2rem 0 0' }}>
              Proteja-se contra as adversidades mais comuns do cotidiano
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '1rem 0 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Acidentes com líquidos
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', margin: '0rem 2rem 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Danos elétricos
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Tela quebrada
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#808080', }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />E muito mais
            </Typography>
            {/* {cardHook} */}
          </CardContent>
        </CardActionArea>
      </Card>
      {/* </Context.Provider> */}
      
      </>
    )
  }

  export const Card2 = () => {
    const value = useContext(Context)
    return (
      <Card onClick={()=>{value.setState({
        card:"Roubo, furto qualificado e danos acidentais", 
        valor:'R$75,57 / mês', 
        text:'Proteção completa com o melhor custo benefício',
        slogan1:'O melhor dos mundos por um valor mais em conta',
        slogan2:'Maior segurança no seu dia a dia'
        })}} sx={{ maxWidth: 345, marginTop: 2, marginRight: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom sx={{ fontWeight: '500', fontSize: '15px', margin: '0rem 2rem 0 0' }} component="div">
              Roubo, furto qualificado e danos acidentais
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82',  margin: '0.5rem 2rem 0 0' }}>
              R$75,57/mês
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '10px', color: '#666',  margin: '0.5rem 2rem 0 0'  }}>
              Proteção completa com o melhor custo benefício
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#808080', margin: '1rem 0 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />O melhor dos mundos por um valor mais em conta
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#808080', margin: '0rem 2rem 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Maior segurança no seu dia a dia
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }

  export const Card3 = () => {
    const value = useContext(Context)
    return (
      <Card onClick={()=>{value.setState({     
      card:"Roubo e furto qualificado ", 
      valor:'R$57,75 / mês', 
      text:'Tenha mais tranquilidade no dia a dia',
      slogan1:'O melhor dos mundos por um valor mais em conta',
      slogan2:'Maior segurança no seu dia a dia'})}} sx={{ maxWidth: 345, marginTop: 2, marginRight: 2 }}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom  sx={{ fontWeight: '500', fontSize: '15px', margin: '0rem 2rem 0 0' }} component="div">
              Roubo e furto qualificado 
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '15px', color: '#02DE82', margin: '0.5rem 2rem 0 0' }}>
              R$57,75/mês
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '10px', color: '#666', margin: '0.5rem 2rem 0 0' }}>
              Tenha mais tranquilidade no dia a dia
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#808080', margin: '0rem 0 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Quando é tomado mediante ameaça ou violência
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '8px', color: '#808080', margin: '0rem 2rem 0 0' }}>
              <CheckIcon viewBox='0 0 38 5' sx={{ color: 'green' }} />Quando é subtraído de forma criminosa
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
  }