# Descrição do Repositório

Este é um projeto de teste de aplicação web usando o **Cypress**, uma ferramenta de teste de ponta a ponta. O projeto inclui vários testes que foram criados para verificar diferentes aspectos da aplicação.

## Estrutura do Projeto

O projeto possui uma estrutura de pastas específica:

- A pasta `e2e` contém todos os testes de ponta a ponta. Dentro desta pasta, o arquivo `cadastro.spec.cy.js` contém os testes específicos para o processo de cadastro.
- O arquivo `package.json` na raiz do projeto contém as dependências do projeto e os scripts necessários para executar os testes.

## Pré-requisitos

Para rodar este projeto localmente, você precisará ter o seguinte instalado:

1. Node.js
2. npm (geralmente vem com o Node.js)

## Instalação

1. Faça um fork deste repositório e clone-o para a sua máquina local.
2. Navegue até a pasta do projeto e instale as dependências usando o comando `npm install`.

## Executando os Testes

Para executar os testes, use o comando `npm run cypress:open`. Este comando foi definido no script `cypress:open` no arquivo `package.json`.

## Sobre os Testes

Os testes neste projeto são focados no processo de cadastro do site Descomplica. Eles automatizam o processo de preenchimento do formulário de cadastro e verificam se o cadastro é realizado com sucesso.

## Referências

Este projeto foi criado com a ajuda do Cypress. Para mais informações sobre como usar o Cypress, consulte a documentação oficial.
