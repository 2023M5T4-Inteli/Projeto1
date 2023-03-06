// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
import "hardhat/console.sol";

contract Owner {
    address public owner;
    event AddMenber (address member);

    // modificador para verificar se o chamador é o proprietário
    modifier isOwner() {

        require(msg.sender == owner, "Nao eh o dono");
        _;
    }


    struct Member{
        uint cash; //Dinheiro do user
        address client; //Cliente do contrato
    }

    // Endereço das carteiras
    mapping (address => bool) public members;
    address [] public membersContract ;

    // Eventos necessários

    constructor() {
        console.log("Contrato deployado por :", msg.sender);
        owner = msg.sender; 
    }



    // Funções do contrato 
    function getOwner() external view returns (address) {
        return owner;
    }
    function getMember() external view returns (address[] memory) {
        return membersContract;
    }
    function addMember(address user) public {
        membersContract.push(user);
    }

    // Função que permite que só o dono envie dinheiro 
    function sendMoney(address members, uint amount) public{
        require(msg.sender == owner, "So o administrador consegue enviar recursos");
        payable(members).transfer(amount);
    }

    // // Função que permita com que qualquer pessoa paga o contrato, mas pra isso o adm tem que adicionar essa pessoa primeiro 
    // function payFee() public payable {
    //     members[msg.sender] = true;
    //     emit PaymenT;

    // }


    
    


}