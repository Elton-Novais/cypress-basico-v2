# Testes automatizados com Cypress - Básico

👋 Seja bem-vindo(a) ❤️

cy-data-test
Projeto de amostra para demonstrar um comando personalizado Cypress cy.dataTest.

# PRÉ-REQUISITOS

É necessário ter Node.js e npm instalados para executar este projeto.

Usei as versões v16.13.2 e 8.1.2 do Node.js e npm, respectivamente. Sugiro que você use as versões iguais ou posteriores.

# INSTALAÇÂO

Run npm install (ou npm i para a versão curta) para instalar as dependências de desenvolvimento.

# TESTES

Observação: antes de executar os testes, faça uma cópia do arquivo cypress.env.example.json como cypress.env.json, que no mundo real você atualizaria com credenciais válidas.

O arquivo cypress.env.json está incluso em .gitignore e você está seguro de que as informações confidenciais não serão controladas.

Você pode rodar os testes em versãp Desktop ou Mobile

# DESKTOP

Run 'npm test' (ou npm t para versão curta) para rodar o teste em headless mode.

Ou, Run 'npm run cy:open' para abrir o Cypress em interactive mode.

# MOBILE

Run 'npm run test:mobile' para rodar o teste em headless mode em versão mobile

Ou 'npm run cy:open:mobile' para abrir o Cypress em interactive mode em versão mobile



