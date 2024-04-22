# :book: Como usar 

Para executar os testes, existem duas maneiras: com interface gráfica, onde é possível visualizar o passo a passo da execução dos testes, e sem interface gráfica, onde é gerado um relátorio após a execução dos testes, que pode ser visualizado em um navegador.

## Antes de executar os testes

Para executar os testes, é necessário instalar as dependências do projeto. Para isso, execute o comando abaixo:

> **Nota:** Caso não tenha o `pnpm` instalado, execute o comando:

```bash
npm install -g pnpm
```

> Caso já possua, instale as dependências do projeto:

```bash
pnpm install
``` 

## :robot: Com interface gráfica

Para executar os testes com interface gráfica, execute o comando abaixo:

```bash
pnpm run test:ui
```

#### Visualização

[![Testes com interface gráfica](https://i.imgur.com/1Q2Q5Zm.png)](https://i.imgur.com/1Q2Q5Zm.png)

## :notebook_with_decorative_cover: Sem interface gráfica

> No final da execução, será gerado um relatório com o resultado dos testes. Para visualizar o relatório, basta abrir a url `http://localhost:9323` em um navegador.

Para executar os testes sem interface gráfica, execute o comando abaixo:

```bash
pnpm run test
```

#### Visualização

[![Testes sem interface gráfica](https://i.imgur.com/1Q2Q5Zm.png)](https://i.imgur.com/1Q2Q5Zm.png)



