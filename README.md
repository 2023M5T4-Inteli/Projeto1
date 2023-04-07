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

## :video_camera: Funcionamento do projeto 
- Link do youtube <a>https://youtu.be/UWHRfNqpct8</a>
- Link Google Drive <a href=https://drive.google.com/file/d/1-Vlg4WkeKsNYKJW6_0vqXCOREYleTW5E/view?usp=sharing </a>


## 📁 Estrutura de pastas
|--> contrato<br>
  &emsp;|--> caseTests.sol<br>
  &emsp;|--> contractCore.sol<br>

|--> documentação<br>
  &emsp;|--> Etherchain Documentação - Grupo 1 - Módulo 5.pdf<br>
  
|--> imagens<br>
  &emsp;|--> Diagrama de implantação.png<br>
  
|--> website <br>
  &emsp;| --> public <br>
  &emsp;|--> src<br>
    &emsp; &emsp;|--> clientpages<br>
    &emsp; &emsp;|--> components<br>
    &emsp; &emsp;|--> cooverpages<br>
    &emsp; &emsp;|--> font<br>
    &emsp; &emsp;|--> img<br>
  &emsp;|--> index.js<br>
  &emsp;|--> app.js<br>
  &emsp;|--> MetamaskPlugin.jsx<br>

|--> apresentações <br>
  &emsp;|--> Apresentação Sprint 1.pdf<br>
  &emsp;|--> Apresentação Sprint 2.pdf<br>
  &emsp;|--> Apresentação Sprint 3.pdf<br>
  &emsp;|--> Apresentação Sprint 4.pdf<br>


| readme.md<br>


<b>Dentre os arquivos presentes na raiz do projeto, definem-se:</b>

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
 
   - app.js : arquivo que contem todas as rotas do backend e conecta com o o banco de dados online 


<b>readme:</b> arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).


<h2> :dart:	 Como utilizar </h2>
<ol>
  <li>Com a sua IDE de preferência clone o projeto</li>
	<li>Acesse o diretório raiz do site utilizando o comando <code>cd website </code></li>
	<li>Iniciar o servidor local utilizando o comando <code>npm start</code></li>
	<li>Abrir outra guia do terminal na IDE e novamente acessar o diretório raiz do site utilizando o comando <code>cd website </code></li>
  <li>Iniciar o backend utilizando o comando <code>node app.js</code></li>
  <li>Pronto o site está funcionando basta acessar no navegador <code>http://localhost:3000/</code> </li>

</ol>


## :jigsaw: Descrição do objetivo do Smart Contract

Este contrato tem como objetivo gerenciar um grupo de membros que contribuem com dinheiro para um fundo comum. Ele contém funções para adicionar dinheiro ao fundo, adicionar novos membros, remover membros, solicitar reembolsos e pagar reembolsos aos membros. O contrato também tem variáveis para armazenar informações sobre os membros, incluindo seus saldos e status de ativação. O evento "Purchase" é emitido quando um novo pagamento é recebido, o evento "AddMember" é emitido quando um novo membro é adicionado e o evento "PaymentReceived" é emitido quando um pagamento é recebido de um membro.

## :page_with_curl:	 Estrutura do Smart Contract

A estrutura do nosso contrato é diretamente relacionada aos requisitos de negócios necessários. Isso é definido mediante as variáveis de estado, eventos e funções de execução que complementam nosso código. Sendo assim, destacamos a funcionalidade e descrição de cada uma dessas propriedades dentro do nosso contrato:

1. **Variáveis**
      
      As Variáveis de Estado são usadas para armazenar dados que são mantidos entre chamadas de função e alterações de contrato. Eles são usados para criar um estado entre as alterações de contrato. Segue as variáveis do contrato:

      - **"owner" (address public)**: endereço do proprietário do contrato
      - **"members" (mapping)**: tabela hash que associa cada endereço de usuário com um objeto Member, que contém informações sobre o dinheiro do usuário e seu endereço.
      - **"balances" (mapping)**: tabela hash que associa cada endereço de usuário com o saldo atual em Ether do usuário.
      - **"indemnityRequests" (mapping)**: tabela hash que associa cada endereço de usuário com o valor que ele solicitou em termos de reembolso.
      - **"activeMembers" (mapping)**: tabela hash que associa cada endereço de usuário com um valor booleano indicando se o usuário está ativo no grupo ou não.
      - **"membersContract" (address[])**: array de endereços de usuários que fazem parte do grupo.
      - **"userRequestingRefund" (address[])**: array de endereços de usuários que solicitaram um reembolso.
      - **"amountContract" (uint)**: valor atual em Ether que está presente no contrato.
      - **"_admin" (address payable)**: endereço do administrador do contrato, que pode receber taxas de transação.

