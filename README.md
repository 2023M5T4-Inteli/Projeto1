# Desenvolvimento de software com a utilização de blockchain

## Inteli - Instituto de tecnologia e liderança
<a href= "https://www.inteli.edu.br/"><img src="https://www.inteli.edu.br/wp-content/uploads/2021/08/20172028/marca_1-2.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width="250px" height="100px"></a>

## Coover 
<a href= "https://coover.me/"><img src="https://theme.zdassets.com/theme_assets/10391010/252b3a482d39b630006805aa33f3768c9631e75a.png" alt="Coover" border="0" width="250px" height="70px" ></a>

## Etherchain
Grupo criado para o desenvolvimento do projeto com o parceiro Coover, de seguros.

#### adicionar a imagem do grupo

### Integrantes 

- [Camila Fernanda de Lima Anacleto](https://www.linkedin.com/in/camilaanacleto/)
- [Eduardo França Porto](https://www.linkedin.com/in/eduardo-franca-porto/)
- [Izabella Almeida de Faria](https://www.linkedin.com/in/izabellaalmeida/)
- [Lucas Conti Pereira](https://www.linkedin.com/in/lucas-conti-pereira-3410b1233/)
- [Michel Mansur](https://www.linkedin.com/in/michel-mansur-26006a219/)
- [Rafael Lupovici Moritz](https://www.linkedin.com/in/rafael-moritz/)
- [Vinicius Oliveira Fernandes](https://www.linkedin.com/in/vinicius-oliveira-fernandes-627b68168/)

## Descrição do projeto
*

## Requisitos de negócio:
#### Requisito 1: Criação de um grupo de seguro mútuo.


A empresa Coover, como parte interessada na criação desse smart contract, é responsável pelo controle, escolha e execução dos requisitos aqui presentes . Diante disso, a seguradora terá a possibilidade de definir, previamente, as regras que serão seguidas no processo de criação de um grupo de seguro mútuo. Portanto, características como número mínimo e máximo de participantes, tempo de duração de um contrato e momento de cobrança de taxas administrativas, devem ser definidos pela instituição no momento de confecção desse contrato inteligente. 

#### Requisito 2: Cobrança de uma taxa administrativa no momento da contratação do seguro.

Segundo o que foi dito no processo do entendimento do negócio, para garantia do lucro, a empresa Coover realiza a cobrança de um percentual referente à taxa administrativa. Essa cobrança é feita sobre o pagamento referente à contratação do seguro realizada pelos clientes da seguradora. Como se trata de um requisito do empreendimento em questão, é necessário que o contrato seja capaz de efetuar essa cobrança a partir do momento em que o pagamento do seguro foi concluído por parte dos clientes. 

#### Requisito 3: Cobrança do valor referente ao pagamento do seguro mútuo.

Para que possam ser assistidos pelo seguro, é preciso que os clientes da Coover paguem uma quantia referente à cobrança mensal ou anual do plano contratado. Por isso, é necessário que o contrato em questão seja capaz de realizar a cobrança única dessa taxa após sua publicação, tendo em vista que os desenvolvedores do projeto decidiram adotar a cobrança anual para fins de facilitação de processos. 

#### Requisito 4: Gerenciamento do número de clientes na plataforma.

É necessário que o contrato inteligente seja capaz de permitir a administração da quantidade de usuários em um determinado grupo de seguros. Dessa forma, é preciso que haja uma função que possibilite a exclusão de determinado cliente, que só ocorrerá mediante pedido de cancelamento do contrato, por parte do usuário, ou detecção de fraude, por parte da Coover.

#### Requisito 5: Aprovação dos pedidos de indenização.

Após a solicitação de indenização realizada pelo cliente, a empresa precisa ter a opção de aprová-la ou recusá-la, de acordo com regras pré estabelecidas no escopo do contrato. É preciso esclarecer que essa decisão será tomada de forma automática, a partir do que a empresa definiu como sendo os critérios necessários para a tomada de decisão acerca de determinado pedido.  
 
#### Requisito 6: Reposição da reserva de risco.

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
                                     
<b>User storie 1:</b> "Eu, como cliente da seguradora, quero entrar na área do usuário para ter acesso à minha conta."
<img src="https://user-images.githubusercontent.com/99282359/221448923-6e3db9ff-46fe-438c-b885-e46bd8cf7b23.png" alt="User storie 1">

<hr>

<b>User storie 2:</b> "Eu, como usuário da solução, quero visualizar os grupos de seguro já criados para ter a chance de escolher algum deles."
<img src="https://user-images.githubusercontent.com/99282359/221448932-e37aa5db-a4c3-45bf-abf5-f222508f706c.png" alt="User storie 2">

<hr>

<b>User storie 3:</b> "Eu, como usuário do sistema, quero ter a possibilidade de solicitar uma indenização para ressarcimento em casos de prejuízos ao meu patrimônio."
<img src="https://user-images.githubusercontent.com/99282359/221448935-81366859-cfd9-446f-aee6-7fc4c925512d.png" alt="User storie 3">

<hr>

<b>User storie 4:</b> "Eu, como cliente da Coover, quero visualizar os pontos de suporte para poder entrar em contato com a empresa."
<img src="https://user-images.githubusercontent.com/99282359/221448941-e4811354-75ec-4f97-85e2-c2fae232c0f9.png" alt="User storie 4">

<hr>

<b>User storie 5:</b> "Eu, como consumidor dos serviços oferecidos pela Coover, quero ter a chance de solicitar o reembolso do serviço contratado para receber o dinheiro investido em caso de insatisfação."
<img src="https://user-images.githubusercontent.com/99282359/221448945-cdbffbd2-b99e-45eb-b261-1064485eb5de.png" alt="User storie 5">

<hr>

<b>User storie 6:</b> "Eu como cliente da Coover, quero poder visualizar os termos do contrato estabelecido em cada grupo"
<img src="https://user-images.githubusercontent.com/99282359/221448953-9af03c37-a221-4fe7-aa5a-dccd707ccf80.png" alt="User storie 6">

<hr>

<b>User storie 7</b> "Eu, como seguradora, quero montar um grupo de seguro mútuo para adicionar os participantes que demonstraram interesse em participar dele."
<img src="https://user-images.githubusercontent.com/99282359/221448955-4ec2d945-73d4-4594-8686-dd590837854d.png" alt="User storie 7">

<hr>

<b>User storie 8</b> "Eu, como seguradora, quero ter a possibilidade de gerenciar os grupos de seguro mútuo já criados e aqueles que ainda não o foram."
<img src="https://user-images.githubusercontent.com/99282359/221448962-48b88cd6-d6ef-4526-8a2b-ef138c969887.png" alt="User storie 8">

<hr>

<b>User storie 9</b> "Eu, como seguradora, quero ter a chance de aprovar os pedidos de indenização."
<img src="https://user-images.githubusercontent.com/99282359/221448968-df8ef385-31e6-42bf-a47c-0848ce7fac90.png" alt="User storie 9">

<hr>

<b>User storie 10</b> "Eu como seguradora quero delimitar os regulamentos para cada um dos grupos de segurados."
<img src="https://user-images.githubusercontent.com/99282359/221448972-997779d1-eac1-4aa2-b2bd-e2ffbc565a4e.png" alt="User storie 10">

## Comportamento esperado do smart contract 
O smart contract em questão é uma aplicação que roda na blockchain e tem como objetivo fornecer seguros para celulares.´Seu funcionamento ocorre de maneira simples e eficiente: quando um cliente adquire um seguro, ele envia uma transação para o endereço do contrato com as informações do celular e o valor do prêmio de seguro. O contrato então registra a apólice e envia de volta uma confirmação da transação.

Caso o celular sofra algum dano coberto pela apólice, o cliente pode solicitar o reembolso ao enviar uma nova solicitação para o contrato com as informações do dano e as evidências necessárias. O contrato verifica se o dano está coberto pela apólice e, se estiver, realiza o pagamento do valor acordado em criptomoedas para o cliente.

Para garantir a transparência e a segurança das operações, todas as transações e informações do seguro são registradas na blockchain, tornando o processo totalmente rastreável e à prova de fraudes.

O smart contract também tem um conjunto de regras claras e transparentes que definem os termos e condições do seguro, garantindo que os clientes tenham uma compreensão clara do contrato e do que é coberto por ele.

Por meio dessas funções, o contrato espera fornecer seguros para celulares de maneira certeira, eficiente e transparente. Assim, proporcionará aos clientes uma opção inovadora e confiável de proteção para seus dispositivos móveis.

## Processo de deploy

Um dos impedimentos foi que o Goerli não ficou disponível por um certo período durante a sprint, fazendo com que tentássemos o deploy no Ganache como alternativa. 
O deploy no Ganache foi feito com sucesso (na rede local) com o uso da plataforma Remix.
<hr>
Apesar disso, uma colega compartilhou um falset do Goerli com a turma. A partir daí, seguimos o passo a passo presente no Github “InteliBlockchain” para realizar o deploy na testnet pública. Depois de um tempo o Goerli ficou novamente disponível para uso, passando a ser nossa principal alternativa para o deploy. 
Os passos que seguimos, de forma resumida, foram:
<hr>

### 1. Instalação do Truffle e preparação do código nos arquivos
<hr>

### 2. Cadastro no Infura e uso da API Key no arquivo .env
<hr>

### 3. Preparação da Meta Mask
Wallet do MetaMask com GoerliETH proveniente do falset citado anteriormente. Após a mineração no falset e a adição do Goerli na carteira, é assim que ela ficou. 
<hr>

### 4. Deploy do “contrato Core” feito pelo grupo
Quando tudo estava preparado para o deploy o grupo já havia preparado um “contrato core” para teste, de forma em que pudemos fazer um deploy em um momento propício para dar continuidade as outras atividades.</b>


![1](https://user-images.githubusercontent.com/68927480/224571970-2ec67c2d-38f3-41a4-8855-8b80efda5448.jpeg)
![2](https://user-images.githubusercontent.com/68927480/224571981-306fe2ef-42bb-4931-ad05-abb18fc5d879.jpeg)
![3](https://user-images.githubusercontent.com/68927480/224571994-b0c62444-3716-4bed-a599-e270fda9d12b.jpeg)
![4](https://user-images.githubusercontent.com/68927480/224572007-1513eda7-35eb-4ebc-b459-818514cca14a.jpeg)
![5](https://user-images.githubusercontent.com/68927480/224572023-173a0c3b-b7c2-4ddd-bbf7-2d02ebf0d2df.jpeg)
![6](https://user-images.githubusercontent.com/68927480/224572034-00bc5125-2952-48dd-8779-41131156bc30.jpeg)


