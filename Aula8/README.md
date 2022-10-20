# API

API de carros

[![Test CI](https://github.com/FabioFiorita/C214-Lab/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/FabioFiorita/C214-Lab/actions/workflows/node.js.yml)
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
2. Entre na Aula8
```bash
cd Aula8
```

3. Instale todas as depencências
```bash
npm install
```

4. Rode o projeto
```bash
npm start
```

5. Teste o projeto
```bash
npm test
```

## 💻 Como Rodar
- [x] Cadastro de carro
```bash
http://localhost:4000/car/create
```
```json
{
    "placa": "AAA-0000",
    "marca": "Honda",
    "kmRodados": 1000,
}
```
- [x] Busca de carros
```bash
http://localhost:4000/car/list
```
- [x] Busca de carros por placa
```bash
http://localhost:4000/car/list?placa=AAA-0000
```
- [x] Atualização de carro
```bash
http://localhost:4000/car/update
```
```json
{
    "placa": "AAA-0001",
    "marca": "Ford",
    "kmRodados": 1001,
}
```
- [x] Exclusão de carro
```bash
http://localhost:4000/car/delete?placa=AAA-0000
```

