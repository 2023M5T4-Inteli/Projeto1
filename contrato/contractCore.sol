// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;


contract Owner {
    address public owner;

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
    mapping (address => Member) public members;
    mapping (address => uint256) public balances;
    mapping(address => uint256) private indemnityRequests;
    mapping(address => bool) public activeMembers;


    // ********** Array com informações
    // ********** Buscar entender onde que essas arrays são usadas e como atendem as user stories 
    address [] public membersContract ;

    address[] public wallet;

    address [] public group;

    address [] private userRequestingRefund;



    // Variaveis de estado
    uint public amountContract = getBalance(); // valor que está presente no Contrato (isso é respectivo de cada grupo)

    /* ***** Para simplificar o escope creio que não precisa de minimo e máximo de users 
    Porque, teriamos de adicionar varias condicionais para iniciar o contrato.
    Além disso, essas variaveis públicas não estão sendo usadas em nenhuma função 
    
    min people
    max people
    contractEndtime
    creationDate
    */
    uint public creationDate; // data de deploy do contrato 
    uint public minPeople = 5; // mínimo de pessoas para "ativação" do grupo
    uint public maxPeople = 500; // máximo de pessoas que o grupo pode "receber"
    uint public contractEndtime;




    address payable private _admin;

    constructor() {
        owner = msg.sender; 
    }   


    // Função para pagar e entrar no contrato 
    // ******** Melhorar o nome da função e as variaveis 
    function addMoney() public payable{
        uint admTax;
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


    // Aceitar e pagar a indenização 
    //************** TODO 
    // function acceptIndemnityRequest(address requestor) public isOwner {
    //     // uint256 amountToPay = indemnityRequests[requestor];
    //     require(amountToPay > 0, "Pedido de reembolso nao encontrado");
    //     delete indemnityRequests[requestor];
    //     require(msg.sender.balance >= amountToPay, "Saldo insuficiente para processar pedido");
    //     payable(requestor).transfer(amountToPay);
        
    // }

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
        userRequestingRefund.pop();
        activeMembers[userWallet] = false;
        membersContract.pop();
        return ;
    }




// ******* Explicar como funciona a função sem comentários dentro
    function terminateContract() public isOwner { 
    //verifica se ainda há tempo no contrato 
        require(block.timestamp <= contractEndtime); 

    //enviar todos os fundos restantes para o proprietário 
        if (amountContract > 0) { 
        _admin.transfer(amountContract); 
     } 

    //desativar o contrato (Ajeitar porque sera desativado)
        selfdestruct(_admin); 
    }
    
}