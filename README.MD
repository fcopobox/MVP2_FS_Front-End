#####################################################################################
#
#                         MVP2 CineScope — Catálogo de Filmes
#                Pós Graduação em Full Stack Development - PUC Rio - 2026
#                       
#                               Francisco Silveira
#
#####################################################################################

Este projeto é o **Front-End** para o MVP da Disciplina **Desenvolvimento Full Stack Avançado**.

---

## Descrição

O **CineScope** é uma aplicação SPA (Single Page Application) desenvolvida em **React + Vite**, que permite navegar por um catálogo de filmes, visualizar detalhes e realizar buscas por título ou gênero.  
O projeto utiliza **TanStack Router** para gerenciamento de rotas, **TailwindCSS + shadcn/ui** para estilização, e **Lucide Icons** para ícones.

---

## Como executar

Será necessário ter o **Node.js** e o **npm** instalados em sua máquina.

> Verifique a instalação executando:
-----------------------------------
node -v
npm -v
-----------------------------------

Após clonar o repositório, acesse o diretório raiz do projeto pelo terminal.

> Para instalar as dependências:
-----------------------------------
npm install
-----------------------------------

Este comando instala todas as bibliotecas descritas no arquivo `package.json`.

> Para executar o projeto em modo de desenvolvimento:
-----------------------------------
npm run dev
-----------------------------------

O terminal exibirá o endereço local:
Local: http://localhost:8080


Abra o link no navegador para visualizar o CineScope em execução.

---

## Estrutura do projeto

- `src/components` → Componentes reutilizáveis (SearchBar, MovieCard, Loader, etc.)  
- `src/routes` → Páginas e rotas configuradas com TanStack Router  
- `src/lib` → Funções auxiliares e integração com a API de filmes  
- `public/movies.json` → Base de dados local de filmes  
- `vite.config.ts` → Configuração do Vite  
- `package.json` → Dependências e scripts do projeto  

---

## Tecnologias utilizadas

- **React 18**  
- **Vite**  
- **TypeScript**  
- **TanStack Router**  
- **TailwindCSS + shadcn/ui**  
- **Lucide Icons**

---

## Execução e testes

Durante o desenvolvimento, o Vite oferece recarregamento automático (hot reload).  
Para interromper a execução, pressione `CTRL + C` no terminal.

Para gerar a versão de produção:
-----------------------------------
npm run build
-----------------------------------

Para visualizar o build localmente:
-----------------------------------
npm run preview
-----------------------------------

---

## Licença

Projeto acadêmico desenvolvido para fins educacionais na **PUC-Rio**, sob orientação da disciplina de **Desenvolvimento Full Stack Avançado**.

---

