import React, { useContext, useState, useEffect } from 'react';
import ComboBox from "../components/SearchBar";
import Navbar from "../components/Navbar/FloatingAction";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import erc20ABI from "../erc20ABI.json"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from "@mui/material";
import { MyContext } from "../Contextt";
import { CardActionArea, Grid } from '@mui/material';


// Definindo o endereço do contrato 
const contractAddress = "0x1a329C1596cFa1190E695C45f55F31d79cbcb4D7"
// Pegando o json com informações sobre o contrato 
const abi = erc20ABI

async function getContract() {
  if (!window.ethereum) return console.log(`No MetaMask found!`);

  const web3 = new Web3(window.ethereum);
  const accounts = await web3.eth.requestAccounts();
  if (!accounts || !accounts.length) return console.log('Wallet not found/allowed!');

  return new web3.eth.Contract(abi, contractAddress, { from: accounts[0] });
}


async function getActualMembers() {
  try {
    const contract = await getContract();
    const customer = await contract.methods.showAllMembers().call();
    alert(JSON.stringify(customer));
  } catch (err) {
    alert(err.message);
  }
}

// Tela que permite ao usuário visualizar mais detalhes sobre seu atual grupo

export default function ViewGroupsClient2() {
    const [web3, setWeb3] = useState(null);
    const [account, setAccount] = useState(null);
    const [isMember, setIsMember] = useState(false);
    
    const [showCards, setShowCards] = useState(false);
    
    
  useEffect(() => {
    const connectToWallet = async () => {
        try {
            // Detecta se há uma instância da Metamask na janela do navegador
            if (window.ethereum) {
                // Cria uma nova instância do Web3 usando o provedor da Metamask
                const web3 = new Web3(window.ethereum);
                setWeb3(web3);
                // Solicita ao usuário que autorize o acesso à conta
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                var fixAddress = Web3.utils.toChecksumAddress(accounts[0]);

                // Define a conta atual
                setAccount(fixAddress);

                // Verifica se o endereço da carteira é um membro do contrato
                const contract = await getContract();
                const members = await contract.methods.showAllMembers().call();
                if (members.includes(fixAddress)) {
                    setIsMember(true);
                    setShowCards(true);
                } else {
                    setIsMember(false);
                    setShowCards(false);
                }
            } else {
                console.log("Metamask não detectado");
            }
        } catch (error) {
            console.log(error);
        }
    };  

    
    connectToWallet();
  }, []);

    // const value = useContext(MyContext)
    // console.log(value.showCards)
    const navigate = useNavigate();
    function handleLink() {
        return navigate('/idemnityreq');
    }

    return (
        <>

            <Navbar />

            <Accordion sx={{
                paddingTop: 10, backgroundColor: 'rgba(9, 64, 180, 0.1)', paddingBottom: 1, '@media (max-width: 500px)': {
                    minWidth: '115%'
                },
            }}>
                <AccordionSummary
                    expandIcon={
          <ExpandMoreIcon viewBox='0 0 24 24' sx={{ scale:'2', color:'rgba(0, 0, 0, 0.75)' }}/>
        }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box sx={{display:'flex',flexDirection:'column'}}>
                    <Typography style={{ fontFamily: 'Rubik' }} sx={{
                        fontSize: 30, fontWeight: 600,
                        // color: 'rgba(9, 64, 180, 0.8)',
                        color: 'black',
                        marginBottom: 1, marginTop: -1, marginLeft: '2%'
                    }} color="black" gutterBottom>
                        Grupos mútuos
                    </Typography>
                    <Divider />
                    <Typography style={{ fontFamily: 'Rubik' }} sx={{ marginTop: 1, fontSize: 20, fontWeight: 600, color: '#06266A', marginLeft: '2%' }} color="black" gutterBottom>
                        Selecione o grupo de seguro mútuo que deseja visualizar ou interagir.

                    </Typography>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>


                    <Divider />
                    <Typography style={{ fontFamily: 'Rubik' }} sx={{ marginTop: 2, fontSize: 20, fontWeight: 600, color: 'rgba(0, 0, 0, 0.8)', marginLeft: '2%' }} color="black" gutterBottom>
                        Aqui, é feita uma comparação entre o endereço da sua Metamask e os endereços presentes no grupo de seguro mútuo. 
Se você já participa de um grupo, faça um reload na página ou cheque sua Metamask.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box sx={{ paddingTop: 2, display: 'flex', alignItems: 'flex-start', flexDirection: 'column', borderRadius: '24px', paddingLeft: 2 }}>
                <Grid container rowSpacing={2} sx={{
                    marginTop: 2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', '@media (max-width: 500px)': {
                        justifyContent: 'center', marginLeft: 2
                    }, padding: '0 10% 0 5%'
                }} columnSpacing={{ xs: 2, sm: 2, md: 2 }} columnGap={5}>

{showCards && (
                    <Card sx={{ minWidth: 275, marginTop: 2, borderRadius: '24px', width: '20rem', height: '15.5rem', }}>
                        <CardActionArea onClick={handleLink} sx={{ width: '20rem', height: '20rem' }}>
                            <CardContent sx={{ height: '20rem' }}>
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ fontSize: 20, fontWeight: 600, }} color="black" gutterBottom>
                                    Grupo 1
                                </Typography>
                                <Divider sx={{ mb: 1 }} />
                                <Typography style={{ fontFamily: 'Rubik' }} sx={{ mb: 0, fontSize: 20, }} color="text.secondary">
                                    Mínimo de membros: 10
                                    <br />
                                    <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                                    Taxa administrativa: 10%
                                    <br />
                                    <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                                    Valor do seguro: R$120,00
                                    <br />
                                    <Divider sx={{ marginTop: 1, marginBottom: 1 }} />
                                    Cobertura do seguro: 100%
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                 )} 

{!showCards && (
                     <Typography style={{ fontFamily: 'Rubik' }} sx={{ fontSize: 20, fontWeight: 500, color: 'grey', marginLeft:'-10px' }} color="black" gutterBottom>
                     Aguarde o aceite da sua solicitação. Assim que ocorrer, o grupo será mostrado aqui para que você visualize e interaja.
                  </Typography>
                 
                 )} 
                 

                </Grid>

            </Box>
            
        </>
    )
}