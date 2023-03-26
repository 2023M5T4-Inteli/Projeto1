# Desenvolvimento de software com a utilização de blockchain

## Inteli - Instituto de tecnologia e liderança
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="250px" height="100px"></a>

## Coover 
<a href= "https://coover.me/"><img src="https://theme.zdassets.com/theme_assets/10391010/252b3a482d39b630006805aa33f3768c9631e75a.png" alt="Coover" border="0" width="250px" height="70px" ></a>

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

## Descrição do objetivo do Smart Contract

Este contrato tem como objetivo gerenciar um grupo de membros que contribuem com dinheiro para um fundo comum. Ele contém funções para adicionar dinheiro ao fundo, adicionar novos membros, remover membros, solicitar reembolsos e pagar reembolsos aos membros. O contrato também tem variáveis para armazenar informações sobre os membros, incluindo seus saldos e status de ativação. O evento "Purchase" é emitido quando um novo pagamento é recebido, o evento "AddMember" é emitido quando um novo membro é adicionado e o evento "PaymentReceived" é emitido quando um pagamento é recebido de um membro.

## Estrutura do Smart Contract

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
      
## Casos de Teste:

#### Teste de função "addMember":
Pré-condição: O proprietário do contrato está autenticado no sistema administrativo da Coover.
Procedimento de teste: A função "addMember" é executada com o endereço de um usuário a ser adicionado como parâmetro.
Resultado esperado: O endereço do usuário é adicionado ao array "membersContract". O valor booleano correspondente ao endereço do usuário no mapping "activeMembers" é definido como verdadeiro. O evento "AddMember" é emitido com o endereço do chamador como parâmetro.
Pós-condição: O endereço do usuário é adicionado à lista de membros do smart contract.

#### Teste de função "OnlyOwnerCanRemoveMember":
Pré-condição: O proprietário do contrato está autenticado no sistema administrativo da Coover e há um usuário ativo existente no contrato.
1° Procedimento de teste: Chamar a função "removeMember" com o endereço do usuário a ser removido como parâmetro, usando uma conta que não seja do proprietário do contrato.
1° Resultado esperado: A transação falha com a mensagem "Caller is not owner".
2° Procedimento de teste: Chamar a função "removeMember" com o endereço do usuário como parâmetro, usando a conta do proprietário do contrato.
2° Resultado esperado: O endereço do usuário é removido do array "membersContract". O valor booleano correspondente ao endereço do usuário no mapping "activeMembers" é definido como falso.
Pós-condição: O endereço do usuário é removido da lista de membros do contrato.

#### Teste de função "GetTotalWalletClients":
Pré-condição: Um contrato com pelo menos um membro ativo.
Procedimento de teste: Chamar a função "getTotalWalletClients".
Resultado esperado: O número de membros atualmente no array "membersContract" é retornado.
Pós-condição: O número de membros no contrato é exibido.


## Requisitos de negócio:
#### Requisito 1: Criação de um grupo de seguro mútuo.

A empresa Coover, como parte interessada na criação desse smart contract, é responsável pelo controle, escolha e execução dos requisitos aqui presentes . Diante disso, a seguradora terá a possibilidade de definir, previamente, as regras que serão seguidas no processo de criação de um grupo de seguro mútuo. Portanto, características como número mínimo e máximo de participantes, tempo de duração de um contrato e momento de cobrança de taxas administrativas, devem ser definidos pela instituição no momento de confecção desse contrato inteligente. 

#### Requisito 2: Cobrança de uma taxa administrativa no momento da contratação do seguro.

Segundo o que foi dito no processo do entendimento do negócio, para garantia do lucro, a empresa Coover realiza a cobrança de um percentual referente à taxa administrativa. Essa cobrança é feita sobre o pagamento referente à contratação do seguro realizada pelos clientes da seguradora. Como se trata de um requisito do empreendimento em questão, é necessário que o contrato seja capaz de efetuar essa cobrança a partir do momento em que o pagamento do seguro foi concluído por parte dos clientes. 

