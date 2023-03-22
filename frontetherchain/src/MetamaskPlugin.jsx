import React, { useState, useEffect } from "react";
import Web3 from "web3";
import CreateGroups from "./cooverpages/CreateGroup";
import { Grid, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckboxList from "./cooverpages/enterRequest";
import Divider from '@mui/material/Divider';
import Grupos from "./cooverpages/groupView";
import CooverHome from '../src/img/coover_img.png';
import { Box } from "@mui/system";

function MetamaskPlugin() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [displayClient, setDisplayClient] = useState(null);
  const navigate = useNavigate();
  
  /* Definindo a carteira do administrador.
  Se atentar que na hora de colocar o endereço tudo tem de estar minusculo */
  const cooverWalletAdrress = "0xa930575a2cca74cc4db44edd260a4eb489709a79"

  function handleDisplayChange(account) {
    if (account === cooverWalletAdrress) {
      return navigate('/grupos');
      console.log("Está como coover");
    } 
    else if (account === null) {
      console.log("Não é a coover", account);
      navigate('/')
    }
    else {
      return navigate('/gruposclient')
      console.log("Não é a coover", account);
    }
  }
  
  // resolve um erro de renderização
  useEffect(() => {
    handleDisplayChange(account);
  }, [account]);


  const handleConnect = async () => {
    try {
      // Detecta se há uma instância da Metamask na janela do navegador
      if (window.ethereum) {
        // Cria uma nova instância do Web3 usando o provedor da Metamask
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);

        // Solicita ao usuário que autorize o acesso à conta
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        // Define a conta atual
        setAccount(accounts[0]);
      } else {
        console.log("Metamask não detectado");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* output gerado após a conexão */}

      {account ? (
        <div>
       {/* <Typography variant="body1">
          Conectado a conta {accountMessage}
        </Typography> */}
          {displayClient}
        </div>
      ) : (
        
        // Output gerado antes da conexão
        <Box sx={{width:'30rem'}}>
          
          <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: 5 }}>
            <img src={CooverHome} alt="CooverLogo"  />
          </Grid>
          <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: 15, }}>
            <Button variant="contained" onClick={handleConnect} size='large' sx={{ borderRadius: '15px', backgroundColor: '#EAEAEA', color: 'black' }}>
              <strong>Conecte sua carteira</strong>
            </Button>
            <div>
          </div>
          </Grid>
          <Divider sx={{paddingTop:5}}/>
          <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: 5, }}>
            <Button sx={{ borderRadius: '15px', backgroundColor: '#02DE82' }} variant="contained" size='large' >
              <strong>Crie sua MetaMask</strong>
            </Button>
          </Grid>
        </Box>

      )}

    </div>

  );
}

export default MetamaskPlugin;

