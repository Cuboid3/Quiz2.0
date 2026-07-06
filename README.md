# Núcleo — Quiz sobre Estrutura da Matéria

Quiz web feito em **React + Vite**, com conteúdo baseado fielmente no trabalho escrito enviado
("Estrutura da Matéria: do Átomo às Moléculas" — E.E.E.F.M. Santo Antônio, São Mateus/ES, 2026),
incluindo: Demócrito, os cinco modelos atômicos (Bola de bilhar, Pudim de passas, Nuclear,
Planetário e Nuvem eletrônica) e as cientistas Marie Curie, Rosalind Franklin, Lise Meitner e
Dorothy Hodgkin. Todas as perguntas e explicações citam diretamente trechos do trabalho.

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```
src/
  components/   AtomLogo, ProgressBar, QuestionCard
  pages/        Home, Quiz, Result
  hooks/        useQuiz.js (lógica do jogo: sorteio, pontos, combo)
  data/         questions.js (banco com 41 perguntas, citando o trabalho escrito)
  utils/        storage.js (persistência em localStorage)
  styles/       global.css
```

## Mecânicas implementadas

- 10 perguntas aleatórias por partida, sem repetição (banco com 41 perguntas).
- Alternativas embaralhadas a cada partida.
- +100 pontos por acerto, com bônus de combo para acertos consecutivos.
- Explicação curta exibida após cada resposta.
- Barra de progresso e feedback visual imediato (verde = correta, vermelho = incorreta).
- Tela final com pontuação, porcentagem de acerto e ranking local das últimas partidas.
- Estatísticas persistidas em `localStorage`: recorde, total de partidas, acertos, erros,
  melhor porcentagem e histórico.

## Sem backend / sem painel admin

Toda a lógica roda no navegador. As perguntas estão embutidas em `src/data/questions.js`
e as estatísticas em `localStorage`, sem necessidade de servidor.
