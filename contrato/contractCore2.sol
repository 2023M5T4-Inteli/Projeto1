// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Owner {
    // Variaveis de estado
    address public owner;
    // status da indenização. False = não solicitada, true = solicitada
    bool public statusIndemnity = false;
    // valor a ser reposto da reserva de risco
    uint public reposition;
    // quantidade de usuários
    uint public userQuantity;
    // valor da indenização solicitada;
    uint public indemnity;
    //Valor que está presente no Contrato (isso é respectivo de cada grupo)
    uint public amountContract = getBalance();
    // array contendo as carteiras de todos os membros do contrato
    address[] public membersContract;
    /* array contendo as carteiras dos membros
     do contrato que realizaram o pagamento da reserva de risco */
    address[] public payers;
    /*array contendo as carteiras dos membros
     que solicitaram pagamento de reembolso */
    address[] private userRequestingIndemnity;

    // Modificador para verificar se quem chamou é o proprietário
    modifier isOwner() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }

    // Funções "receive" e "fallback" do solidity
    /*Função que é chamada quando o contrato 
    recebe um valor sem nenhum dado de transação anexado.*/
    receive() external payable {}

    /* Função que é chamada quando uma função
     invocada não existe ou se não for válida. */
    fallback() external payable {}

    // Eventos
    /*(Eventos são notificações emitidas durante
     a execução de um contrato para informar a 
     ocorrência de uma determinada ação).*/
    // Evento que registra quando o usuário fizer uma compra.
    event Purchase(address _buyer, uint _amount);
    // Evento que registra a adição de um novo membro no contrato.

    event AddMember(address member);

    // Evento que registra o recebimento de um pagamento.
    event PaymentReceived(address member, uint amount);

    // Evento que registra quando todos os pagamentos foram feitos.
    event FinalAmount(uint finalValue);

    // Struct
    /*(Struct é um tipo de dado personalizado 
    que permite definir uma estrutura de dados
    com várias propriedades e usá-la em funções e contratos).*/
    struct Member {
        //Dinheiro do usuário
        uint cash;
        //Cliente do contrato
        address client;
    }

    //Mapping
    /*(Mapping é uma estrutura de
    dados que associa uma chave
    única a um valor). */
    //Nenhum valor esta sendo adicionado nesse mapping.
    mapping(address => Member) public members;
    /*esse maping associa uma carteira a um valor
     inteiro e representa o saldo de cada carteira*/
    mapping(address => uint256) public balances;
    /*esse mamping associa uma carteira a um valor
    inteiro e representa o valor solicitado em uma indenização*/
    mapping(address => uint256) private indemnityRequests;
    /* esse mapping associa uma carteira a um valor booleano 
    e representa os membros ativos do contrato */
    mapping(address => bool) public activeMembers;

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

    // Função para obter os reembolsos pendentes de usuários.
    function getPendingIndemnities()
        public
        view
        isOwner
        returns (address[] memory)
    {
        return userRequestingIndemnity;
    }

    // Função que retorna o valor do fundo
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    // Função para ver quantas pessoas há na carteira
    function getTotalWalletClients() public view returns (uint) {
        uint usersAmount = membersContract.length;
        return usersAmount;
    }

    // Função que adiciona um membro a lista de membros do contrato
    // Essa função atende aos seguintes requisitos:
    // requisito 1: criação de um grupo de seguro mútuo
    // requisito 4: gerenciamento do número de clientes na plataforma
    function addMember(address user) public isOwner {
        membersContract.push(user);
        activeMembers[user] = true;
        emit AddMember(msg.sender);
    }

    //Função que remove um membro do grupo
    // essa função atende ao seguinte requisito:
    // requisito 4: gerenciamento do número de clientes na plataforma
    function removeMember(address userWallet) public isOwner {
        for (uint i = 0; i < membersContract.length - 1; i++) {
            if (membersContract[i] == userWallet) {
                for (uint index = i; i < membersContract.length - 1; index++) {
                    membersContract[index] = membersContract[index + 1];
                }
            }
        }
        // Caso o usuario seja removido ele é retirado da lista de pendencias a pagar
        // userRequestingIndemnity.pop();
        activeMembers[userWallet] = false;
        membersContract.pop();
        return;
    }

    // Função para realizar o pagamento do contrato de seguro
    // Essa função atende aos seguintes requisitos:
    // requisito 2: cobrança de uma taxa administrativa no momento da contratação do seguro
    // requisito 3: cobrança do valor referente ao pagamento do seguro mútuo.
    function contractPayment() public payable {
        // Define a taxa administrativa como 5%.
        uint admTax = 5;
        // Armazena o valor do depósito na variável "deposit".
        uint deposit = msg.value;
        // Calcula o valor a ser pago pelo usuário, descontando a taxa administrativa.
        uint payUser = deposit - ((deposit * admTax) / 100);
        // Adiciona o valor do depósito ao saldo do usuário.
        balances[msg.sender] += msg.value;

        emit Purchase(msg.sender, 1);
        // Emite o evento "PaymentReceived", indicando que o pagamento foi recebido
        emit PaymentReceived(msg.sender, msg.value);
        // Emite o evento indicando o valor final a ser pago pelo usuário.
        emit FinalAmount(payUser);
    }

    /* Essa função verifica de quem solicitou a indenização está no contrato
    e adiciona sua carteira a uma lista de solicitantes */
    // **** Essa função demanda gás para ser executada
    //Essa função atende ao seguinte requisito:
    //Requisito 5: realização de um pedido de indenização
    function RequestIndemnity(address userMakingRequest) public {
        for (uint i = 0; i < membersContract.length; i++) {
            // essa parte verifica se quem pediu indenização está no contrato
            if (membersContract[i] == userMakingRequest) {
                userRequestingIndemnity.push(userMakingRequest);
            }
        }
    }

    // Função voltada para o pagamento do reebolso solicitado
    // essa função atende ao seguinte requisito:
    // requisito 6: aprovação dos pedidos de indenização
    function paymentOfIndemnity(
        address membersWallet,
        uint amount
    ) public isOwner {
        require(amount < amountContract);
        for (uint i = 0; i < userRequestingIndemnity.length; i++) {
            // Condicional para verificar se o input que requiriu o pagamento já está na lista de usuarios que pediram um reembolso
            if (userRequestingIndemnity[i] == membersWallet) {
                payable(membersWallet).transfer(amount);
                userRequestingIndemnity.pop();
                amountContract = amountContract - amount;
            }
        }
    }

    /*Função que verifica a integridade da reserva de risco e
    em caso de comprometimento dessa, solicita sua reposição aos 
    membros do contrato */
    // essa função atende ao seguinte requisito
    // requisito 7: reposição da reserva de risco
    function riskReserveRefund() public payable {
        reposition = indemnity / userQuantity;
        //função que permite a reposição da reserva de risco e garante que todos os membros a paguem
        require(msg.value == reposition, "Valor devido incorreto.");
        // adiciona as carteiras dos membros que pagaram a um array de pagantes
        payers.push(msg.sender);
        // verifica se todos pagaram e muda o status da variavel de solicitação da indenização em caso positivo
        if (payers.length == userQuantity) {
            statusIndemnity = false;
        }
    }
}
