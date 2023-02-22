# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

<h1 align="center">
  <span>Chat GPT Clone</span>
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<br>

<p align="center">
  <img alt="layout" src="./images/layout.gif" width="100%">
</p>

<br>

## 💻 Projeto

Projeto com o intuito de reproduzir a interface do [Chat GPT](https://openai.com/). Este projeto foi proposto pelo [Sonny Sangha](https://www.youtube.com/watch?v=V6Hq_EX2LLM), através do seu canal do Youtube. Neste projeto temos as seguintes funcionalidades:

-   Usuário loga utilizando sua conta do Google.
-   Pode criar e remover novos chats para se comunicar com a IA.
-   Seleciona qual modelo de inteligência utilizar.
-   Ao logar todos os chats anteriores que estão ativos são carregados.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

-   [Open AI](https://openai.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [React](https://pt-br.reactjs.org/)
-   [Next.js](https://nextjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [Firebase](https://firebase.google.com/)

## 📥 Instalação

Faça um clone desse repositório e acesse o diretório. Em instale todas as dependências com o seguinte comando:

```bash
npm i
```

Necessário o preenchimento de variáveis de ambientes do projeto no arquivo .env.local:

```bash
NEXTAUTH_URL= "url do projeto local"
GOOGLE_ID= "identificador do projeto no Google Cloud"
GOOGLE_SECRET= "chave do projeto no Google Cloud"
OPENAI_API_KEY= "chave gerada da IA para utilizar no projeto"
FIREBASE_SERVICE_ACCOUNT_KEY="chave gerada a partir do firebase utilizando a opção Configurações do projeto -> Contas de serviço -> Gerar nova chave. Em seguida é necessário remover as quebras de linhas do arquivo gerado (https://www.textfixer.com/tools/remove-line-breaks.php)."
```

As variáveis abaixo podem ser encontradas dentro do próprio Firebase indo nas opções configurações do projeto:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

Em seguida execute o comando

```bash
npm run dev
```

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

**Desenvolvido por [Bruno César](https://github.com/brunocs90).**
