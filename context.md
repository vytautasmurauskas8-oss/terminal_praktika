# Projektelis — projekto kontekstas

## Paskirtis

Projektelis yra nedidelė asmeninė užduočių planavimo svetainė. Dabartinėje sąsajoje yra mėnesio kalendorius ir šalia jo rodomas užduočių sąrašas. Projektas kuriamas kaip paprasta React + Vite mokomoji programa.

## Technologijos ir apribojimai

- React 19 ir Vite 8.
- JavaScript ir JSX; TypeScript nenaudoti, nebent to aiškiai prašoma.
- Įprasti CSS failai; nenaudoti Tailwind ar CSS modulių, nebent to aiškiai prašoma.
- Naujus React komponentus laikyti `src/` aplanke, jų stilius — atskiruose `.css` failuose.
- Dabartinės tiesioginės priklausomybės: `react` ir `react-dom`. Be reikalo nepridėti paketų.

## Esama struktūra

- `src/App.jsx` — pagrindinis puslapis, kalendoriaus logika, React būsenoje laikomas užduočių sąrašas ir paprasta puslapių navigacija.
- `src/AddTask.jsx` — atskiras naujos užduoties puslapio komponentas.
- `src/AddTask.css` — naujos užduoties puslapio stiliai.
- `src/App.css` — puslapio, kalendoriaus, užduočių kortelių ir responsyvaus išdėstymo stiliai.
- `src/index.css` — globalūs stiliai, spalvų kintamieji ir `#root` išdėstymas.
- `src/main.jsx` — React programos įėjimo taškas.
- `public/` ir `src/assets/` — statiniai ištekliai.
- `package.json` — priklausomybės bei `dev`, `build`, `lint` ir `preview` komandos.

## Dabartinis funkcionalumas

- Kalendorius parodo dabartinį mėnesį ir paryškina šiandienos datą.
- Mėnesį galima keisti pirmyn ir atgal, o dieną — pasirinkti paspaudus.
- Po kalendoriumi pateikiama pasirinkta data.
- Kairėje kalendoriaus pusėje plačiame ekrane rodoma užduočių kortelė su būsenomis „Atlikta“, „Neatlikta“ ir „Vėluoja“.
- Sąrašas pradedamas trimis pavyzdinėmis užduotimis ir laikomas `App` komponento React būsenoje. Užduotis galima pridėti per naujos užduoties formą; jos kol kas nėra saugomos `localStorage`.
- Mažesniuose ekranuose užduočių sąrašas rodomas virš kalendoriaus.
- Pagrindiniame puslapyje esantis „+ Nauja užduotis“ mygtukas atveria atskirą naujos užduoties puslapį; jo „Grįžti“ mygtukas grąžina į pagrindinį puslapį. Perjungimą valdo `useState` `src/App.jsx` faile.
- Naujos užduoties puslapyje yra valdomi užduoties pavadinimo, datos ir prioriteto laukai (`Žemas`, `Vidutinis`, `Aukštas`). Pavadinimas ir data yra privalomi; prioritetas pagal numatymą yra „Vidutinis“.
- Pateikus formą be pavadinimo ar datos, po trūkstamu lauku parodoma lietuviška klaida ir forma neužbaigiama. Pataisius lauką, atitinkama klaida iškart pašalinama.
- Sėkmingai pateikus formą, užduotis su unikaliu ID, pavadinimu, data, prioritetu ir būsena „Neatlikta“ įtraukiama į React state ir vartotojas grąžinamas į pagrindinį puslapį. Pagrindiniame sąraše rodoma jos būsena ir pavadinimas; sąrašas atnaujinamas iškart, bet po puslapio perkrovimo duomenys neišsaugomi.

## Dokumentacijos atnaujinimo taisyklė

- Kiekvieną kartą keičiant projekto kodą, stilius, priklausomybes, konfigūraciją ar naudotojui matomą funkcionalumą, tame pačiame darbo etape atnaujinti ir šį `context.md` failą.
- Atnaujinti tik tas skiltis, kurias paveikė pakeitimas, kad aprašas tiksliai atitiktų esamą kodą. Jei pasikeičia funkcionalumas, pašalinti pasenusius teiginius.
- Jei pakeitimas nekeičia projekto konteksto (pavyzdžiui, taisoma tik dokumentacijos rašyba), įvertinti, ar konteksto failą reikia atnaujinti.
- Prieš užbaigiant darbą patikrinti, kad `context.md` atspindi galutinę pakeisto kodo būseną.

## Sąsajos ir dizaino gairės

- Vartotojui matomą tekstą rašyti lietuviškai, trumpai ir aiškiai.
- Išlaikyti esamą šviesią, minimalistinę mėlynų atspalvių išvaizdą ir prisitaikantį išdėstymą.
- Išsaugoti veikiančią kalendoriaus elgseną, nebent užduotyje aiškiai prašoma ją keisti.
- Naudoti funkcinius React komponentus ir hooks.
- Prieš redaguojant failą jį perskaityti; remtis dabartiniu kodu, o ne pasenusia dokumentacija.
- Neišgalvoti neegzistuojančių API ar duomenų saugojimo funkcijų. Jei funkcionalumas dar tik pavyzdinis, tai aiškiai įvardyti.
- Vengti su užduotimi nesusijusių refaktorizavimų ir priklausomybių.

## Paleidimas

```bash
npm install
npm run dev
```

Vite pateiks vietinio kūrimo serverio adresą. Projektui taip pat nustatytos `npm run build`, `npm run lint` ir `npm run preview` komandos.

## Dokumentacijos pastaba

`README.md` ir `projekto_readme.md` dalis aprašo planuotus ar ankstesnius dalykus (pavyzdžiui, žmonių sąrašą ir `localStorage`), kurių dabartiniame sąsajos kode nėra. Prieš remiantis tokiais teiginiais patikrinti esamą kodą ir dokumentaciją atnaujinti, kai funkcionalumas pasikeičia.
