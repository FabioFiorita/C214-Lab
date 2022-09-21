# API

API de filmes

![NPM version](https://img.shields.io/npm/v/npm?label=npm%20version&style=for-the-badge)


- [API](#api)
  - [⚙️ Instale antes de tentar executar os projetos)](#️-instale-antes-de-tentar-executar-os-projetos)
  - [🚀️ Executando os projetos](#️-executando-os-projetos)
  - [💻 Como Rodar](#-como-rodar)

## ⚙️ Instale antes de tentar executar os projetos)
 - [Node](https://nodejs.org/)
 
## 🚀️ Executando os projetos

1. Clone o repositório: 
```bash
git clone https://github.com/FabioFiorita/C214-Lab.git && cd C214-Lab
```
2. Entre na Aula6
```bash
cd Aula6
```

3. Instale todas as depencências
```bash
npm install
```

4. Crie o arquivo **_auth.json_** para autenticação do banco de dados
```json
{
    "username": "<username>",
    "password": "<password>"
}
```

5. Rode o projeto
```bash
npm start
```

5. Teste o projeto
```bash
npm test
```
## 💻 Como Rodar
- [x] Cadastro de filme
```bash
http://localhost:4000/movie/create
```
```json
{
    "title": "Nope",
    "launchDate": "22/09/2022",
    "mainActor": "Daniel Kaluuya",
    "movieProducer": "Monkeypaw Productions"
}
```
- [x] Busca de filmes
```bash
http://localhost:4000/movie/list
```
- [ ] Bussca de filmes por titulo
- [ ] Atualização de filme
- [ ] Exclusão de filme

