# Desafio Front-end Vizir

Desafio realizado para uma vaga de emprego na empresa Vizir.

## :pencil: Sobre

O projeto se trata de um website de uma empresa de telefonia fictícia, desenvolvido usando [ReactJS](https://pt-br.reactjs.org/), [Typescript](https://www.typescriptlang.org/), [React-Bootstrap](https://react-bootstrap.github.io/), [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).
Composto de três páginas, uma principal feita para calcular o valor das ligações, uma de planos e tarifas para saber como funciona os planos e quais as tarifas das ligações e uma página de sobre falando da "empresa".

## :package: Como instalar e rodar

1. Certifique-se de possuir um gerenciador de pacotes instalado em sua máquina, caso não tenha baixe e instale o [NPM](https://nodejs.org/en/download/) ou o [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable).


2. Clone esse repositório na pasta desejada

```bash
  git clone https://github.com/Henriquepb22/vizir-frontend-test
```

3. Entre na pasta do projeto e execute as instalações das dependencias

```bash
  cd vizir-frontend-test
  ## usando npm
  npm install
  ## usando yarn
  yarn install

  ## após finalizar o download das dependencias rode o projeto
  npm run start
  ## com yarn
  yarn start
```

4. Agora é só abrir o [localhost:3000](http://localhost:3000) e pronto!

5. Caso deseje rodar os testes execute o seguinte comando:
```bash

  ## usando npm
  npm run test
  ## usando yarn
  yarn test

```

## :question: Como usar

Na página principal selecione o DDD de origem e de destino, depois digite a quantidade de minutos falados e depois escolha o plano que deseja, após isso clique em calcular e o valor será carregado.
Se desejar saber quais os valores e como funciona o calculo, navegue para a página de planos e tarifas.
E para saber mais sobre a empresa navegue para a página de sobre.
