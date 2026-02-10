#!/bin/bash
# docker/scripts/build.sh - Build Docker image

set -e

REGISTRY="${2:-crn}"
IMAGE_NAME="centre-reveil"
IMAGE_TAG="${1:-latest}"
IMAGE_FULL="${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"

BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
VCS_REF=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

echo "Building Docker image: ${IMAGE_FULL}"
echo "Build Date: ${BUILD_DATE}"
echo "Git Ref: ${VCS_REF}"
echo ""

docker build \
    --tag "${IMAGE_FULL}" \
    --build-arg BUILD_DATE="${BUILD_DATE}" \
    --build-arg VCS_REF="${VCS_REF}" \
    --build-arg VERSION="${IMAGE_TAG}" \
    --progress=plain \
    -f docker/build/Dockerfile \
    .

if [ $? -eq 0 ]; then
    echo ""
    echo "✓ Docker image built successfully: ${IMAGE_FULL}"
    docker images "${IMAGE_FULL}"
    
    if [ "${IMAGE_TAG}" != "latest" ]; then
        docker tag "${IMAGE_FULL}" "${REGISTRY}/${IMAGE_NAME}:latest"
        echo "✓ Tagged as latest"
    fi
else
    echo "✗ Docker build failed!"
    exit 1
fi
