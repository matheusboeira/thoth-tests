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

<img src="https://github.com/matheusboeira/thoth-tests/assets/76896958/947bb6f8-7ddf-4772-9266-f73c7dc2b3a3" alt="Com interface gráfica" width="100%"/>

## :notebook_with_decorative_cover: Sem interface gráfica

Para executar os testes sem interface gráfica, execute o comando abaixo:

```bash
pnpm run test
```

No final da execução, será gerado um relatório com o resultado dos testes. Para visualizar o relatório, basta executar o comando abaixo:

```bash
pnpm run test:report
```

#### Visualização

<img src="https://github.com/matheusboeira/thoth-tests/assets/76896958/24c220ec-3e2b-4cf5-9c5f-84f7356b6283" alt="Sem interface gráfica" width="100%"/>




