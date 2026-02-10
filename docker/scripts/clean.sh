#!/bin/bash
# docker/scripts/clean.sh - Clean up Docker resources

set -e

REGISTRY="${2:-crn}"
IMAGE_NAME="centre-reveil"
IMAGE_TAG="${1:-latest}"
IMAGE_FULL="${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

echo "Cleaning up Docker resources..."
echo "Image: ${IMAGE_FULL}"
echo ""

read -p "Continue? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    exit 0
fi

docker ps -a --format '{{.Names}}' | grep '^crn-' | while read container; do
    echo "Stopping: $container"
    docker stop "$container" > /dev/null 2>&1 || true
    docker rm "$container" > /dev/null 2>&1 || true
done

if docker image inspect "${IMAGE_FULL}" > /dev/null 2>&1; then
    echo "Removing: ${IMAGE_FULL}"
    docker rmi "${IMAGE_FULL}" > /dev/null 2>&1 || true
fi

docker system prune -f > /dev/null 2>&1 || true

echo "✓ Cleanup complete!"
