# Abdulrahman Aldemashki – Online-Lebenslauf

Statische Lebenslauf-Website (HTML/CSS/JS, kein Build-Schritt).

- `index.html` – Inhalte auf Deutsch (Standard)
- `i18n.js` – Übersetzungen Englisch und Arabisch (Arabisch von rechts nach links)
- `styles.css` – Layout, Hell-/Dunkelmodus, Druck-Layout (A4)
- `script.js` – Theme-Umschalter und PDF-Button

## Lokal ansehen

`index.html` im Browser öffnen.

## Sprachen

Umschalter oben (DE / EN / ع). Direktlinks: `?lang=en`, `?lang=ar`.
Bei Textänderungen in `index.html` den gleichen Schlüssel (`data-i18n`) in `i18n.js` anpassen.

## PDF erstellen

Auf der Seite den Button **PDF** klicken (oder Strg+P) und „Als PDF speichern“ wählen.

## Veröffentlichen (GitHub Pages)

Repository → **Settings → Pages** → *Deploy from a branch* → Branch wählen, Ordner `/ (root)`.
