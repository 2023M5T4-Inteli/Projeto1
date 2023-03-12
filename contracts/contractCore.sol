// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract Owner {
    // Variaveis de estado
    address public owner;
    bool public statusIndemnity = false;
    uint public reposition;
    uint public userQuantity; 
    uint public indemnity;



    // Modificador para verificar se quem chamou é o proprietário
    modifier isOwner() {
     
        require(msg.sender == owner, "Caller is not owner");
        _;
    }


    // Funções "receive" e "fallback" do solidity 
    receive() external payable { // Função que é chamada quando o contrato recebe um valor sem nenhum dado de transação anexado. 
    }

    fallback() external payable { // Função que é chamada quando uma função invocada não existe ou se não for válida. 
    }


    // Eventos (Eventos são notificações emitidas durante a execução de um contrato para informar a ocorrência de uma determinada ação).
    event Purchase(address _buyer, uint _amount); // Evento que registra quando o usuário fizer uma compra.
    event AddMember (address member); // Evento que registra a adição de um novo membro no contrato. 
    event PaymentReceived(address member, uint amount); // Evento que registra o recebimento de um pagamento. 
    event FinalAmount(uint finalValue); // Evento que registra quando todos os pagamentos foram feitos. 

    // Struct (Struct é um tipo de dado personalizado que permite definir uma estrutura de dados com várias propriedades e usá-la em funções e contratos).
    struct Member{
        uint cash; //Dinheiro do usuário
        address client; //Cliente do contrato
    }


    //Mapping (Mapping é uma estrutura de dados que associa uma chave única a um valor). 
    //Nenhum valor esta sendo adicionado nesse mapping.
    mapping (address => Member) public members;
    mapping (address => uint256) public balances;
    mapping(address => uint256) private indemnityRequests;
    mapping(address => bool) public activeMembers;


    // ********** Array com informações
    // ********** Buscar entender onde que essas arrays são usadas e como atendem as user stories 
    address [] public membersContract ;
    address[] public payers;

    address [] private userRequestingRefund;



    // Variaveis de estado
    uint public amountContract = getBalance(); // Valor que está presente no Contrato (isso é respectivo de cada grupo)


    address payable private _admin;

    constructor() {
        owner = msg.sender; 
    }   


    // Função para pagar e entrar no contrato 
    // ******** Melhorar o nome da função, variaveis e checar logíca    
    function addMoney() public payable{
        uint admTax = 5; // Define a taxa administrativa como 5%.
        uint deposit = msg.value; // Armazena o valor do depósito na variável "deposit".
        uint payUser = deposit - (deposit * admTax/100); // Calcula o valor a ser pago pelo usuário, descontando a taxa administrativa.
        balances[msg.sender] += msg.value; // Adiciona o valor do depósito ao saldo do usuário.

        emit Purchase(msg.sender, 1); 
        emit PaymentReceived(msg.sender, msg.value); // Emite o evento "PaymentReceived", indicando que o pagamento foi recebido
        emit FinalAmount (payUser); // Emite o evento indicando o valor final a ser pago pelo usuário.
        
    }

    // Função que retorna o proprietário.
    function getOwner() external view returns (address) {
        return owner;
    }
    
    // Função para exibir todos os membros.
    function showAllMembers() external view returns (address[] memory) { 
        return membersContract;
    }

    // Função para obter os reembolsos pendentes de usuários.
    function getPendingRefunds() public isOwner view returns (address [] memory){
        return userRequestingRefund;
    }


    // Função que adiciona um membro a lista de membros do contrato
    function addMember(address user) public isOwner { 
        membersContract.push(user); 
        activeMembers[user] = true;
        emit AddMember(msg.sender);
    }

    // Função que retorna o valor do fundo
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Ver se quem pediu a indenização esta dentro ou não do grupo e adicionando sua carteira numa lista com os usuarios que pediram o pagamento
    // **** Essa função demanda gás para ser executada
    function userRequestingPayment (address userMakingRequest) public {
        for( uint i = 0; i < membersContract.length; i++){
            if (membersContract[i] == userMakingRequest){
                userRequestingRefund.push(userMakingRequest);
            }
            else{
                return ;
            }
        }
    }


    // Função que permite que só o dono envie dinheiro 
    function payRefund(address membersWallet, uint amount) public isOwner{
        require(amount < amountContract);
        // Condicional para verificar se o input que requiriu o pagamento já está na lista de usuarios que pediram um reembolso
        // ********** Convem ver se há como fazer uma função que retorne um booleano ao invés de executar vários loops 
            for( uint i = 0; i < userRequestingRefund.length; i++){
            if (userRequestingRefund[i] == membersWallet){
                payable(membersWallet).transfer(amount);
                userRequestingRefund.pop();
                amountContract = amountContract - amount ;
            }
            else{
                
            }
        }
    }



    // Função para ver quantas pessoas há na carteira 
    function getTotalWalletClients() public view returns(uint) {
        uint usersAmount = membersContract.length;
        return usersAmount;
    }


    // ********* Função que remove os usuarios do grupo 
    function removeUser(address userWallet) public isOwner {
        
        for (uint i = 0; i < membersContract.length - 1; i++ ){
            if (membersContract[i] == userWallet){
                for ( uint index = i; i < membersContract.length - 1; index++){
                    membersContract[index] = membersContract[index + 1];
                }
            }

        }
        // Caso o usuario seja removido ele é automaticamente retirado da lista de pendencias a pagar
        // userRequestingRefund.pop();
        activeMembers[userWallet] = false;
        membersContract.pop();
        return ;
    }


        function riskReserve() public payable{
        require(statusIndemnity = true, "A reserva de risco nao foi comprometida.");
         //função que permite a reposição da reserva de risco e garante que todos os membros a paguem 
        reposition = indemnity/userQuantity;
        require(msg.value == reposition, "Valor devido incorreto.");
        payers.push(msg.sender);
        if (payers.length == userQuantity) {
            statusIndemnity = false;
        }
    }

}
