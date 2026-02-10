# Docker Configuration Structure
# ==============================

## Dossiers

### docker/build/
- Dockerfile           # Image Docker multi-stage

### docker/compose/
- docker-compose.yml  # Configuration par défaut (dev)
- docker-compose.dev.yml  # Configuration développement
- docker-compose.prod.yml # Configuration production

### docker/scripts/
- build.sh / build.bat       # Build l'image Docker
- up-dev.sh / up-dev.bat     # Démarre l'environnement dev
- up-prod.sh / up-prod.bat   # Démarre l'environnement prod
- test.sh                     # Teste l'image localement
- clean.sh                    # Nettoie les ressources

### docker/nginx/
- default.conf        # Configuration Nginx (optionnel)

## Fichiers à la racine

- .dockerignore        # Fichiers à exclure du build Docker

## Utilisation

### Linux/Mac:
```bash
# Build
./docker/scripts/build.sh latest crn

# Développement
./docker/scripts/up-dev.sh

# Production
./docker/scripts/up-prod.sh

# Test
./docker/scripts/test.sh latest crn 3000

# Cleanup
./docker/scripts/clean.sh latest crn
```

### Windows:
```powershell
# Build
docker\scripts\build.bat latest crn

# Développement
docker\scripts\up-dev.bat

# Production
docker\scripts\up-prod.bat

# Test
docker\scripts\test.bat latest crn 3000
```

### Ou directement avec docker-compose:
```bash
# Développement
docker-compose -f docker/compose/docker-compose.dev.yml up

# Production
docker-compose -f docker/compose/docker-compose.prod.yml up
```
