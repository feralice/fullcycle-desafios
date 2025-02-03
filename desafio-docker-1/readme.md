
##  Construindo a imagem
Primeiro, você precisa construir a imagem utilizando o seguinte comando:

```sh
docker build -t fernandaalice/fullcycle .
```

## Executando o container
Depois, você pode executar o container com a imagem criada anteriormente:

```sh
docker run fernandaalice/fullcycle
```
Na saída do terminal deverá aparecer **Full Cycle Rocks!!**

Para ver o tamanho da imagem construída, dê o comando:
```sh
docker images | grep fernandaalice/fullcycle
```