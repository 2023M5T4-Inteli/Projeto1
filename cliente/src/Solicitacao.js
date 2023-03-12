import logo from './logo.svg';
import './App.css';
import BottomNav from './components/BottomNav'
import React, { ReactElement, useState, createContext, useContext} from 'react';
import Sidebar from './components/Sidebar'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Icon } from './App.styles'
import ImageList from './ImageList'
import { Images, Text, Papel } from './App.styles'
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Toolbar from '@mui/material/Toolbar';
import SetMarca from './setMarca'
import { Box } from '@mui/system';
import {Notification1, Notification2} from './Notification'

function Solicitacao() {
  return (
    <>
        <BottomNav />
        <Box sx={{background:'#002242', paddingTop:'40px', paddingBottom:'100%', }}>
        <Notification1></Notification1>
        <Notification2></Notification2>
        </Box>
        <Box sx={{ 
          // background: 'rgb(250,249,233)',
          // background: 'radial-gradient(circle, rgba(250,249,233,0.3) 41%, rgba(250,249,233,0.4) 100%)',
          backgroundColor: '#fffefa',
          // backgroundColor: '#002242',
        height: '66.7rem', }}>

          {/* <Grid sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',}}>

            <Typography sx={{  fontSize: '30px', 
          //  color: '#06266A', 
          color: 'white',  fontWeight:'bold',
            marginTop: '90px',
          '@media (max-width: 620px)': {
            fontSize: '24px'},
            '@media (max-width: 500px)': {
              fontSize: '22px'}, '@media (max-width: 400px)': {
                fontSize: '18px'},
                '@media (max-width: 310px)': {
                  fontSize: '17px'}
            }}>
              Escolha um plano para o seu celular
            </Typography>
            <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#92949C', marginTop: '0.5rem',
          '@media (max-width: 620px)': {
            fontSize: '14px'},
            '@media (max-width: 500px)': {
              fontSize: '12px'}, '@media (max-width: 400px)': {
                fontSize: '11px'},
                '@media (max-width: 310px)': {
                  fontSize: '9px'}
             }}>
              Para começar, precisamos identificar o modelo do seu smartphone.
            </Typography>
            <SetMarca />
          </Grid> */}
        </Box>
    </>
  );
}

export default Solicitacao;
