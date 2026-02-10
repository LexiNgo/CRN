@echo off
REM docker/scripts/up-dev.bat - Start development environment (Windows)

echo Starting development environment...
docker-compose -f docker/compose/docker-compose.dev.yml up