#### Requisito 3: Cobrança do valor referente ao pagamento do seguro mútuo.

Para que possam ser assistidos pelo seguro, é preciso que os clientes da Coover paguem uma quantia referente à cobrança mensal ou anual do plano contratado. Por isso, é necessário que o contrato em questão seja capaz de realizar a cobrança única dessa taxa após sua publicação, tendo em vista que os desenvolvedores do projeto decidiram adotar a cobrança anual para fins de facilitação de processos. 

#### Requisito 4: Gerenciamento do número de clientes na plataforma.

É necessário que o contrato inteligente seja capaz de permitir a administração da quantidade de usuários em um determinado grupo de seguros. Dessa forma, é preciso que haja uma função que possibilite a exclusão de determinado cliente, que só ocorrerá mediante pedido de cancelamento do contrato, por parte do usuário, ou detecção de fraude, por parte da Coover.

#### Requisito 5: Realização do pedido de indenização.
O contrato deve ser capaz de permitir que os participantes do grupo de seguro mútuo realizem o pedido de indenização em caso de ocorrência de um sinistro. Para isso, é necessário que exista uma função que permita que o segurado notifique a Coover sobre a ocorrência do sinistro e solicite a indenização devida. Essa solicitação deve ser verificada automaticamente pelo contrato, que verificará se o segurado tem direito à indenização com base nas regras estabelecidas por ele.


#### Requisito 6: Aprovação dos pedidos de indenização.

Após a solicitação de indenização realizada pelo cliente, a empresa precisa ter a opção de aprová-la ou recusá-la, de acordo com regras pré estabelecidas no escopo do contrato. É preciso esclarecer que essa decisão será tomada de forma automática, a partir do que a empresa definiu como sendo os critérios necessários para a tomada de decisão acerca de determinado pedido.  
 
#### Requisito 7: Reposição da reserva de risco.

Após a aprovação de determinado pedido de indenização, é necessário que os participantes de um grupo se responsabilizem pela reposição da reserva de risco que foi comprometida após o pagamento em questão. Com isso, é necessário que, a cada pedido de indenização aprovado, haja a cobrança proporcional à porcentagem construída por cada membro do grupo. Logo, contribuintes responsáveis por parcelas diferentes da reserva, devem ser cobrados de modo distinto no momento da ativação dessa função.

## Diagrama de blocos

O usuário (cliente ou admnistrador) acessa a aplicação pelo browser com o plugin da metamask. 
Na aplicação do administrador, pode ser feita a criação de grupos de seguro mútuo (smart contracts) em uma relação direta com a Testnet. 
O deploy destes contratos é feito no github por administradores da Coover, para que sejam open source.
Por fim, na aplicação dos clientes, é possível interagir e realizar transações com esses smart contracts. 
Dados sensíveis dos clientes são armazenados em um banco de dados, uma vez que a disponibilização destes na blockchain seria algo perigoso. 

