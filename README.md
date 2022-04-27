# Atividade de Padrões de Projeto

Foram implementados dois padrões de projeto para a atividade.

## Factory Method

No padrão de Factory Method, foi simulado um criador de Devices, podendo variar entre "Tablet e Laptop", caso não seja encontrado o tipo de device, é lançado uma Exception.

### Para rodar o exemplo de Factory Method

```
yarn run:factory
```

## Singleton

Como exemplo do padrão de Singleton, foi simulado o cenário de conexão com o banco de dados.
O arquivo singleton.js é responsável por criar uma conexão com o banco de dados, caso já exista uma conexão, retorna a mesma.
É utilizado o conceito de closure para armazenar a instância dentro do escopo da função.

### Para rodar o exemplo de Singleton

```
yarn run:singleton
```

### Alunos:

#### Marcos Andrade: 1822241

#### Michel Silva: 2112094
