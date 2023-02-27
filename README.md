# Projeto1

## Inteli - Instituto de tecnologia e liderança
*
## Desenvolvimento de software com a utilização de blockchain
*
## Etherchain
Grupo criado para o desenvolvimento do projeto com o parceiro Coover, de seguros.
### Integrantes 
- Camila Fernanda de Lima Anacleto
- Eduardo França Porto
- Izabella Almeida de Faria
- Lucas Conti Pereira
- Michel Mansur
- Rafael Lupovici Moritz
- Vinicius Oliveira Fernandes

## Descrição do projeto
*
### Requisitos de negócio:
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

![Diagrama de Blocos](https://user-images.githubusercontent.com/68927480/221452511-1435a376-d14f-45c9-a858-16bc1743ceae.png)

#### Detalhamento do Diagrama de Blocos:

- <b>Cliente</b>: É a pessoa física que deseja contratar um seguro peer-to-peer para o seu smartphone. Ele se conecta ao sistema da Coover através do navegador.

- <b>Adm da Coover:</b> A Coover é a empresa que oferece o seguro peer-to-peer para smartphones usando blockchain. Ela se comunica com o browser e  com sua carteira Metamask, bem como com a sua própria aplicação. A aplicação da Coover se comunica com o banco de dados que se comunica com a testnet.

- <b>Metamask:</b> É uma carteira digital que permite que o cliente interaja com aplicativos descentralizados baseados em Ethereum. No caso da Coover, o Metamask é utilizado para realizar transações com a criptomoeda Ether, que é usada como meio de pagamento do seguro.

- <b>Aplicação do Cliente:</b> É a interface do sistema da Coover que o cliente utiliza para verificar a porcentagem a ser paga pelo seguro, realizar o pagamento e acessar informações sobre o seu seguro. Essa plataforma se comunica com a testnet.

- Aplicação da Coover: A aplicação da Coover gerencia e executa os contratos. Algumas das funções a ela concebidas são: Cadastro de clientes, comunicação com o smart contract, gerenciamento de pagamentos e de sinistros.

- Banco de Dados: O banco de dados é responsável por armazenar as informações dos clientes e das apólices de seguro, como o nome do cliente, o modelo do smartphone, o valor do prêmio do seguro, entre outros dados. Quando o cliente adquire uma apólice de seguro, as informações são registradas no banco de dados e, posteriormente, no smart contract que gerencia as transações na blockchain.

- Testnet: É uma rede de blockchain de teste que é usada para verificar a funcionalidade do sistema antes de ser lançada na rede principal. No caso da Coover, a plataforma do cliente se comunica com a testnet para realizar transações e validar os dados do seguro.

- Smart Contract: É executado na rede blockchain e é responsável por automatizar as transações e manter o registro das informações do seguro. No caso da Coover, o smart contract é responsável por verificar se o cliente tem direito ao seguro, validar o pagamento de acordo com a porcentagem estabelecida e se poderá receber a indenização, caso algo ocorra com o smartphone.

- Deploy: É o processo de disponibilizar o smart contract na rede blockchain. No caso da Coover, o deploy inclui o GitHub, que é um repositório de código-fonte, e a administração da Coover, que é responsável por gerenciar o sistema.


## Descrição da arquitetura utilizando diagrama de sequência UML

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
                                     
![US1](https://user-images.githubusercontent.com/99282359/221448923-6e3db9ff-46fe-438c-b885-e46bd8cf7b23.png)
![US2](https://user-images.githubusercontent.com/99282359/221448932-e37aa5db-a4c3-45bf-abf5-f222508f706c.png)
![US3](https://user-images.githubusercontent.com/99282359/221448935-81366859-cfd9-446f-aee6-7fc4c925512d.png)
![US4](https://user-images.githubusercontent.com/99282359/221448941-e4811354-75ec-4f97-85e2-c2fae232c0f9.png)
![US5](https://user-images.githubusercontent.com/99282359/221448945-cdbffbd2-b99e-45eb-b261-1064485eb5de.png)
![US6](https://user-images.githubusercontent.com/99282359/221448953-9af03c37-a221-4fe7-aa5a-dccd707ccf80.png)
![US7](https://user-images.githubusercontent.com/99282359/221448955-4ec2d945-73d4-4594-8686-dd590837854d.png)
![US8](https://user-images.githubusercontent.com/99282359/221448962-48b88cd6-d6ef-4526-8a2b-ef138c969887.png)
![US9](https://user-images.githubusercontent.com/99282359/221448968-df8ef385-31e6-42bf-a47c-0848ce7fac90.png)
![US10](https://user-images.githubusercontent.com/99282359/221448972-997779d1-eac1-4aa2-b2bd-e2ffbc565a4e.png)



## Clareza do comportamento esperado do smart contract na explicação textual

O smart contract é uma aplicação que roda na blockchain e tem como objetivo fornecer seguros para celulares. Funcionando de maneira simples e eficiente: quando um cliente adquire um seguro, ele envia uma transação para o endereço do contrato com as informações do celular e o valor do prêmio de seguro. O contrato então registra a apólice e envia de volta uma confirmação da transação.

Caso o celular sofra algum dano coberto pela apólice, o cliente pode solicitar o reembolso ao enviar uma nova solicitação para o contrato com as informações do dano e as evidências necessárias. O contrato verifica se o dano está coberto pela apólice e, se estiver, realiza o pagamento do valor acordado em criptomoedas para o cliente.

Para garantir a transparência e a segurança das operações, todas as transações e informações do seguro são registradas na blockchain, tornando o processo totalmente rastreável e à prova de fraudes.

O smart contract também tem um conjunto de regras claras e transparentes que definem os termos e condições do seguro, garantindo que os clientes tenham uma compreensão clara do contrato e do que é coberto por ele.

Por meio dessas funções, o contrato espera fornecer seguros para celulares de maneira segura, eficiente e transparente. Assim, proporcionando aos clientes uma opção inovadora e confiável de proteção para seus dispositivos móveis.