2. **Eventos**
      
      Os Eventos são usados para notificar os usuários do contrato inteligente sobre mudanças de estado. Eles também são usados para informar os usuários sobre alterações no contrato, como transações executadas, mudanças no estado da conta e etc. Eventos permitem que os usuários saibam o que está acontecendo no contrato inteligente. Segue os eventos contidos no contrato:
      
      - **Evento "Purchase"**: é emitido quando um usuário faz um pagamento para entrar no contrato. Ele recebe dois parâmetros: o endereço do comprador (_buyer) e o valor pago (_amount).
      - **Evento "AddMember"**: é emitido quando um novo membro é adicionado ao contrato. Ele recebe um parâmetro: o endereço do novo membro (member).
      - **Evento "PaymentReceived"**: é emitido quando um pagamento é recebido pelo contrato. Ele recebe dois parâmetros: o endereço do membro que fez o pagamento (member) e o valor recebido (amount). 
      - **Evento "FinalAmount"**: é emitido quando o valor final de um pagamento é calculado após a dedução da taxa de administração. Ele recebe um parâmetro: o valor final do pagamento (finalValue).

3. **Funções**

     As Funções são usadas para executar operações e modificar o estado do contrato. Segue as funções presentes no contrato:
      
      - **contractPayment()**: Função que permite que os usuários adicionem dinheiro ao contrato, com uma taxa de 5% aplicada sobre o valor depositado. O saldo da carteira do usuário é atualizado e os eventos Purchase, PaymentReceived e FinalAmount são emitidos para registrar a transação.
      - **getOwner()**: Função que retorna o endereço do proprietário do contrato.
      - **showAllMembers()**: Função que retorna uma matriz contendo todos os endereços de membros registrados no contrato.
      - **getPendingIndemnities()**: Função que retorna uma matriz contendo os endereços dos membros que solicitaram reembolsos.
      - **addMember()**: Função que permite que o proprietário do contrato adicione um novo membro ao contrato. O endereço do novo membro é adicionado à matriz membersContract e o status de membro ativo é definido como true. O evento AddMember é emitido para registrar a adição do novo membro.
      - **getBalance()**: Função que retorna o saldo total atual do contrato.
      - **RequestIndemnity()**: Função que verifica se o endereço do usuário que solicita o reembolso está registrado como membro ativo no contrato. Se o endereço for válido, ele é adicionado à matriz userRequestingIndemnity para ser processado posteriormente.
      - **paymentOfIndemnity()**: Função que permite que o proprietário do contrato envie um reembolso a um membro ativo do contrato. O endereço da carteira do membro e o valor do reembolso são fornecidos como entrada, e a função verifica se o valor do reembolso é menor que o valor total disponível no contrato. Se o membro estiver registrado na matriz userRequestingIndemnity, o valor do reembolso é enviado à carteira do membro e removido da matriz userRequestingIndemnity. O valor total disponível no contrato é atualizado para refletir o reembolso.
      - **quantClientsWallet()**: Função que retorna o número de membros ativos registrados no contrato.
      - **removeUser()**: Função que permite que o proprietário do contrato remova um membro ativo do contrato. O endereço da carteira do membro a ser removido é fornecido como entrada e a função atualiza a matriz membersContract e o status de membro ativo para refletir a remoção do membro. Qualquer reembolso pendente solicitado pelo membro também é removido da matriz na variável: "userRequestingIndemnity".

      Além disso, o contrato possui outras funcionalidades e propriedades que definem os requisitos de negócios: os Structs, Mappings e Modifier. 

      Neste contrato, os Structs são usados para definir uma estrutura de dados personalizada que inclui as propriedades "cash" (representando o dinheiro do usuário) e "client" (representando o endereço do cliente) para cada membro. Isso permite que o contrato organize as informações dos usuários em uma forma mais compreensível e possam usar essas informações em funções e em outros lugares do contrato.
      
      Possuímos, também, quatro mappings diferentes. O primeiro é o "members" que mapeia o endereço do usuário para sua estrutura de dados "Member". O segundo é o "balances" que mapeia o endereço do usuário para o saldo da sua conta no contrato. No terceiro o "indemnityRequests" mapeia o endereço do usuário para o valor que ele está solicitando em uma indenização. Por fim, o quarto é o "activeMembers" que mapeia o endereço do usuário para um valor booleano indicando se ele é um membro ativo do contrato.

      Neste contrato, possuímos um modifier chamado "isOwner" que verifica se a pessoa que chamou a função é o proprietário do contrato. Se a pessoa que chamou a função não for o dono, a função não será executada e uma mensagem de erro será gerada. Isso permite que o proprietário restrinja o acesso a certas funções no contrato, garantindo que apenas ele possa executá-las.
      
