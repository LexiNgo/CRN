#!/bin/bash
# docker/scripts/test.sh - Test Docker image locally

set -e

REGISTRY="${2:-crn}"
IMAGE_NAME="centre-reveil"
IMAGE_TAG="${1:-latest}"
IMAGE_FULL="${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
PORT="${3:-3000}"
CONTAINER_NAME="crn-test-${IMAGE_TAG}"

echo "Testing Docker image: ${IMAGE_FULL}"
echo "Port: ${PORT}:3000"
echo ""

if ! docker image inspect "${IMAGE_FULL}" > /dev/null 2>&1; then
    echo "Error: Image not found! Build it first with: ./docker/scripts/build.sh"
    exit 1
fi

if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
    docker stop "${CONTAINER_NAME}" > /dev/null 2>&1 || true
    docker rm "${CONTAINER_NAME}" > /dev/null 2>&1 || true
fi

echo "Starting container..."
docker run -d \
    --name "${CONTAINER_NAME}" \
    --rm \
    -p "${PORT}:3000" \
    "${IMAGE_FULL}"

sleep 5
echo "✓ Container running at http://localhost:${PORT}"
docker logs -f "${CONTAINER_NAME}"
