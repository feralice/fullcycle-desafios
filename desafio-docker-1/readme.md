## Construindo a imagem

Primeiro, você precisa baixar a imagem do link:

[Baixar a imagem no Docker Hub](https://hub.docker.com/r/feralice/fullcycle)

## Executando o container

Depois, você pode executar o container com a imagem baixada:

```sh
docker run feralice/fullcycle
```

Na saída do terminal deverá aparecer **Full Cycle Rocks!!**

Para ver o tamanho da imagem construída, execute o comando:

```sh
docker images | grep feralice/fullcycle
```

