// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract Owner {
    // Variaveis de estado
    address public owner;
    bool public statusIndemnity = false;
    uint public reposition;
    uint public userQuantity; 
    uint public indemnity;



    // modificador para verificar se quem chamou é o proprietário
    modifier isOwner() {
     
        require(msg.sender == owner, "Caller is not owner");
        _;
    }


    // **************** Pesquisar o que fazem essas funções e preencher
    receive() external payable {}

    fallback() external payable {
    }


    // ************ Explicar o que cada evento faz brevemente 
    event Purchase(
        address _buyer,
        uint _amount
    );

    event AddMember (address member);
    event PaymentReceived(address member, uint amount);
    event FinalAmount(uint finalValue);

    // **** Explicar o que é um struct e pra que serve
    struct Member{
        uint cash; //Dinheiro do user
        address client; //Cliente do contrato
    }


    // ********** Pesquisar pra que serve um mapping 
    // Mapping são tabelas hash em solidity, aqui é possivel criar uma associação chave-> valor, vai ser bem util
    //Nenhum valor esta sendo adicionado nesse mapping
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
    uint public amountContract = getBalance(); // valor que está presente no Contrato (isso é respectivo de cada grupo)


    address payable private _admin;

    constructor() {
        owner = msg.sender; 
    }   


    // Função para pagar e entrar no contrato 
    // ******** Melhorar o nome da função, variaveis e checar logíca    
    function addMoney() public payable{
        uint admTax = 5;
        uint deposit = msg.value;
        uint payUser = deposit - (deposit * admTax/100);
        balances[msg.sender] += msg.value;

        emit Purchase(msg.sender, 1);
        emit PaymentReceived(msg.sender, msg.value);
        emit FinalAmount (payUser);
        
    }

 
    function getOwner() external view returns (address) {
        return owner;
    }
    function showAllMembers() external view returns (address[] memory) {
        return membersContract;
    }

    function getPendingRefunds() public isOwner view returns (address [] memory){
        return userRequestingRefund;
    }



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
    // **************** Escrever melhor o nome das funções 
    function quantClientsWallet() public view returns(uint) {
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