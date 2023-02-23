// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

contract MutualInsurance {
    // variáveis
    address private _owner;
    address[] public group; // carteiras de todos os integrantes do grupo em questão
    uint256 public fee; // taxa única que deve ser paga no momento da contratação do seguro
    //uint256 public minMembers; // quantidade mínima de membros para que seja possível iniciar o grupo
    //uint256 public maxMembers; // quantidade máxima de membros que possibilitará o fechamento automático do grupo
    uint256 public totalMembers; // quantidade total de membros do grupo (número a ser utilizado no front-end)
    uint256 public totalValue; // saldo total do contrato em questão
    bool public refund; // solicitação de reembolso. Se for true, o reembolso foi solicitado
    bool public indemnity; // solicitação de indenização. se for true, a indenização foi solicitada
    mapping(address => uint256) private indemnityRequests;

    // constructor
    constructor(address[] memory group_) payable {
        _owner = msg.sender;
        totalMembers = group_.length;
        group = group_;
        totalValue = msg.value;

        // pagamento da taxa equivalente ao valor completo do seguro mútuo de cada participante
        fee = 2000 * 10**18 / 10000;
        for (uint256 i = 0; i < group.length; i++) {
            if (group[i] != _owner) {
                require(
                    payable(group[i]).send(fee),
                    "Failed to send fee payment!"
                );
            }
            indemnityRequests[group[i]] = fee;
        }
    }


    // user story 7
    // criação de um grupo a partir das carteiras
    function groupCreation(address[] memory walletsToAdd) public {
        require(_owner == msg.sender, "Only the owner can modify the group!");
        require(group.length == 0, "The group has already been created");
        totalMembers = walletsToAdd.length + 1;
        group = new address[](totalMembers);
        group[0] = _owner;
        for (uint256 i = 0; i < walletsToAdd.length; i++) {
            group[i + 1] = walletsToAdd[i];
        }
    }

    // função que retorna os integrantes de um grupo de seguro
    function getGroupMembers() public view returns (address[] memory) {
        return group;
    }

    // User story 3
    // função que permite a solicitação de uma indenização e armazena o endereço do solicitante
    function requestIndemnity(uint256 amount) public {
        require(amount > 0, "Indemnity amount must be greater than zero");
        indemnityRequests[msg.sender] = amount;
    }

    // User story 9
    // Permite que o proprietário aceite uma solicitação de indenização
    // ao final, se todas as condições forem atendidas, o valor solicitado é
    // transferido para o endereço do solicitante e a solicitação é excluída.
    function acceptIndemnityRequest(address requestor) public {
        require(msg.sender == _owner,"Only owner can accept indemnity requests");
        uint256 amountToPay = indemnityRequests[requestor];
        require(amountToPay > 0, "Indemnity request not found");
        delete indemnityRequests[requestor];
        payable(requestor).transfer(amountToPay);
    }

    function getIndemnityRequest(address requestor) public view returns (uint256) {
        return indemnityRequests[requestor];
    }

// teste
}
