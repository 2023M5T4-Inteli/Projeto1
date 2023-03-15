import React, { useState, useEffect } from "react";
import Web3 from "web3";

function MetamaskPlugin() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    // Detecta se há uma instância da Metamask na janela do navegador
    if (window.ethereum) {
      // Cria uma nova instância do Web3 usando o provedor da Metamask
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      // Solicita ao usuário que autorize o acesso à conta
      window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        // Define a conta atual
        setAccount(accounts[0]);
      });
    } else {
      console.log("Metamask não detectado");
    }
  }, []);

  return (
    <div>
      {account ? (
        <p>Conectado à conta {account}</p>
      ) : (
        <p>Não conectado à conta da Metamask</p>
      )}
    </div>
  );
}

export default MetamaskPlugin;