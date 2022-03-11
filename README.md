# Projeto CRUD Gerenciamento de Funcionários

* [Stack utilizada](#stack-utilizada)
* [Funcionalidades](#funcionalidades)
    * [Tela de Funcionários](#tela-de-funcionários)
    * [Cadastrar Funcionário](#cadastrando-um-novo-funcionário)
    * [Atualizar Funcionário](#atualizando-um-funcionário)
    * [Remover Funcionário](#removendo-um-funcionário)
    * [CPF já cadastrado](#tentando-cadastrar-funcionário-com-um-cpf-já-cadastrado)
    * [Cadastrar Cargo](#cadastrando-um-novo-cargo)
    * [Atualizar Cargo](#atualizando-um-cargo)
    * [Remover Cargo](#removendo-um-cargo)
    * [Tabela de Funcionário no Banco de dados](#tabela-de-funcionários-no-banco-de-dados)
    * [Tabela de Cargos no Banco de dados](#tabela-de-cargos-no-banco-de-dados)
* [Teste o Projeto](#teste-o-projeto)

### Stack utilizada:

<div style="display: inline_block">
    <img aling="center" alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
    <img aling="center" alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
    <img aling="center" alt="Java" src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white">
    <img aling="center" alt="Spring" src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
    <img aling="center" alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
</div><br>

## Funcionalidades

- [x] Cadastrar Funcionário
- [x] Listar Funcionários
- [x] Atualizar Funcionário
- [x] Excluir Funcionário
- [x] Cadastro único por nome, CPF e telefone
- [ ] Organizar Funcionários por ordem alfabética
- [ ] Buscar Funcionários

- [x] Cadastrar Cargo
- [x] listar Cargos
- [x] Atualizar Cargos
- [x] Excluir Cargos
- [ ] Organizar Cargos por ordem alfabética
- [ ] Buscar Cargos

### Tela de funcionários

<h1>
    <img src="./Imagens Readme/telafuncionarios.png">
</h1>

### Cadastrando um novo funcionário

<h1>
    <img src="./Imagens Readme/cadastrarfuncionario.gif">
</h1>

### Atualizando um funcionário

<h1>
    <img src="./Imagens Readme/atualizarfuncionario.gif">
</h1>

### Removendo um funcionário

<h1>
    <img src="./Imagens Readme/removerfuncionario.gif">
</h1>

### Tentando cadastrar funcionário com um CPF já cadastrado

<h1>
    <img src="./Imagens Readme/cpfunico.gif">
</h1>

### Cadastrando um novo cargo

<h1>
    <img src="./Imagens Readme/cadastrarcargo.gif">
</h1>

### Atualizando um cargo

<h1>
    <img src="./Imagens Readme/atualizarcargo.gif">
</h1>

### Removendo um cargo

<h1>
    <img src="./Imagens Readme/removercargo.gif">
</h1>

### Tabela de funcionários no banco de dados

<h1>
    <img src="./Imagens Readme/bdfuncionarios.png">
</h1>

### Tabela de cargos no banco de dados

<h1>
    <img src="./Imagens Readme/bdcargos.png">
</h1>

## Teste o projeto

### Pré-requisitos

Os pré-requisitos necessários para executar o projeto são:

* [Node.js](https://nodejs.org/en/)
* [Java](https://www.oracle.com/java/technologies/downloads/#jdk17-windows)
* [Git](https://git-scm.com/downloads)
* [MySQL](https://dev.mysql.com/downloads/installer/)

Além disso também será necessário:

* Um editor de texto
* Uma IDE para rodar a API

### Testando o projeto

```bash
# Clone o repositorio
$ git clone <https://github.com/IgormBonfim/Projeto-CRUD-Gerenciamento-de-Funcionarios.git>
```

### Rodando a API
Primeiramente será necessário configurar o banco de dados.

```bash
# Crie o schema no banco de dados
create schema `dbprojetogerenciamento`;

# Crie a tabela de cargos no banco de dados
CREATE TABLE `cargo` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `dta_cargo` date NOT NULL,
  `nome_cargo` varchar(50) NOT NULL,
  `perm` varchar(50) NOT NULL,
  `setor` varchar(50) NOT NULL,
  PRIMARY KEY (`id`));

# Crie a tabela de funcionários no banco de dados
CREATE TABLE `funcionario` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `cpf` varchar(50) NOT NULL,
  `dta_funcionario` date NOT NULL,
  `name` varchar(50) NOT NULL,
  `salario` varchar(50) NOT NULL,
  `telefone` varchar(50) NOT NULL,
  `cargo_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK1mmiur94efkujcsaab0cdgskv` (`cargo_id`),
  CONSTRAINT `FK1mmiur94efkujcsaab0cdgskv` FOREIGN KEY (`cargo_id`) REFERENCES `cargo` (`id`));
  ```

* Configure a conexão da API com o banco de dados (src/main/resources/application.properties)

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/dbprojetogerenciamento?useTimezone=true&serverTimezone=UTC
spring.datasource.username=YOURUSERNAME
spring.datasource.password=YOURPASSWORD

spring.jpa.hibernate.ddl-auto=update
```

* Execute a API;


### Rodando o Front-End

```bash
# Acesse a pasta do projeto no terminal
$ cd Front-end Angular

# Instale as dependências
$ npm install

# Execute a aplicação no modo de desenvolvimento
$ npm run start

# O servidor iniciará na porta padrão:4200 - acesse <http://localhost:4200>
```

## Nota

Todas as informações foram geradas aleatoriamente em utilizando um [gerador de pessoas](https://www.4devs.com.br/gerador_de_pessoas)
