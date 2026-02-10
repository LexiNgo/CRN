@echo off
REM docker/scripts/up-prod.bat - Start production environment (Windows)

echo Starting production environment...
docker-compose -f docker/compose/docker-compose.prod.yml up
