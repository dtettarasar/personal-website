# Audit – Performance & Sécurité

Document de suivi des optimisations et des actions liées à la **performance** et à la **sécurité** du projet (branche `security-update`).

---

## Légende

| Statut | Signification |
|--------|----------------|
| ✅ Fait | Élément mis en place |
| 🔄 En cours | En cours de réalisation |
| 📋 À faire | Identifié, à planifier |
| ⏸️ Reporté | Reporté à plus tard |

---

## Performance

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | | | |

---

## Sécurité

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | **Logs sensibles côté serveur** | ✅ Fait | Suppression des `console.log` exposant `mongoUser`, `mongoPass`, et l’URI MongoDB complète dans `server/plugins/database.ts` et `server/database/database.ts`. Les logs peuvent être stockés ou visibles (ex. `docker logs`) et exposaient les identifiants. |
| 2 | **Mongoose debug en production** | ✅ Fait | `mongoose.set('debug', true)` désactivé en production dans `server/database/database.ts` (activé uniquement si `NODE_ENV !== 'production'`). En prod, le debug peut logger des requêtes et données sensibles. |
| 3 | **API de test MongoDB** (`GET /api/test-mongo`) | 📋 À faire | Endpoint qui crée un document à chaque appel : risque d’abus (DoS, pollution de la BDD). À désactiver en production (guard `NODE_ENV`) ou à supprimer / protéger. |
| 4 | **`v-html` dans ProjectCard** | 📋 À faire | `ProjectCard.vue` utilise `v-html="d"` pour les descriptions. Contenu actuellement en dur ; si un jour le contenu vient de la BDD ou d’utilisateurs, risque XSS. À documenter et, le cas échéant, remplacer par du texte échappé ou un rendu Markdown contrôlé. |
| 5 | **Console.log côté client** (`test-mongo-db.vue`) | 📋 À faire | Composant de test avec `console.log` / `console.error`. Déjà commenté dans la page d’accueil ; à retirer ou à garder uniquement en dev si le composant est réutilisé. |
| 6 | **Exemple de mots de passe dans README** | 📋 À faire | Le README contient des exemples (ex. `secure-password1234!!`, `devsecret`). Rappeler de ne jamais réutiliser ces valeurs en prod ; optionnel : remplacer par des placeholders du type `your-secure-password`. |

---

## Docker & Build

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | `.dockerignore` dans `nuxt-app` | ✅ Fait | Réduit le contexte de build, exclut `.env`, `node_modules`, etc. |
| 2 | Makefile – commandes maintenance (`df`, `clean`, `clean-all`, `clean-cache`) | ✅ Fait | Nettoyage disque et cache Docker |

---

## Historique des mises à jour

- **2025-01-31** : Audit sécurité – suppression des logs sensibles (mongo user/pass/URI), mongoose debug désactivé en production, ajout des entrées Sécurité (#1 à #6) dans le tableau d’audit.
- **YYYY-MM-DD** : Création du document, ajout section Docker & Build (Makefile cleanup).
