# Svatební web — Monika & Jan

## Deploy na Vercel

### Postup přes GitHub:

1. Vytvoř nový repozitář na github.com
2. Nahraj obsah této složky do repozitáře
3. Jdi na vercel.com a přihlas se přes GitHub
4. Klikni "Add New Project" → vyber svůj repozitář
5. Framework: Vite (měl by se detekovat automaticky)
6. Klikni "Deploy"

### Postup bez GitHubu (přímý upload):

1. Jdi na vercel.com a přihlas se
2. Nainstaluj Vercel CLI: `npm i -g vercel`
3. V této složce spusť: `npm install`
4. Pak: `vercel`
5. Následuj instrukce v terminálu

## Vlastní doména

Po deployi v Vercel dashboardu:
1. Settings → Domains
2. Přidej svou doménu (např. monikaajan.cz)
3. Nastav DNS záznamy podle instrukcí od Vercel
