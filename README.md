
#  Cardzinho - Gerenciador de solicitações de cartão de crédito
##  Tecnologias usadas durante o desenvolvimento
- NodeJS
- Express
- ReactJS
- PostgreSQL
- Jasmine 
- Docker
  
## Criando o container PostgreSQL
>sudo docker run --name dockerpgsql -e "POSTGRES_PASSWORD=1234" -p 5432:5432 -d postgres

## Aplicação
- A aplicação permite a solicitação de um cartão de crédito, o usuário insere suas informações básicas e o sistema irá fazer uma análise da liberação do cartão.
### Regras
Quando o usuário solicitar um cartão, há aprovação automática do sistema, que sua regra será:

Uma rotina verifica a pontuação de crédito do usuário que será uma rotina que devolva uma pontuação **aleatória** entre 1 a 999, para ser utilizada como score de credito.

Sendo que, dependendo do score retornado a solicitação é aprovada ou não, também alterando o seu limite de crédito, que segue a seguinte lógica:

| Score     | Crédito                                        |
| --------- | ---------------------------------------------- |
| 1 a 299   | Reprovado                                      |
| 300 a 599 | R$1000,00                                      |
| 600 a 799 | 50% da renda informada, valor mínimo R$1000,00 |
| 800 a 950 | 200% da renda informada                        |
| 951 a 999 | Sem limites, considerar R$ 1.000.000           |

### Endpoints

- /cartao
  - **GET**: Lista todas as solicitações de cartões no sistema.
  - **POST**: Insere uma nova solicitação de cartão.
  - **DELETE**: Remove uma solicitação. 
