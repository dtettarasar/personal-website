# ----- DEV MODE -----

COMPOSE_DEV = -f docker-compose.yml -f docker-compose.dev.yml
COMPOSE_PROD = -f docker-compose.yml

dev:
	docker compose $(COMPOSE_DEV) up --build

dev-down:
	docker compose $(COMPOSE_DEV) down -v


# ----- PROD MODE -----

# Rebuild uniquement Nuxt (flow normal, recommandé)
prod-nuxt:
	docker compose $(COMPOSE_PROD) up -d --build nuxt-app

prod-nuxt-log:
	docker compose $(COMPOSE_PROD) up --build nuxt-app


# Rebuild tout le stack (rare, uniquement en cas de MAJ Caddy/Mongo)
prod-all:
	docker compose $(COMPOSE_PROD) up -d --build

prod-all-log:
	docker compose $(COMPOSE_PROD) up --build


# ----- DOWN -----

down:
	docker compose $(COMPOSE_PROD) down


# ----- MAINTENANCE & CLEANUP -----

# Affiche l'utilisation de l'espace disque par Docker
df:
	docker system df

# Nettoyage sécurisé : supprime uniquement les conteneurs arrêtés et les images orphelines (<none>)
clean:
	docker system prune -f

# Nettoyage profond : supprime tout ce qui n'est pas utilisé (images, cache de build)
# Utile quand le disque est proche de la saturation (80%+)
clean-all:
	docker system prune -a --volumes -f
	docker builder prune -a -f

# Nettoyer uniquement le cache de build (souvent le plus lourd)
clean-cache:
	docker builder prune -a -f
