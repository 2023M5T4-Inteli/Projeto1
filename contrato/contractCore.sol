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
}