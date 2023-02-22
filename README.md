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
-   [Vercel](https://vercel.com/)

## 📥 Instalação

Faça um clone desse repositório e acesse o diretório. Em instale todas as dependências com o seguinte comando:

```bash
npm i
```

Necessário o preenchimento de variáveis de ambientes do projeto no arquivo .env.local:

```bash
NEXTAUTH_URL=
GOOGLE_ID=
GOOGLE_SECRET=
OPENAI_API_KEY=
FIREBASE_SERVICE_ACCOUNT_KEY={...}
```
A variável `FIREBASE_SERVICE_ACCOUNT_KEY={...}`, pode ser preenchida indo em:  Configurações do projeto -> Contas de serviço -> Gerar nova chave. 
Em seguida é necessário remover as quebras de linhas do arquivo gerado (https://www.textfixer.com/tools/remove-line-breaks.php)

As demais variáveis abaixo podem ser encontradas dentro do próprio Firebase indo nas opções configurações do projeto:
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
