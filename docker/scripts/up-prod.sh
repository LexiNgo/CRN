#!/bin/bash
# docker/scripts/up-prod.sh - Start production environment

set -e

echo "Starting production environment..."
docker-compose -f docker/compose/docker-compose.prod.yml up
