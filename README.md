# CSCI331-HW

NextJS homework: a small Next.js (React) site with three pages.

| Page | What it shows |
|---|---|
| `/count` | The `Counter` component used twice, one counting by 1 and one by 5 (props) |
| `/githublink` | A paragraph about my final project topic, with a link to this repo |
| `/store` | A search bar that filters products from [fakestoreapi.com](https://fakestoreapi.com) by title, shown in a table |

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Run on the course server

```bash
git clone https://github.com/GarrettM06/CSCI331-HW.git
cd CSCI331-HW
npm install
npm run build
tmux new -s nextjs
npm start
```

Detach from tmux with `Ctrl-b` then `d`; the app keeps running. Reattach with `tmux attach -t nextjs`.

The port is set in `package.json` (`next start -p 30XX`). Next.js 16 needs Node 20.9 or newer.
