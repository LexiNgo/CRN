#!/bin/bash
# docker/scripts/up-dev.sh - Start development environment

set -e

echo "Starting development environment..."
docker-compose -f docker/compose/docker-compose.dev.yml up
