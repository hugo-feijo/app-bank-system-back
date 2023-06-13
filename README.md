## Installation


## Rodando aplicação

1. Instalar dependencias rodando o seguinte comando:
```bash
$ yarn install
```
2. Criar um banco de dados chamado `bank-system`
3. rodar essa sequencia de comando:
```bash
# migration
$ yarn typeorm:run

# seeds
$ yarn typeorm-seed:run

# application
$ yarn start
```