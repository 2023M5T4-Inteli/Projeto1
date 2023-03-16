import React, { useState, useEffect } from "react";
import Web3 from "web3";
import CreateGroups from "./CreateGroup";
import { Grid, Button, Typography } from '@mui/material';
import CheckboxList from "./solicitacaoEntrar";
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';

function MetamaskPlugin() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);
  const [displayClient, setDisplayClient] = useState(null);

  // let accountMessage;
  // if (account === '0xa930575a2cca74cc4db44edd260a4eb489709a79') {
  //   accountMessage = 'Coover';
  // } else {
  //   accountMessage = account;
  // }
  // if (accountMessage === account) {
  //   setDisplayClient(() => <CreateGroups/>);
  // } else {
  //   setDisplayClient(() => <CheckboxList/>);
  // }

  // O código abaixo realiza todos os comandos acima de forma efetiva
  function handleDisplayChange(account) {
    if (account !== '0xa930575a2cca74cc4db44edd260a4eb489709a79') {
      setDisplayClient(() => <CheckboxList />);
      // setDisplayClient(() => <Link to="/about">Checkbox List</Link>);

    } else if (account === '0xa930575a2cca74cc4db44edd260a4eb489709a79'){
      setDisplayClient(() => <CreateGroups />);
      
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
        <div>
          <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: 45 }}>
            <Button variant="contained" onClick={handleConnect} size='large' sx={{ borderRadius: '15px', backgroundColor: '#EAEAEA', color: 'black' }}>
              Conecte sua carteira
            </Button>
          </Grid>
          <br /><br />
          <Divider variant="middle" textAlign="center">ou</Divider>
          <Grid sx={{ display: 'flex', justifyContent: 'center', paddingTop: 5, }}>
            <Button sx={{ borderRadius: '15px', backgroundColor: '#02DE82' }} variant="contained" size='large' >
              Crie sua MetaMask
            </Button>
          </Grid>
        </div>

      )}

    </div>

  );
}

export default MetamaskPlugin;