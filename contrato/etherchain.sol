// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ContratoCoover {
    // Variáveis globais

    uint public amountContract; // valor que está presente no Contrato (isso é respectivo de cada grupo)
    uint public userQuantity; // quantidade de pessoas presente no grupo
    uint public creationDate; // data de criação do grupo
    uint public expirationDate; // data limite de vigência do contrato (está em PT pq provavelmente n sera utilizada)
    uint public minPeople = 5; // mínimo de pessoas para "ativação" do grupo
    uint public maxPeople = 500; // máximo de pessoas que o grupo pode "receber"

    address private _admin; //variável de administrador
    address[] public group; // variável de endereço referenciada ao grupo; ela será "modelada" 

    uint256 public totalMembers; // membros totais do grupo (pode ser atribuído a diferentes grupos)

    struct Wallets {
        address userWallet;
    }
    
    address[] public wallet;
    
    // referências e armazenamento dos addresses 
    mapping(address => bool) public acceptedTerm;
    mapping(address => uint256) private indemnityRequests;

    // Construtor
    // Este constructor roda apenas no deploy e tem a função de guarda algumas informações muito importantes
    constructor(uint _users, uint _usersMin, uint _userMax) payable{
        _admin = msg.sender;
        creationDate = block.timestamp; //guarda a data de criação
        amountContract = address(this).balance;
        userQuantity = _users;
        minPeople = _usersMin;
        maxPeople = _userMax;
    }


    // Modificador que tem a função de checar se o contrato esta ativo ou não 
    modifier viability(){
        if (userQuantity >= minPeople && block.timestamp <= expirationDate && userQuantity <= maxPeople) {
                _; // Contrato Ativo
            } else if (userQuantity < minPeople && block.timestamp <= expirationDate) {
                _; // Contrato em Progresso
            } else if (block.timestamp > expirationDate || userQuantity < minPeople) {
                revert("Contrato inativo"); // Contrato Inativo
            } else {
                revert("Erro ao verificar o contrato");
        }
    }



    // Modificador para permitir que apenas o dono do contrato acesse determinada função
    modifier onlyOwner() {
        require(msg.sender == _admin, "Apenas o dono do contrato pode executar essa funcao.");
        _;
    }



    // //User story 2 
    // //Função que permite visualizar o contrato na blockchain e poder escolher algum para participar
    // function checkGroups () public {
    // }

    // User story 3
    // função que permite a solicitação de uma indenização e armazena o endereço do solicitante
    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indenizacao tem de ser maior que 0");
        indemnityRequests[msg.sender] = amount;
    }


    // User story 5 
    // Função que permite ao usuario solicitar o reembolso
    function redeemnRefund() private{

    }

    // User story 6
    // Função que permite o cliente ver os termos do contrato 
    function checkTerms() public {

    }

    // User story 7
    // Criação de um grupo a partir das Wallets
    function groupCreation(address[] memory walletsToAdd) onlyOwner public {
        require(group.length == 0, "O grupo ja foi criado");
        totalMembers = walletsToAdd.length + 1;
        group = new address[](totalMembers);
        group[0] = _admin;
        for (uint256 i = 0; i < walletsToAdd.length; i++) {
            group[i + 1] = walletsToAdd[i];
        }
    }

    // User story 8
    // A Coover tem a possibilidade de visualizar o grupo criado por ela e também excluir o mesmo
    function showDeleteGroup() private onlyOwner{

    }


    // User story 9
    /* Permite que o proprietário aceite uma solicitação de indenização
    ao final, se todas as condições forem atendidas, o valor solicitado é
    transferido para o endereço do solicitante e a solicitação é excluída. */
    
    function acceptIndemnityRequest(address requestor) public onlyOwner {
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Pedido de reembolso nao encontrado");
        delete indemnityRequests[requestor];
        payable(requestor).transfer(amountToPay);
    }

    // User story 10 
    // O administrador consegue editar as regras do contrato 
    function changeRules() public{

    }
   

    // A função abaixo aparece para todos os visualizadores da Blockchain, porem, somente o dono consegue editar a função
    // Além disso, essa função delimita o numero de pessoas que podem estar dentro da carteira  

    function quantWallet(address newWallet) public onlyOwner returns(bool) {
        require(wallet.length < maxPeople, "Numero maximo de pessoas na Wallets foi atingido.");
        wallet.push(newWallet);
        userQuantity += 1;
        return true;
    }

    
    // Adiciona um novo usuário ao grupo

    function addUser() public onlyOwner returns(bool) {
        require(userQuantity < maxPeople, "O numero maximo de usuarios ja foi atingido.");
        userQuantity++;
        return true;
    }



    // Remove um usuário do grupo

    function removeUser(address user) public onlyOwner returns(bool){

        for (uint i = 0; i < wallet.length - 1; i++) {
            if (wallet[i] == user) {
                
                for(uint index = i; i < wallet.length - 1; index++){
                    wallet[index] = wallet[index + 1];
                }
                
            }

        }   

        wallet.pop();
        return true;
    }


}