## :white_check_mark:	 Casos de Teste:
Os casos de teste realizados se referem ao contrato ["contractCore"](https://github.com/2023M5T4-Inteli/Projeto1/blob/main/contrato/contractCore.sol), e podem ser acessados por meio [deste link](https://github.com/2023M5T4-Inteli/Projeto1/blob/main/contrato/caseTests). Foram realizados testes em três funções do smart contract, a saber: "addMembers", "OnlyOwnerCanRemoveMember" e "GetTotalWalletClients". Para cada função, foram descritos a pré-condição, o procedimento de teste, o resultado esperado e a pós-condição, como segue:

### Aplicação e desenvolvimento do projeto em blockchain

Os smart contracts são programas de computador que são executados em blockchain, uma espécie de registro digital descentralizado que permite o armazenamento e a transferência de informações de forma segura e confiável. Desta forma, os contratos são escritos em solidity (linguagem de programação) e são capazes de automatizar processos e garantir que as transações sejam executadas automaticamente e de acordo com regras pré-estabelecidas.

Nos requisitos de negócios definidos pelo parceiro do projeto, a empresa de seguros "Coover", os smart contracts são aplicados em um ambiente de seguro mútuo, que são acordos entre os participantes de um grupo de seguros para se protegerem mutuamente contra perdas financeiras. A longo prazo, a intenção é que de acordo com a aplicação, os smart contracts possam ajudar a simplificar e automatizar a administração desses contratos, reduzindo o risco de erros e fraudes.

#### Smart Contracts mais afundo nas Regras de Negócio

De acordo com a estruturação de nosso código, os smart contracts podem ser usados para gerenciar a distribuição de fundos do seguro mútuo. Isso ocorre de acordo com as definições de saldo, membros e a partir de verificações em cada solicitação feita pelo usuário.

Além disso, os smart contracts verificam automaticamente as informações de sinistros, tais como a quantidade de solicitação de indenização pedidas, se a perda está dentro do escopo da cobertura do seguro mútuo, e se as regras de elegibilidade foram cumpridas pelos participantes. Isso pode ajudar a reduzir o tempo e os custos associados à resolução de sinistros.

### Histórico de Lançamento 
* <b> 0.2.1 - 07/04/2023 <b>
  * Quinta entrega - Entrega Final
* <b> 0.2.0 - 24/03/2023 <b>
  * Quarta entrega - Integração com frontend
* <b> 0.1.1 - 10/03/2023 <b>
  * Terceira entrega - Deploy do Smart contract, Funções novas no contrato e inicio de integração com frontend
* <b> 0.1.0 - 24/02/2023 <b> 
  * Segunda entrega - Diagrama de blocos, primeira versão smart contract, wireframe das telas
* <b> 0.0.1 - 10/02/2023 <b>
  * Primeira entrega - Análise de negócios, arquitetura da solução e estruturação de documentos