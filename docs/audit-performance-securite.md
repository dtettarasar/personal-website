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
| 1 | | | |

---

## Docker & Build

| # | Élément | Statut | Notes |
|---|---------|--------|-------|
| 1 | `.dockerignore` dans `nuxt-app` | ✅ Fait | Réduit le contexte de build, exclut `.env`, `node_modules`, etc. |
| 2 | Makefile – commandes maintenance (`df`, `clean`, `clean-all`, `clean-cache`) | ✅ Fait | Nettoyage disque et cache Docker |

---

## Historique des mises à jour

- **YYYY-MM-DD** : Création du document, ajout section Docker & Build (Makefile cleanup).
