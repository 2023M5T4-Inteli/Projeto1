# Projeto1

# Inteli - Instituto de tecnologia e liderança
*
# Desenvolvimento de software com a utilização de blockchain
*
## Etherchain
Grupo criado para o desenvolvimento do projeto com o parceiro Coover, de seguros.
## Integrantes 
- Camila Fernanda de Lima Anacleto
- Eduardo França Porto
- Izabella Almeida de Faria
- Lucas Conti Pereira
- Michel Mansur
- Rafael Lupovici Moritz
- Vinicius Oliveira Fernandes

## Descrição do projeto
*
## Estrutura de pastas
*
## Histórico de lançamentos
*
## Licença
*

## Descrição dos requisitos de negócio cumpridos pelo smart contract 

### Requisitos dentro das funções de Administração da Coover

A Coover como administradora, e "dona" do contrato, será a principal responsável em relação ao controle e execução dos requisitos do Smart Contract. Dentro das opções, as funções priormordias de gerenciamento das condições e regulamento do Smart Contract são fundamentais para a sustentabilidade do relacionamento entre seguradora e cliente.

- Criação de grupos: Essa aplicação permite o usuario montar um grupo de seguro mútuo.

- Solicitação de indenização: A solicitação de indenização permite que a seguradora consegue enviar pagamentos para os membros do contrato. Consequentemente, a validação do usuário é feita automaticamente pelo próprio Smart Contract, assim como o grupo em questão.

- Aprovação do pedido: Essa função permite a seguradora aprovar o pedido do seguro. Assim como a função de solicitação, a aprovação do pedido se dá por meio da validação automatica, e por meio de requisição na área do administrador no frontend.

- Adicição e remoção de usuários: Essa função permite a seguradora adicionar e remover usuarios. Isso é necesário conforme o controle da seguradora do limite de usuários, além de dar possibilidade para o usuário optar pela saída. 

## Descrição da arquitetura utilizando diagrama de blocos e clareza da explicação de cada elemento e sua responsabilidade 

O usuário (cliente ou admnistrador) acessa a aplicação pelo browser após o plugin com a metamask. 
Na aplicação do admnistrador, pode ser feita a criação de grupos de seguro mútuo (smart contracts) em uma relação direta com a Testnet. 
O deploy destes contratos é feito no github por admnistradores da Coover, para que seja "open source".
Por fim, na aplicação dos clientes, é possível interagir e realizar transações com esses smart contracts. 
Dados sensíveis dos clientes são armazenados em um banco de dados, uma vez que a disponibilização destes na blockchain seria algo perigoso. 

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
                                     



## Clareza do comportamento esperado do smart contract na explicação textual

Nosso smart contract é uma aplicação que roda na blockchain e tem como objetivo fornecer seguros para celulares. Ele funciona de maneira simples e eficiente: quando um cliente adquire um seguro, ele envia uma transação para o endereço do contrato com as informações do celular e o valor do prêmio de seguro. O contrato então registra a apólice e envia de volta uma confirmação da transação.

Caso o celular sofra algum dano coberto pela apólice, o cliente pode solicitar o reembolso ao enviar uma nova transação para o contrato com as informações do dano e as evidências necessárias. O contrato verifica se o dano está coberto pela apólice e, se estiver, realiza o pagamento do valor acordado em criptomoedas para o cliente.

Para garantir a transparência e a segurança das operações, todas as transações e informações do seguro são registradas na blockchain, tornando o processo totalmente rastreável e à prova de fraudes.

Nosso smart contract também tem um conjunto de regras claras e transparentes que definem os termos e condições do seguro, e isso garante que os clientes tenham uma compreensão clara do contrato e do que é coberto por ele.

Por meio dessas funções, nosso smart contract espera fornecer seguros para celulares de maneira segura, eficiente e transparente, proporcionando aos clientes uma opção inovadora e confiável de proteção para seus dispositivos móveis.
