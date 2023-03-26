// Esse código corresponde aos casos de teste do "contractCore" que foi commitado dia 13/03/2023.
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "remix_tests.sol";
import "hardhat/console.sol";
import "../contracts/contractCore.sol";

// Declaração do contrato de testes
contract OwnerTest {
    Owner contractCore;

    // Função executada antes de cada teste
    function beforeEach() public {
        contractCore = new Owner();
    }

    // 1° Caso: Teste para verificar se um membro é adicionado corretamente
    function testAddMember() public {
        contractCore.addMember(address(this));

        // Procura pelo endereço do contrato atual na lista de membros
        bool memberFound = false;
        address[] memory members = contractCore.showAllMembers();
        for (uint i = 0; i < members.length; i++) {
            if (members[i] == address(this)) {
                memberFound = true;
                break;
            }
        }

        // Verifica se o endereço foi encontrado e, portanto, adicionado corretamente
        Assert.equal(memberFound, true, "Membro nao foi adicionado");
    }

    // 2° Caso: Teste para verificar se o número total de clientes de carteira é calculado corretamente
    function testGetTotalWalletClients() public {
        // Define dois endereços de membros
        address member1 = address(0x123);
        address member2 = address(0x456);

        // Adiciona os dois endereços de membros
        contractCore.addMember(member1);
        contractCore.addMember(member2);

        // Verifica se o número total de clientes de carteira é igual a 2
        uint expected = 2;
        uint actual = contractCore.getTotalWalletClients();
        Assert.equal(
            actual,
            expected,
            "O numero total de clientes de carteira nao foi calculado corretamente"
        );
    }

    // 3° Caso: Teste para verificar se apenas o proprietário pode remover um membro
    function testOnlyOwnerCanRemoveMember() public {
        // Define o endereço de um membro existente
        address existingMember = address(0x123);

        // Adiciona o endereço de um membro
        contractCore.addMember(existingMember);

        // Remove o membro com o endereço definido anteriormente
        contractCore.removeMember(existingMember);

        // Verifica se o membro foi removido com sucesso
        bool expected = false;
        bool actual = contractCore.activeMembers(existingMember);
        Assert.equal(
            actual,
            expected,
            "O membro existente nao foi removido com sucesso"
        );
    }
}
