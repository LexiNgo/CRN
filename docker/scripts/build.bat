@echo off
REM docker/scripts/build.bat - Build Docker image (Windows)

setlocal enabledelayedexpansion

set "REGISTRY=%2"
if "!REGISTRY!"=="" set "REGISTRY=crn"

set "IMAGE_NAME=centre-reveil"
set "IMAGE_TAG=%1"
if "!IMAGE_TAG!"=="" set "IMAGE_TAG=latest"

set "IMAGE_FULL=!REGISTRY!/!IMAGE_NAME!:!IMAGE_TAG!"

echo Building Docker image: !IMAGE_FULL!
echo.

docker build ^
    --tag "!IMAGE_FULL!" ^
    --progress=plain ^
    -f docker\build\Dockerfile ^
    .

if errorlevel 1 (
    echo Docker build failed!
    exit /b 1
)

echo.
echo Docker image built successfully: !IMAGE_FULL!
docker images "!IMAGE_FULL!"

if "!IMAGE_TAG!" neq "latest" (
    docker tag "!IMAGE_FULL!" "!REGISTRY!/!IMAGE_NAME!:latest"
    echo Tagged as latest
)
