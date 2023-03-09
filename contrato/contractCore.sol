// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";

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


    address [] public group;
    uint256 public totalMembers;
    uint public amountContract; // valor que está presente no Contrato (isso é respectivo de cada grupo)
    uint public userQuantity; // quantidade de pessoas presente no grupo
    uint public creationDate; // data de criação do grupo
    uint public expirationDate; // data limite de vigência do contrato (está em PT pq provavelmente n sera utilizada)
    uint public minPeople = 5; // mínimo de pessoas para "ativação" do grupo
    uint public maxPeople = 500; // máximo de pessoas que o grupo pode "receber"
    uint public contractEndtime;

    address private _admin;

    /**
     * @dev Set contract deployer as owner
     */
    constructor(address payable _wallet) {
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender;
        
    }

    // function buyToken() public payable {
    //     balances[msg.sender] += 1;
    //     wallet.transfer(msg.value);
    //     emit Purchase(msg.sender, 1);
    // }
 
    function getOwner() external view returns (address) {
        return owner;
    }
    function getMember() external view returns (address[] memory) {
        return membersContract;
    }
    function addMember(address user) public isOwner {
        membersContract.push(user);
    }

    // Função que retorna o valor do fundo
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indenizacao tem de ser maior que 0");
        indemnityRequests[msg.sender] = amount;
    }

    // function groupCreation(address[] memory walletsToAdd) isOwner public {
    //     require(group.length == 0, "O grupo ja foi criado");
    //     totalMembers = walletsToAdd.length + 1;
    //     group = new address[](totalMembers);
    //     group[0] = _admin;
    //     for (uint256 i = 0; i < walletsToAdd.length; i++) {
    //         group[i + 1] = walletsToAdd[i];
    //     }
    // }

    function acceptIndemnityRequest(address requestor) public isOwner {
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Pedido de reembolso nao encontrado");
        delete indemnityRequests[requestor];
        payable(requestor).transfer(amountToPay);
    }

    function quantWallet(address newWallet) public isOwner returns(bool success) {
        require(wallet.length < maxPeople, "O numero maximo de pessoas na Wallets foi atingido.");
        wallet.push(newWallet);
        userQuantity++;
     return true;
}


    // function addUser() public isOwner returns(bool) {
    //     require(userQuantity < maxPeople, "O numero maximo de usuarios ja foi atingido.");
    //     userQuantity++;
    //     return true;
    // }

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

    function terminateContract() public isOwner { 
    //verifica se ainda há tempo no contrato 
        require(block.timestamp <= contractEndTime); 

    //enviar todos os fundos restantes para o proprietário 
        if (balance > 0) { 
        owner.transfer(balance); 
     } 

    //desativar o contrato 
        selfdestruct(owner); 
    }
    
}