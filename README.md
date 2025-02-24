<h1 align="center" style="text-align: center;">
  <img alt="Logo da Pluga" src="./public/pluga-logo.jpeg" style="width: 32px; height: 32px;vertical-align: middle; margin-right: 10px;">
  Desafio da Pluga - Dev jr
</h1>

> Apps integrados na Pluga

<p align="center">
  <a href="#project">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#usage">Utilização</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<h2 id="project">📁 Projeto</h2>

O projeto consiste numa tela com uma listagem de cards representando os apps integrados na Pluga e uma barra de busca.

A aplicação usa os dados retornados em [pluga.co/ferramentas_search.json](https://pluga.co/ferramentas_search.json) para construir essa listagem, com uma paginação de 12 em 12 apps.

!["Página home"](./public/home.png)

Ao clicar nos cards, é aberto um modal referente ao app selecionado com um link para acessar a página do app no site da Pluga.

Esse modal contém uma seção "Últimas ferramentas visualizadas", que mostra as 3 últimas ferramentas visualizadas, independente de quantos cards de apps sejam acessados.

!["Modal"](./public/modal.png)

<h2 id="technologies">💻 Tecnologias</h2>

Este projeto foi desenvolvido com as seguintes tecnologias:

- ReactJS
- ReactDOM
- React Icons
- Styled Components
- ViteJS

<h2 id="usage">💡 Utilização</h2>

A aplicação está disponível para uso [aqui](https://pluga-dev-challenge.netlify.app/).

Você também pode executá-la em sua máquina localmente. Certifique-se de ter o `Node.js` e o `npm` instalados antes de prosseguir com as etapas abaixo:

1. Clone o projeto:

```
$ git clone https://github.com/madalena-rocha/pluga-challenge
```

2. Acesse a pasta do projeto:

```
$ cd pluga-challenge
```

3. Instale as dependências:

```
$ npm install
```

4. Inicie o servidor:

```
$ npm run dev
```

---

Feito com 💙 by Madalena 👋🏾

<div style="display: flex;">
  <a href="https://www.linkedin.com/in/madalena-machado-rocha/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
  <a href="mailto:rochamada1997m@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" style="margin-right: 2vw" target="_blank"></a>
