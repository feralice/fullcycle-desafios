# Desafio docker: nginx como proxy reverso com node e mysql

Este projeto utiliza **Docker** para rodar uma aplicação **Node.js**, que se conecta a um banco de dados **MySQL**, com **Nginx** atuando como **proxy reverso**.

1. O **Nginx** encaminha requisições para o **Node.js**.
2. O **Node.js** insere nomes aleatórios na tabela `people` do **MySQL**.
3. A resposta exibe a mensagem **"Full Cycle Rocks!"** e a **lista de nomes cadastrados**.

## Como Rodar

1️⃣ Clone o repositório e vá para a pasta correta

```sh
https://github.com/feralice/fullcycle-desafios.git
```

```sh
cd desafio-docker-2
```

2️⃣ Suba os containers:

```sh
docker-compose up -d --build
```

3️⃣ Acesse no navegador:

http://localhost:8080
