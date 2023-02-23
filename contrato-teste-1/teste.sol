// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Este código é para teste e para ser modificados pelos integrantes do Grupo 1

contract ContratoCoover {
    // Variáveis globais
    uint public id; //
    uint public amountContract; // 
    uint public userQuantity; // 
    uint public creationDate; //  
    uint public dataValidade; // 
    uint public minPeople = 5; // 
    uint public maxPeople = 50; // 
    uint public plusDays; //
    address private _admin; 
    address[] public group;
    uint256 public totalMembers;
    address private _owner;
    // string public user;

    struct Wallets {
        address userWallet;
    }
    
    address[] public wallet;
    
    mapping(address => bool) public termoAceito;

    mapping(address => uint256) private indemnityRequests;

    // Construtor
    constructor(uint _users, uint _usersMin, uint _userMax, uint _plusDays) payable{
        _admin = msg.sender;
        creationDate = block.timestamp; //guarda a data de criação
        amountContract = address(this).balance;
        userQuantity = _users;
        minPeople = _usersMin;
        maxPeople = _userMax;
        dataValidade = creationDate + _plusDays * 1 days; // guarda a data de validade
    }

    // Funções

    // Modificador para permitir que apenas o dono do contrato acesse uma função

    /* Permite que o proprietário aceite uma solicitação de indenização
    ao final, se todas as condições forem atendidas, o valor solicitado é
    transferido para o endereço do solicitante e a solicitação é excluída.*/
    modifier onlyOwner() {
        require(msg.sender == _admin, "Apenas o dono do contrato pode executar essa funcao.");
        _;
    }

    // User story 3
    // função que permite a solicitação de uma indenização e armazena o endereço do solicitante
    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indemnity amount must be greater than zero");
        indemnityRequests[msg.sender] = amount;
    }

    //lembrar de adicionar nas funções devidas
    modifier viabilidade(){
        if (userQuantity >= minPeople && block.timestamp <= dataValidade && userQuantity <= maxPeople) {
                _; // Contrato Ativo
            } else if (userQuantity < minPeople && block.timestamp <= dataValidade) {
                _; // Contrato em Progresso
            } else if (block.timestamp > dataValidade || userQuantity < minPeople) {
                revert("Contrato inativo"); // Contrato Inativo
            } else {
                revert("Erro ao verificar o contrato");
        }
    }

    // user story 7
    // criação de um grupo a partir das Wallets
    function groupCreation(address[] memory walletsToAdd) onlyOwner public {
        require(group.length == 0, "The group has already been created");
        totalMembers = walletsToAdd.length + 1;
        group = new address[](totalMembers);
        group[0] = _owner;
        for (uint256 i = 0; i < walletsToAdd.length; i++) {
            group[i + 1] = walletsToAdd[i];
        }
    }

    // User story 9
    /* Permite que o proprietário aceite uma solicitação de indenização
    ao final, se todas as condições forem atendidas, o valor solicitado é
    transferido para o endereço do solicitante e a solicitação é excluída. */
    
    function acceptIndemnityRequest(address requestor) public {
        require(msg.sender == _owner,"Only owner can accept indemnity requests");
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Indemnity request not found");
        delete indemnityRequests[requestor];
        payable(requestor).transfer(amountToPay);
    }
   
    // A função abaixo aparece para todos os visualizadores da Blockchain, porem, somente o dono consegue editar a função
    // Além disso, essa função delimita o numero de pessoas que podem estar dentro da carteira  

    function quantWallet(address newWallet) public onlyOwner returns(bool) {
        require(wallet.length < maxPeople, "Numero maximo de pessoas na Wallets foi atingido.");
        wallet.push(newWallet);
        userQuantity += 1;
        return true;
    }

    
    // Adiciona um novo usuário ao projeto

    function addUser() public onlyOwner returns(bool) {
        require(userQuantity < maxPeople, "O numero maximo de usuarios ja foi atingido.");
        userQuantity++;
        return true;
    }



    // Remove um usuário do projeto

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

    // fallback() external payable {}

}






