
# solenesun.com — Portfolio & Vlog (Monochrome, FR/EN)

## Déploiement GitHub Pages
1. Créez un repo GitHub et poussez ces fichiers à la racine.
2. Dans **Settings → Pages** : `Deploy from a branch` → `main` → `/root`.
3. Ajoutez un fichier **CNAME** à la racine contenant :
```
solenesun.com
www.solenesun.com
```
4. DNS chez votre registrar :
   - A (@) → 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153
   - CNAME (www) → votre-username.github.io
5. Activez **Enforce HTTPS** dans Pages.

## Changer la langue par défaut
- Le site choisit `localStorage.lang` si présent, sinon la langue du navigateur (`fr`/`en`).
- Le switcher en header met à jour tout le texte (via `i18n/*.json`).

## Édition de contenu
- Mettez à jour les textes dans `i18n/fr.json` et `i18n/en.json`.
- Ajoutez vos projets dans `projets.html`, et vos billets dans `vlog.html`.
