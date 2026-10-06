# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Projektelis – Žmonių sąrašo ir užduočių valdymas

Asmeninis React ir Vite projektas, skirtas praktikai, būsenos valdymui ir duomenų saugojimui naršyklėje (localStorage).

🚀 Funkcionalumas

Žmonių sąrašas: Galimybė valdyti žmonių sąrašą (planuojama pridėti vardą, gimimo datą ir miestą).

Interaktyvūs elementai: Pradinė „To Do List“ ir skaitliuko logika.

Duomenų išsaugojimas: Duomenys bus saugomi naršyklės localStorage, kad nepradingtų atnaujinus puslapį.

🛠️ Naudojamos technologijos

React (UI biblioteka)

Vite (Greitas rinktuvas ir kūrimo įrankis)

CSS (Stiliams)

⚙️ Kaip paleisti projektą lokaliai?

Atsisiųskite arba klonuokite šį repozitoriumą.

Įdiekite priklausomybes:

npm install


Paleiskite vystymo (development) serverį:

npm run dev


Naršyklėje atidarykite nuorodą, kurią nurodys Vite (paprastai http://localhost:5173).