# Desenvolvimento de software com a utilização de blockchain

## Inteli - Instituto de tecnologia e liderança
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" width="250px" height="100px"></a>

## Coover 
<a href= "https://coover.me/"><img src="https://theme.zdassets.com/theme_assets/10391010/252b3a482d39b630006805aa33f3768c9631e75a.png" alt="Coover" width="250px" height="70px" ></a>

## Etherchain
Grupo criado para o desenvolvimento do projeto com o parceiro Coover, de seguros.

<!-- #### adicionar a imagem do grupo -->

### Integrantes 

- [Camila Fernanda de Lima Anacleto](https://www.linkedin.com/in/camilaanacleto/)
- [Eduardo França Porto](https://www.linkedin.com/in/eduardo-franca-porto/)
- [Izabella Almeida de Faria](https://www.linkedin.com/in/izabellaalmeida/)
- [Lucas Conti Pereira](https://www.linkedin.com/in/lucas-conti-pereira-3410b1233/)
- [Michel Mansur](https://www.linkedin.com/in/michel-mansur-26006a219/)
- [Rafael Lupovici Moritz](https://www.linkedin.com/in/rafael-moritz/)
- [Vinicius Oliveira Fernandes](https://www.linkedin.com/in/vinicius-oliveira-fernandes-627b68168/)


## 📁 Estrutura de pastas
|--> Contrato<br>
  &emsp;|--> caseTests.sol<br>
  &emsp;|--> contractCore.sol<br>

|--> Cocumentação<br>
  &emsp;|--> Etherchain Documentação - Grupo 1 - Módulo 5.pdf<br>

|--> Apresentações<br>
  &emsp;|--> Apresentação Etherchain - Grupo 1 - Sprint 1.pdf<br>
  &emsp;|--> Apresentação Etherchain - Grupo 1 - Sprint 2.pdf<br>
  &emsp;|--> Apresentação Etherchain - Grupo 1 - Sprint 3.pdf<br>
  
|--> Imagens<br>
  &emsp;|--> Diagrama de implantação.png<br>
  
|--> Website <br>
  &emsp;| --> public <br>
  &emsp;|--> src<br>
    &emsp; &emsp;|--> clientpages<br>
    &emsp; &emsp;|--> components<br>
    &emsp; &emsp;|--> cooverpages<br>
    &emsp; &emsp;|--> font<br>
    &emsp; &emsp;|--> img<br>
  &emsp;|--> index.js<br>
  &emsp;|--> MetamaskPlugin.jsx<br>


| Readme.md<br>


## <b>Dentre os arquivos presentes na raiz do projeto, definem-se:</b>

<b>contrato:</b> pasta que contêm os smart contracts e também arquivo para teste automatizado.

<b>documentação:</b> aqui estarão todos os documentos do projeto.

<b>imagens:</b> aqui esta o diagrama de implantação.

<b>website:</b> aqui estarão todos os códigos do frontend comentados do projeto. 
Há a seguinte estrutura de pastas dentro desse projeto 

   - clientpages : todas as páginas relacionadas a interação do cliente  
   - components : componentes utilizados em todo front
   - cooverpages : todas as páginas relacionadas a interação do administrador da cover
   - font : fonte customizado do site
   - img : imagens utilizadas no site 

Também existem os arquivos 
   - index.js : arquivo que contem todas as rotas do site e utiliza o react DOM
   - MetamaskPlugin.jsx : tela inicial onde contém o login e define se é administrador ou
 cliente

<b>readme:</b> arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

### Aplicação e desenvolvimento do projeto em blockchain

Os smart contracts são programas de computador que são executados em blockchain, uma espécie de registro digital descentralizado que permite o armazenamento e a transferência de informações de forma segura e confiável. Desta forma, os contratos são escritos em solidity (linguagem de programação) e são capazes de automatizar processos e garantir que as transações sejam executadas automaticamente e de acordo com regras pré-estabelecidas.

Nos requisitos de negócios definidos pelo parceiro do projeto, a empresa de seguros "Coover", os smart contracts são aplicados em um ambiente de seguro mútuo, que são acordos entre os participantes de um grupo de seguros para se protegerem mutuamente contra perdas financeiras. A longo prazo, a intenção é que de acordo com a aplicação, os smart contracts possam ajudar a simplificar e automatizar a administração desses contratos, reduzindo o risco de erros e fraudes.

#### Smart Contracts mais afundo nas Regras de Negócio

De acordo com a estruturação de nosso código, os smart contracts podem ser usados para gerenciar a distribuição de fundos do seguro mútuo. Isso ocorre de acordo com as definições de saldo, membros e a partir de verificações em cada solicitação feita pelo usuário.

Além disso, os smart contracts verificam automaticamente as informações de sinistros, tais como a quantidade de solicitação de indenização pedidas, se a perda está dentro do escopo da cobertura do seguro mútuo, e se as regras de elegibilidade foram cumpridas pelos participantes. Isso pode ajudar a reduzir o tempo e os custos associados à resolução de sinistros.

### Histórico de Lançamento 
* 0.2.1 - 07/04/2023
 * Quinta entrega - Entrega Final
* 0.2.0 - 24/03/2023
  * Quarta entrega -
* 0.1.1 - 10/03/2023
    * Terceira entrega - Deploy do Smart contract, Funções novas no contrato e inicio de integração com front-end
* 0.1.0 - 24/02/2023
  * Segunda entrega - Diagrama de blocos, primeira versão smart contract, wireframe das telas
* 0.0.1 - 10/02/2023
  * Primeira entrega - Análise de negócios, arquitetura da solução e estruturação de documentos