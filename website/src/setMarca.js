import React, { ReactElement, useState, createContext, useContext } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Context from './Context';
import Toolbar from '@mui/material/Toolbar';
import Modal from '@mui/material/Modal';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Divider from '@mui/material/Divider';
import { Card1, Card2, Card3 } from './Cards';
import { Style1, Style2, ContinueButton, ModelButton, MarcaButton } from './App.styles';
import SetModals from './setModals';

export default function SetMarca() {
  // const [cardHook, setCardHook] = useState('');
  // const [cardHook, setCardHook] = useContext(Context);
  return (
    <>
      {/* <Context.Provider value={[cardHook, setCardHook]}> */}

        <SetModals />
      {/* </Context.Provider> */}

    </>
  );
}
