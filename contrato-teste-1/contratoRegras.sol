// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;
contract CooverFactory {
    // O que precisa ter no smart contract?
    
    //Administrador/seguradora:
    // precisa ser o dono do contrato
    // administra o pagamento das indenizações 
    // administra a quantidade de pessoas em um grupo (adiciona ou retira pessoas)
    // recebe dinheiro dos contratantes do seguro
    // dá início ao contrato 

    //Administrado/segurado:
    // precisa ser membro de um contrato
    // precisa pagar o seguro para a seguradora
    // solicita a entrada em grupos de seguro
    // solicita o pagamento de indenizações
    
    // Variáveis:
    // valor enviado por cada membro do grupo
    // saldo total do grupo
    // quantidade de membros de um grupo
    // quantidade mínima de pessoas no contrato
    // data do envio da solicitação
    // booleano do pedido de indenização
    // data do pedido de 


    // Variaveis 
    address private owner;
    uint public fund;

    address[] public group;
    //  struct Carteiras {
    //     address carteiraUsuario;
    // }

    // address[] public carteira;

    // Constructor
    constructor() {
        owner = msg.sender;
    }
    // Modifier
    modifier isOwner {
        require(owner == msg.sender, "not owner!");
        _;
    }
    // Defining fund value
    function defineFund() public isOwner {
        fund = 10;
    }
    // Owner transfer amount to wallets
    function transferAmount(address payable _to, uint _amount) public isOwner {
        _to.transfer(_amount);
    }
    //mostre o valor do fundo

    // User story 3: Eu, como usuário do sistema, 
    // quero ter a possibilidade de solicitar uma indenização em casos de prejuízos ao meu patrimônio.
    function claimCompensation() public { 
    } 
 
    // User story 5: Eu, como consumidor dos serviços oferecidos pela Coover, 
    // quero ter a chance de solicitar o reembolso do serviço contratado.
    function requestRefund (uint _userFee) private {
        // require( msg.sender = _owner, “Voce não é um possuidor deste contrato” );
        //transferir o valor de "userFee" da carteira da Coover para a carteira do usuário
    }

    // User story 7 -> Como seguradora, quero montar um grupo de seguro mútuo.
    function createGroup(address _newGroup) private {
        // require( msg.sender = _owner, “Voce não é um possuidor deste contrato” );
        group.push(_newGroup);
    }

    //User story 9 : Eu, como seguradora, quero ter a chance de aprovar os pedidos de indenização. 
    //Nesta função a seguradora consegue enviar pagamentos para os membros do contrato.
    function refundClient() public{
    }

    
    //Precisamos estudar sobre eventos e entender como os mesmos funcionam no código
}
