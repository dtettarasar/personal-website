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

## Qualité / Tests

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | **Vitest (backend + frontend)** | ✅ Fait | `vitest`, `@nuxt/test-utils`, `vitest.config.ts` avec projets `backend` (Node) et `frontend` (Nuxt). Scripts : `test`, `test:watch`, `test:coverage`. |
| 2 | **Test connexion DB (initDB)** | ✅ Fait | `tests/unit/backend/database.connection.test.ts` : mock Mongoose, tests « connect si déconnecté », « ne pas reconnecter si déjà connecté », « throw on failure ». |
| 3 | **Test insertion TestMessage (create + findById)** | ✅ Fait | `tests/unit/backend/test-message.test.ts` : mock du modèle TestMessage, vérification du flux create puis findById (sans DB réelle). |
| 4 | **Makefile – commandes tests** | ✅ Fait | `make test`, `make test-watch`, `make test-coverage` : exécution des tests Vitest dans le conteneur (`docker compose exec nuxt-app npm run test`). |
| 5 | **Tests d'intégration TestMessage (vraie DB)** | ✅ Fait | `tests/integration/backend/test-message.integration.test.ts` + `tests/utils/db-handlers.ts`, `test-factory.ts` : connexion MongoDB réelle, création et lecture d'un TestMessage, nettoyage en afterAll. Projet Vitest `integration`. |
| 6 | **Tests unitaires frontend (Vue)** | ✅ Fait | `tests/unit/frontend/` : ButtonLink (label, link), HeroSmall (title), Teasing (Coming Soon). `mountSuspended` (@nuxt/test-utils). Scripts Makefile : `make test-frontend`, `make test-backend`, `make test-integration`. |

**Unitaire vs intégration :**  
- **Unitaire** : une seule unité (fonction, module) en isolation, avec **mocks** (pas de DB, pas de réseau). Rapide, déterministe. Ex. `database.connection.test.ts`, `test-message.test.ts`.  
- **Intégration** : **vraie** connexion (DB, API, etc.) et **vraies** données. Vérifie que les briques fonctionnent ensemble. Plus lent, nécessite la stack (ex. `make dev` puis `make test`). Ex. `test-message.integration.test.ts`.

---

## Sécurité

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | **Logs sensibles côté serveur** | ✅ Fait | Suppression des `console.log` exposant `mongoUser`, `mongoPass`, et l’URI MongoDB complète dans `server/plugins/database.ts` et `server/database/database.ts`. Les logs peuvent être stockés ou visibles (ex. `docker logs`) et exposaient les identifiants. |
| 2 | **Mongoose debug en production** | ✅ Fait | `mongoose.set('debug', true)` désactivé en production dans `server/database/database.ts` (activé uniquement si `NODE_ENV !== 'production'`). En prod, le debug peut logger des requêtes et données sensibles. |
| 3 | **API de test MongoDB** (`GET /api/test-mongo`) | ✅ Fait | Route supprimée. Vérification DB via Vitest qui crée un document à chaque appel : risque d’abus (DoS, pollution de la BDD). À désactiver en production (`tests/unit/backend/database.connection.test.ts`). |
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

## Notes / Références

- **Warning baseline-browser-mapping** : paquet de données de compatibilité navigateurs (W3C WebDX). Vitest (ou une de ses dépendances) l’utilise pour le mode navigateur. Le message « data over two months old » indique que les données sont anciennes ; on peut l’ignorer ou mettre à jour avec `npm i baseline-browser-mapping@latest -D` pour des données plus récentes. Sans impact sur les tests backend (Node).

---

## Historique des mises à jour

- **2025-01-31** : Tests unitaires frontend (ButtonLink, HeroSmall, Teasing) ; scripts npm test:frontend, test:backend, test:integration ; Makefile déjà à jour par l’utilisateur.
- **2025-01-31** : Tests d'intégration TestMessage (vraie DB) : db-handlers, test-factory, projet Vitest integration ; clarification unitaire vs intégration.
- **2025-01-31** : Test insertion TestMessage (test-message.test.ts) ; Makefile commandes tests ; note baseline-browser-mapping dans l’audit.
- **2025-01-31** : Suppression API test-mongo ; Vitest + test connexion DB. Sécurité #3 → fait.
- **2025-01-31** : Audit sécurité – suppression des logs sensibles (mongo user/pass/URI), mongoose debug désactivé en production, ajout des entrées Sécurité (#1 à #6) dans le tableau d’audit.
- **YYYY-MM-DD** : Création du document, ajout section Docker & Build (Makefile cleanup).