![Diagrama de Blocos](https://user-images.githubusercontent.com/68927480/224556813-8265128f-83fe-4c46-aad9-ca0556fab7b6.png)

#### Detalhamento do Diagrama de Blocos:

- <b>Cliente</b>: É a pessoa física que deseja contratar um seguro peer-to-peer para o seu smartphone. Ele se conecta ao sistema da Coover através do navegador.

- <b>Adm da Coover:</b> A Coover é a empresa que oferece o seguro peer-to-peer para smartphones usando blockchain. Ela se comunica com o browser e  com sua carteira Metamask, bem como com a sua própria aplicação. A aplicação da Coover se comunica com o banco de dados que se comunica com a testnet.

- <b>Metamask:</b> É uma carteira digital que permite que o cliente interaja com aplicativos descentralizados baseados em Ethereum. No caso da Coover, o Metamask é utilizado para realizar transações com a criptomoeda Ether, que é usada como meio de pagamento do seguro.

- <b>Aplicação do Cliente:</b> É a interface do sistema da Coover que o cliente utiliza para verificar a porcentagem a ser paga pelo seguro, realizar o pagamento e acessar informações sobre o seu seguro. Essa plataforma se comunica com a testnet.

- <b>Aplicação da Coover:</b> A aplicação da Coover gerencia e executa os contratos. Algumas das funções a ela concebidas são: Cadastro de clientes, comunicação com o smart contract, gerenciamento de pagamentos e de sinistros.

- <b>Banco de Dados:</b> O banco de dados é responsável por armazenar as informações dos clientes e das apólices de seguro, como o nome do cliente, o modelo do smartphone, o valor do prêmio do seguro, entre outros dados. Quando o cliente adquire uma apólice de seguro, as informações são registradas no banco de dados e, posteriormente, no smart contract que gerencia as transações na blockchain.

- <b>Testnet:</b> É uma rede de blockchain de teste que é usada para verificar a funcionalidade do sistema antes de ser lançada na rede principal. No caso da Coover, a plataforma do cliente se comunica com a testnet para realizar transações e validar os dados do seguro.

- <b>Smart Contract:</b> É executado na rede blockchain e é responsável por automatizar as transações e manter o registro das informações do seguro. No caso da Coover, o smart contract é responsável por verificar se o cliente tem direito ao seguro, validar o pagamento de acordo com a porcentagem estabelecida e se poderá receber a indenização, caso algo ocorra com o smartphone.

- <b>Deploy:</b> É o processo de disponibilizar o smart contract na rede blockchain. No caso da Coover, o deploy inclui o GitHub, que é um repositório de código-fonte, e a administração da Coover, que é responsável por gerenciar o sistema.


## Diagrama de sequência UML

                                +--------------+
                                     Usuário    
                                +--------------+
                                      |
                                      |  Acessa a aplicação
                                      v
                                +--------------+
                                  Front-End   
                                +--------------+
                                      |
                                      |  Faz a solicitação
                                      v
                                +--------------+
                                   Back-End   
                                +--------------+
                                      |
                                      |  Verifica a identidade do usuário
                                      v
                                +--------------+
                                  Banco de Dados 
                                +--------------+
                                      |
                                      |  Retorna a resposta ao Back-End
                                      v
                                +--------------+
                                 Back-End    
                                +--------------+
                                      |
                                      |  Gera o smart contract do seguro
                                      v
                                +--------------+
                                  Blockchain  
                                +--------------+
                                      |
                                      |  Armazena o smart contract
                                      v
                                +--------------+
                                  Banco de Dados 
                                +--------------+
                                      |
                                      |  Armazena dados sensíveis do usuário
                                     
<img src="https://user-images.githubusercontent.com/99282359/224573690-d7ca21d7-3b98-44a4-a55f-2fa627710e73.png" width="475" height="500" />

<img src="https://user-images.githubusercontent.com/99282359/224573714-3645c83d-a2c6-472b-a023-6932f7839bf5.png" width="475" height="500" />

<img src="https://user-images.githubusercontent.com/99282359/224573717-a5975ed3-bde3-4496-9f4e-7840f46e9df1.png" width="475" height="500" />

<img src="https://user-images.githubusercontent.com/99282359/224573726-85bfe458-d736-49ea-ad3c-f130bd596bf7.png" width="475" height="500" />

<img src="https://user-images.githubusercontent.com/99282359/224573729-834eaa0c-6072-44d9-8c17-782669705bcf.png" width="475" height="500" />

<img src="https://user-images.githubusercontent.com/99282359/224573732-73960c0f-7f15-4b86-91ce-d117c9a57a5b.png" width="475" height="500" />

## Diagrama de implantação UML
Um diagrama de implantação é uma representação visual da arquitetura de implantação de um sistema de software.

O objetivo principal do diagrama de implantação é fornecer uma visão geral da infraestrutura de hardware em que o sistema é implantado, identificando os nós de hardware, as conexões de rede e os componentes de software implantados em cada nó. Com o diagrama de implantação, é possível visualizar como o sistema é distribuído em diferentes servidores, dispositivos de armazenamento, entre outros, e como os componentes de software se comunicam através da rede.

O diagrama de implantação é usado para ilustrar como os componentes de um sistema são implantados em diferentes nós de hardware, como servidores, desktops ou dispositivos móveis. Ele mostra as conexões de rede entre esses nós e como os componentes de software se comunicam por meio dessas conexões.

<img src="https://github.com/2023M5T4-Inteli/Projeto1/blob/main/imagens/Diagrama%20de%20implanta%C3%A7%C3%A3o.png"/>

O diagrama apresenta as relações entre os módulos da solução criada. Na parte de Hardware, estão representados os elementos físicos necessários para utilizar o programa, além dos softwares que precisam estar presentes nas máquinas para garantir o funcionamento adequado. Já na parte de software, é essencial ter a aplicação web2 para hospedar a interface da solução. Por meio dessa interface, todas as etapas descritas no diagrama de sequência (requisitos 1 a 6) podem ser realizadas, sem que os usuários finais tenham interação direta com o smart contract.

Para estabelecer a comunicação entre a solução e a testnet pública, na qual o smart contract foi desenvolvido, é preciso utilizar uma API para web 3. Dessa forma, a partir da interface web, a solução pode se conectar à testnet pública e ao smart contract desenvolvido pelo time.

## Comportamento esperado do smart contract 
O smart contract em questão é uma aplicação que roda na blockchain e tem como objetivo fornecer seguros para celulares.Seu funcionamento ocorre de maneira simples e eficiente: quando um cliente adquire um seguro, ele envia uma transação para o endereço do contrato com as informações do celular e o valor do prêmio de seguro. O contrato então registra a apólice e envia de volta uma confirmação da transação.

Caso o celular sofra algum dano coberto pela apólice, o cliente pode solicitar o reembolso ao enviar uma nova solicitação para o contrato com as informações do dano e as evidências necessárias. O contrato verifica se o dano está coberto pela apólice e, se estiver, realiza o pagamento do valor acordado em criptomoedas para o cliente.

Para garantir a transparência e a segurança das operações, todas as transações e informações do seguro são registradas na blockchain, tornando o processo totalmente rastreável e à prova de fraudes. Da mesma forma, o contrato contém restrições de atuação, dando acesso exclusivo ao administrador (dono do contrato) a partir de modifier "isOwner".

A transação, após modificações pontuais, agora também cobra a taxa administrada (que pode ser modificada de acordo com a porcentagem escolhida) diretamente no pagamento feito pelo usuário. Além disso, após as atualizações, a Coover possui o controle dos grupos, com a adição e remoção de usuários, o pagamento da indenização e os registros das atividades por meio de eventos personalizados, que posicionaram melhor os clientes sobre cada uma das novas transações ocorridas.

O smart contract também tem um conjunto de regras claras e transparentes que definem os termos e condições do seguro, garantindo que os clientes tenham uma compreensão clara do contrato e do que é coberto por ele.

Por meio dessas funções, o contrato espera fornecer seguros para celulares de maneira certeira, eficiente e transparente. Assim, proporcionará aos clientes uma opção inovadora e confiável de proteção para seus dispositivos móveis.

## Processo de deploy

O processo de deploy de um contrato inteligente na testnet pública envolve algumas etapas importantes. Em primeiro lugar, é necessário escolher uma testnet adequada, que neste caso foi o Goerli e configurar as ferramentas necessárias, como uma carteira criptográfica, neste caso a Metamask, e um ambiente de desenvolvimento integrado, que para testes e finalização, foi o Remix. Em seguida, o contrato inteligente deve ser desenvolvido e testado em um ambiente de teste local (ganache) antes de ser implantado na testnet pública.

Ao implantar o contrato inteligente na testnet pública, é importante lembrar-se de configurar as propriedades corretamente.

### Processo de desenvolvimento pelo grupo

Ao levar em conta os requisitos e funcionalidades, podemos descrever um pouco do processo de desenvolvimento do grupo.

Um dos primeiros impedimentos foi que o Goerli não ficou disponível por um certo período durante a sprint, fazendo com que tentássemos o deploy no Ganache como alternativa. 

O deploy no Ganache foi feito com sucesso (na rede local) com o uso da plataforma Remix.

![1](https://user-images.githubusercontent.com/68927480/224571970-2ec67c2d-38f3-41a4-8855-8b80efda5448.jpeg)
![2](https://user-images.githubusercontent.com/68927480/224571981-306fe2ef-42bb-4931-ad05-abb18fc5d879.jpeg)

Apesar disso, uma colega compartilhou um falset do Goerli com a turma. A partir daí, seguimos o passo a passo presente no Github “InteliBlockchain” para realizar o deploy na testnet pública. Depois de um tempo o Goerli ficou novamente disponível para uso, passando a ser nossa principal alternativa para o deploy. 
Os passos que seguimos, de forma resumida, foram:
<hr>

### 1. **Instalação do Truffle e preparação do código nos arquivos**

- Deve-se, primeiramente, definir uma pasta para digitar, no terminal, o comando ‘npm install -g truffle’.

 ```
  npm install -g truffle
 ```

- Abaixo está o output printado após o comando “Truffle –version” no nosso projeto. 

![3](https://user-images.githubusercontent.com/68927480/224571994-b0c62444-3716-4bed-a599-e270fda9d12b.jpeg)
<hr>

- Outro comando que deve ser digitado no terminal é o ‘truffle init’, que inicializa o truffle no repositório. 

 ```
truffle init
```

- Posteriormente, inserimos os seguintes comandos para preparar a pasta e seus arquivos: ‘npm init -y’ e ‘npm install @openzeppelin/contracts’. 

 ```
npm init -y
npm install @openzeppelin/contracts
```

- Após esta preparação, deve-se inserir o comando ‘truffle compile’ e informar qual o contrato no arquivo da pasta ‘migrations’ e a rede na pasta ‘truffle-config’ (o tutorial completo festá disponível na documentação do truffle).

 ```
truffle compile
truffle-config
```

### 2. **Cadastro no Infura e uso da API Key no arquivo .env**

- O arquivo .env deve ser criado para guardar a ‘Seed phrase’ da Meta mask e a ‘API Key’ do Infura, site no qual deve ser feita a conta para se realizar um deploy.

![4](https://user-images.githubusercontent.com/68927480/224572007-1513eda7-35eb-4ebc-b459-818514cca14a.jpeg)
<hr>


### 3. **Preparação da Meta Mask**

- Wallet do MetaMask com GoerliETH proveniente do falset citado anteriormente. Após a mineração no falset e a adição do Goerli na carteira, é assim que ela ficou.


![5](https://user-images.githubusercontent.com/68927480/224572023-173a0c3b-b7c2-4ddd-bbf7-2d02ebf0d2df.jpeg)
<hr>


### 4. **Deploy do “contrato Core” feito pelo grupo**

- Quando tudo estava preparado para o deploy o grupo já havia preparado um “contrato core” para teste. 
- Com o input ‘truffle deploy –network goerli’ é possível finalizar o deploy na testnet pública e se recebe um output com os dados do deploy, como o custo final e o hash da transação. 

 ```
truffle deploy –network goerli
```

![6](https://user-images.githubusercontent.com/68927480/224572034-00bc5125-2952-48dd-8779-41131156bc30.jpeg)
