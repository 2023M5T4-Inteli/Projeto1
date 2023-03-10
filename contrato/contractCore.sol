// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Owner
 * @dev Set & change owner
 */
contract Owner {
    address public owner;
    // modificador para verificar se o chamador é o proprietário
    modifier isOwner() {
     
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    receive() external payable {}

    fallback() external payable {
        // buyToken();
    }

    event Purchase(
        address _buyer,
        uint _amount
    );

    event AddMember (address member);
    event PaymentReceived(address member, uint amount);

    struct Member{
        uint cash; //Dinheiro do user
        address client; //Cliente do contrato
    }
    mapping (address => Member) public members;
    mapping (address => uint256) public balances;
    mapping(address => uint256) private indemnityRequests;

    address [] public membersContract ;

    address[] public wallet;

    address[] public payers;
    address[] public group;
    uint public amountContract; // valor que está presente no Contrato (isso é respectivo de cada grupo)
    uint public userQuantity; // quantidade de pessoas presente no grupo
    uint public creationDate; // data de criação do grupo
    uint public expirationDate; // data limite de vigência do contrato (está em PT pq provavelmente n sera utilizada)
    uint public minPeople = 5; // mínimo de pessoas para "ativação" do grupo
    uint public maxPeople = 500; // máximo de pessoas que o grupo pode "receber"
    uint public contractEndtime;
    bool public statusIndemnity = false;
    uint public indemnity;
    uint public reposition;


    address payable public _admin;

    /**
     * @dev Set contract deployer as owner
     */
    constructor() {
        owner = msg.sender;
    }
    // função que retorna o administrador do contrato
    function getOwner() external view returns (address) {
        return owner;
    }

    //função que retorna os membros do contrato
    function getMember() external view returns (address[] memory) {
        return membersContract;
    }
    //função que adiciona membros ao grupo de seguros
    function addMember(address user) public isOwner {
        require(wallet.length < maxPeople, "O numero maximo de pessoas na Wallets foi atingido.");
            membersContract.push(user);
            userQuantity++;
    }

    // função que retorna a quantidade de membros do contrato
    function getQuantMembers() external view returns (uint256) {
        return userQuantity;
    }

    // Função que retorna o valor do fundo
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    // função que permite a solicitação de indenização
    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indenizacao tem de ser maior que 0");
        indemnityRequests[msg.sender] = amount;
        indemnity = amount;
    }

    //função que permite que o administrador aceite a requisição da indenização
    function acceptIndemnityRequest(address requestor) public isOwner {
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Pedido de reembolso nao encontrado");
        payable(requestor).transfer(amountToPay);
        delete indemnityRequests[requestor];
        statusIndemnity == true;
    } 

    // função que permite a remoção de um usuário 
    function removeUser(address user) public isOwner returns(bool){
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

    // função que permite o encerramento do contrato 
    function terminateContract() public isOwner { 
    //verifica se ainda há tempo no contrato 
        require(block.timestamp <= contractEndtime); 

    //enviar todos os fundos restantes para o proprietário 
        if (amountContract > 0) { 
        _admin.transfer(amountContract); 
     } 

    //desativar o contrato 
        selfdestruct(_admin); 
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