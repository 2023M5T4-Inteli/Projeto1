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
        buyToken();
    }

    event Purchase(
        address _buyer,
        uint _amount
    );

    struct Member{
        uint cash; //Dinheiro do user
        address client; //Cliente do contrato
    }
    mapping (address => Member) public members;
    mapping (address => uint256) public balances;
    address [] public membersContract ;

    address payable wallet; 

    /**
     * @dev Set contract deployer as owner
     */
    constructor(address payable _wallet) public{
        console.log("Owner contract deployed by:", msg.sender);
        owner = msg.sender; 
        wallet = _wallet;
        
    }

    function buyToken() public payable {
        balances[msg.sender] += 1;
        wallet.transfer(msg.value);
        emit Purchase(msg.sender, 1);
    }
 
    function getOwner() external view returns (address) {
        return owner;
    }
    function getMember() external view returns (address[] memory) {
        return membersContract;
    }
    function addMember(address user) public {
        membersContract.push(user);
    }
    function sendViaCall(address payable _to) public payable {
    // Retorna o valor boleano indicando sucesso ou falha
    (bool sent, bytes memory data) = _to.call{value: msg.value}("");
    require(sent, "Failed to send Ether");
    }

    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indenizacao tem de ser maior que 0");
        indemnityRequests[msg.sender] = amount;
    }

    function groupCreation(address[] memory walletsToAdd) onlyOwner public {
        require(group.length == 0, "O grupo ja foi criado");
        totalMembers = walletsToAdd.length + 1;
        group = new address[](totalMembers);
        group[0] = _admin;
        for (uint256 i = 0; i < walletsToAdd.length; i++) {
            group[i + 1] = walletsToAdd[i];
        }
    }

    function acceptIndemnityRequest(address requestor) public onlyOwner {
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Pedido de reembolso nao encontrado");
        delete indemnityRequests[requestor];
        payable(requestor).transfer(amountToPay);
    }

    function quantWallet(address newWallet) public onlyOwner returns(bool) {
        require(wallet.length < maxPeople, "Numero maximo de pessoas na Wallets foi atingido.");
        wallet.push(newWallet);
        userQuantity += 1;
        return true;
    }

    function addUser() public onlyOwner returns(bool) {
        require(userQuantity < maxPeople, "O numero maximo de usuarios ja foi atingido.");
        userQuantity++;
        return true;
    }

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