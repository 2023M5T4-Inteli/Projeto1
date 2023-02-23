// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Este código é para teste e para ser modificados pelos integrantes do Grupo 1

contract ContratoCoover {
    // Variáveis globais
    uint public id;
    uint public saldoContrato;
    uint public quantUsuario;
    uint public dataCriacao;
    uint public dataValidade;
    uint public minPessoas = 5;
    uint public maxPessoas = 50;
    uint public duracaoDias; 
    address private _admin;
    // string public usuario;

    

    struct Carteiras {
        address carteiraUsuario;
    }
    
    address[] public carteira;
    
    mapping(address => bool) public termoAceito;
    uint public numAceitaram;

    // Construtor
    constructor(uint _usuarios, uint _usuarioMinimo, uint _usuarioMaximo, uint _duracaoDias) {
        _admin = msg.sender;
        dataCriacao = block.timestamp; //guarda a data de criação
        saldoContrato = address(this).balance;
        quantUsuario = _usuarios;
        minPessoas = _usuarioMinimo;
        maxPessoas = _usuarioMaximo;
        dataValidade = dataCriacao + _duracaoDias * 1 days; // guarda a data de validade
    }

    // Funções

    // Modificador para permitir que apenas o dono do contrato acesse uma função
    modifier onlyOwner() {
        require(msg.sender == _admin, "Apenas o dono do contrato pode executar essa funcao.");
        _;
    }

    // modifier isValid(){
    //     // require(block.timestamp => *variável de data de validade*)
    //     _;
    // }

//lembrar de adicionar nas funções devidas
    modifier viabilidade(){
        if (quantUsuario >= minPessoas && block.timestamp <= dataValidade && quantUsuario <= maxPessoas) {
                _; // Contrato Ativo
            } else if (quantUsuario < minPessoas && block.timestamp <= dataValidade) {
                _; // Contrato em Progresso
            } else if (block.timestamp > dataValidade || quantUsuario < minPessoas) {
                revert("Contrato inativo"); // Contrato Inativo
            } else {
                revert("Erro ao verificar o contrato");
        }
    }


    function quantCarteira(address novaCarteira) public onlyOwner returns(bool) {
        require(carteira.length < maxPessoas, "Numero maximo de pessoas na carteiras foi atingido.");
        // Carteiras memory novaCarteira = Carteiras(msg.sender);
        carteira.push(novaCarteira);
        quantUsuario += 1;
        return true;
    }

    
    // Adiciona um novo usuário ao projeto

    function adicionarUsuario() public onlyOwner returns(bool) {
        require(quantUsuario < maxPessoas, "O numero maximo de usuarios ja foi atingido.");
        quantUsuario++;
        return true;
    }




    function removerUsuario(address usuario) public onlyOwner returns(bool){

        for (uint i = 0; i < carteira.length - 1; i++) {
            if (carteira[i] == usuario) {
                
                for(uint index = i; i < carteira.length - 1; index++){
                    carteira[index] = carteira[index + 1];
                }
                
            }

        }   

        carteira.pop();
        return true;
    }

    // fallback() external payable {}

}