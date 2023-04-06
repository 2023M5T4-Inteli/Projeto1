// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    address payable public beneficiary;
    // Variaveis de estado
    address public owner;
    // taxa administrativa que deve ser paga pelo usuário no momento da entrada em um grupo de seguro
    uint32 public administrativeFee = 5;
    // status da indenização. False = não solicitada, true = solicitada
    bool public statusIndemnity = true;
    // quantidade de usuários
    uint public userQuantity; 
    // valor a ser reposto da reserva de risco
    uint public reposition;
    // valor da indenização solicitada;
    uint public indemnity;
    uint public value;
    // array contendo as carteiras de todos os membros do contrato
    address [] public membersContract;
    /* array contendo as carteiras dos membros
     do contrato que realizaram o pagamento */
    address[] public payers;
    /*array contendo as carteiras dos membros
     que solicitaram pagamento de reembolso */
    address [] public userRequestingIndemnity;
    address [] public approve;
    // Struct 
    /*(Struct é um tipo de dado personalizado 
    que permite definir uma estrutura de dados
    com várias propriedades e usá-la em funções e contratos).*/
    struct Member{
        // carteira do cliente do contrato
        address client; 
        //Imei do usuário tratado por hash
        string _imei;
         //Dinheiro do usuário
        uint cash;
        //uint pricePhone;
    }
    //Mapping 
    /*(Mapping é uma estrutura de
    dados que associa uma chave
    única a um valor). */
    /*esse maping associa uma carteira a um valor
     inteiro e representa o saldo de cada carteira*/
    mapping (address => uint256) public balances;
    /*esse mamping associa uma carteira a um valor
    inteiro e representa o valor solicitado em uma indenização*/
    mapping(address => uint256) private indemnityRequests;
    /* esse mapping associa uma carteira a um valor booleano 
    e representa os membros ativos do contrato */
    mapping(address => bool) public activeMembers;
    /* esse mapping associa uma carteira ao valor 
    referente ao pagamento da taxa administrativa */
    mapping(address => uint256) public administrativeFees;

    // Eventos 
    /*(Eventos são notificações emitidas durante
     a execução de um contrato para informar a 
     ocorrência de uma determinada ação).*/
    // Evento que registra quando o usuário fizer uma compra.
    event Purchase(address _buyer, uint _amount); 
    // Evento que registra a adição de um novo membro no contrato. 
    event AddMember (address member); 
    // Evento que registra o recebimento de um pagamento. 
    event PaymentReceived(address member, uint amount);
    // Evento que registra quando todos os pagamentos foram feitos. 
    event FinalAmount(uint finalValue); 
        // Modificador para verificar se quem chamou é o proprietário
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    // Funções "receive" e "fallback" do solidity 
    /*Função que é chamada quando o contrato 
    recebe um valor sem nenhum dado de transação anexado.*/
    receive() external payable { 
    }
    /* Função que é chamada quando uma função
     invocada não existe ou se não for válida. */
    fallback() external payable { 
    }
    function deposit() external payable {}
    /*Função especial que é executada apenas uma vez 
    quando o contrato é implantado na rede ethereum*/
    // define que o administrador do contrato é quem fez deploy 
    constructor() {
        owner = msg.sender; 
    }

    // Função que retorna a carteira do proprietário.
    function getOwner() external view returns (address) {
        return owner;
    }

    // Função para exibir todos os membros.
    function showAllMembers() external view returns (address[] memory) { 
        return membersContract;
    }

    // // Função para obter os reembolsos pendentes de usuários.
    // function getPendingIndemnities() public isOwner view returns (address [] memory){
    //     return userRequestingIndemnity;
    // }

    // Função que retorna o valor do fundo
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Função para ver quantas pessoas há na carteira 
    function getTotalWalletClients() public view returns (uint) {
        return userQuantity;
    }

    // Função que adiciona um membro a lista de membros do contrato
    // Essa função atende aos seguintes requisitos:
    // requisito 1: criação de um grupo de seguro mútuo
    // requisito 4: gerenciamento do número de clientes na plataforma
    function addMember(address user) public isOwner { 
        membersContract.push(user); 
        activeMembers[user] = true;
        userQuantity = userQuantity + 1;
        emit AddMember(msg.sender);
    }

    //Função que remove um membro do grupo 
    // essa função atende ao seguinte requisito:
    // requisito 4: gerenciamento do número de clientes na plataforma
    function removeMember(address userWallet) public isOwner {
    for (uint i = 0; i < membersContract.length; i++) {
        if (membersContract[i] == userWallet) {
            for (uint index = i; index < membersContract.length - 1; index++) {
                membersContract[index] = membersContract[index + 1];
            }
            membersContract.pop();
            userQuantity = userQuantity - 1;
            activeMembers[userWallet] = false;
            return;
        }
    }
}

    // Função para realizar o pagamento do contrato de seguro  
    // Essa função atende aos seguintes requisitos:
    // requisito 2: cobrança de uma taxa administrativa no momento da contratação do seguro
    // requisito 3: cobrança do valor referente ao pagamento do seguro mútuo.
    function initialPayment(string memory imeiValue, address payable userWallet, uint insuredValue) external payable{
        Member memory members = Member(userWallet, imeiValue, insuredValue);
        uint256 depositUser = insuredValue - ((insuredValue * administrativeFee)/100);
        balances[msg.sender] += msg.value;
        payers.push(msg.sender);
        emit Purchase(msg.sender, insuredValue);
        emit PaymentReceived(msg.sender, msg.value);
        emit FinalAmount(depositUser);
    }

    
    /* Essa função verifica de quem solicitou a indenização está no contrato
    e adiciona sua carteira a uma lista de solicitantes */
    // **** Essa função demanda gás para ser executada
    //Essa função atende ao seguinte requisito:
    //Requisito 5: realização de um pedido de indenização
    function requestIndemnity(uint256 _value) external {
        require(activeMembers[msg.sender], "Member is not active");
        // require(balances[msg.sender] >= _value, "Insufficient funds");
        require(!statusIndemnity, "Indemnity already requested");
        indemnityRequests[msg.sender] = _value;
        statusIndemnity = true;
        userRequestingIndemnity.push(msg.sender);
    }

    // Função voltada para o pagamento da indenização solicitada
    // essa função atende ao seguint256e requisito: 
    // requisito 6: aprovação dos pedidos de indenização
    // Função para aprovação de indenização
    function approveIndemnity(address payable _memberRequesting, uint _amount) public isOwner{
        require(statusIndemnity == true, "Indemnity not requested");
        (bool success, ) = _memberRequesting.call{value: _amount}("");
        require(success, "Failed to send Ether");
        statusIndemnity = false;
    }

    // // Function to transfer Ether from this contract to address from input
    // function transfer(address payable _to, uint _amount) public {
    //     require(1 == 1, "Indemnity not requested");
    //     // require(getBalance() >= indemnityRequests[userRequestingIndemnity[0]], "Insufficient funds");
    //     (bool success, ) = _to.call{value: _amount}("");
    //     require(success, "Failed to send Ether");
    //     // statusIndemnity = false;
    // }

    /*Função que verifica a integridade da reserva de risco e
    em caso de comprometimento dessa, solicita sua reposição aos 
    membros do contrato */
    // essa função atende ao seguinte requisito
    // requisito 7: reposição da reserva de risco
    // function riskReserveRefund() public payable{
    //     reposition = indemnity/userQuantity;
    //     //função que permite a reposição da reserva de risco e garante que todos os membros a paguem 
    //     require(msg.value == reposition, "Valor devido incorreto.");
    //     // adiciona as carteiras dos membros que pagaram a um array de pagantes
    //     payers.push(msg.sender);
    //     // verifica se todos pagaram e muda o status da variavel de solicitação da indenização em caso positivo
    //     if (payers.length == userQuantity) {
    //         statusIndemnity = false;
    //     }
    // }

}
