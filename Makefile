.PHONY: help build run stop clean logs

# =============================================================================
# Centre de Réveil pour les Nations - Makefile
# =============================================================================
# Utilisation: make [commande]
# Exemple: make build, make run, make stop
# =============================================================================

# Variables
DOCKER_IMAGE := crn/centre-reveil:latest
DOCKER_CONTAINER := crn-app
DOCKER_PORT := 3000
DOCKER_FILE := docker/build/Dockerfile
DOCKER_COMPOSE_DEV := docker/compose/docker-compose.dev.yml
DOCKER_COMPOSE_PROD := docker/compose/docker-compose.prod.yml

# Colors for output
RED := \033[0;31m
GREEN := \033[0;32m
BLUE := \033[0;34m
YELLOW := \033[1;33m
NC := \033[0m # No Color

# =============================================================================
# Help
# =============================================================================
help:
	@echo "$(BLUE)╔════════════════════════════════════════════════════════╗$(NC)"
	@echo "$(BLUE)║  Centre de Réveil pour les Nations - Docker Commands   ║$(NC)"
	@echo "$(BLUE)╚════════════════════════════════════════════════════════╝$(NC)"
	@echo ""
	@echo "$(YELLOW)Build:$(NC)"
	@echo "  make build              Build Docker image"
	@echo "  make build-prod         Build Docker image (production)"
	@echo ""
	@echo "$(YELLOW)Run:$(NC)"
	@echo "  make run                Run container in foreground"
	@echo "  make run-bg             Run container in background"
	@echo "  make dev                Run development environment"
	@echo "  make prod               Run production environment"
	@echo ""
	@echo "$(YELLOW)Manage:$(NC)"
	@echo "  make stop               Stop container"
	@echo "  make restart            Restart container"
	@echo "  make logs               Show container logs"
	@echo "  make logs-follow        Follow container logs (live)"
	@echo ""
	@echo "$(YELLOW)Clean:$(NC)"
	@echo "  make clean              Clean up Docker resources"
	@echo "  make clean-all          Remove everything (images + containers)"
	@echo ""
	@echo "$(YELLOW)Info:$(NC)"
	@echo "  make ps                 List running containers"
	@echo "  make images             List Docker images"
	@echo "  make inspect            Inspect container"
	@echo ""

# =============================================================================
# Build Commands
# =============================================================================

build: ## Build Docker image
	@echo "$(BLUE)Building Docker image: $(DOCKER_IMAGE)$(NC)"
	docker build -t $(DOCKER_IMAGE) -f $(DOCKER_FILE) .
	@echo "$(GREEN)✓ Build complete!$(NC)"

build-prod: ## Build Docker image with production optimizations
	@echo "$(BLUE)Building production Docker image: $(DOCKER_IMAGE)$(NC)"
	docker build -t $(DOCKER_IMAGE) -f $(DOCKER_FILE) --no-cache .
	@echo "$(GREEN)✓ Build complete!$(NC)"

# =============================================================================
# Run Commands
# =============================================================================

run: ## Run container in foreground
	@echo "$(BLUE)Running container: $(DOCKER_CONTAINER)$(NC)"
	docker run -p $(DOCKER_PORT):3000 $(DOCKER_IMAGE)

run-bg: ## Run container in background
	@echo "$(BLUE)Running container in background: $(DOCKER_CONTAINER)$(NC)"
	@docker run -d --name $(DOCKER_CONTAINER) -p $(DOCKER_PORT):3000 $(DOCKER_IMAGE)
	@echo "$(GREEN)✓ Container running at http://localhost:$(DOCKER_PORT)$(NC)"
	@echo "$(YELLOW)Logs: make logs$(NC)"
	@echo "$(YELLOW)Stop: make stop$(NC)"

dev: ## Run development environment with docker-compose
	@echo "$(BLUE)Starting development environment$(NC)"
	docker-compose -f $(DOCKER_COMPOSE_DEV) up

dev-bg: ## Run development environment in background
	@echo "$(BLUE)Starting development environment in background$(NC)"
	docker-compose -f $(DOCKER_COMPOSE_DEV) up -d
	@echo "$(GREEN)✓ Development environment running at http://localhost:$(DOCKER_PORT)$(NC)"

prod: ## Run production environment with docker-compose
	@echo "$(BLUE)Starting production environment$(NC)"
	docker-compose -f $(DOCKER_COMPOSE_PROD) up

prod-bg: ## Run production environment in background
	@echo "$(BLUE)Starting production environment in background$(NC)"
	docker-compose -f $(DOCKER_COMPOSE_PROD) up -d
	@echo "$(GREEN)✓ Production environment running at http://localhost:$(DOCKER_PORT)$(NC)"

# =============================================================================
# Management Commands
# =============================================================================

stop: ## Stop container
	@echo "$(BLUE)Stopping container: $(DOCKER_CONTAINER)$(NC)"
	@docker stop $(DOCKER_CONTAINER) 2>/dev/null || echo "$(YELLOW)Container not running$(NC)"
	@echo "$(GREEN)✓ Container stopped$(NC)"

restart: ## Restart container
	@echo "$(BLUE)Restarting container: $(DOCKER_CONTAINER)$(NC)"
	docker restart $(DOCKER_CONTAINER)
	@echo "$(GREEN)✓ Container restarted$(NC)"

logs: ## Show container logs (last 100 lines)
	@docker logs --tail 100 $(DOCKER_CONTAINER)

logs-follow: ## Follow container logs (live)
	@docker logs -f $(DOCKER_CONTAINER)

# =============================================================================
# Clean Commands
# =============================================================================

clean: ## Clean up stopped containers and dangling images
	@echo "$(BLUE)Cleaning up Docker resources$(NC)"
	@docker container prune -f 2>/dev/null || true
	@docker image prune -f 2>/dev/null || true
	@echo "$(GREEN)✓ Cleanup complete!$(NC)"

clean-all: stop ## Remove everything (images + containers)
	@echo "$(RED)Removing all CRN Docker resources$(NC)"
	@docker rm $(DOCKER_CONTAINER) 2>/dev/null || true
	@docker rmi $(DOCKER_IMAGE) 2>/dev/null || true
	@docker system prune -a -f 2>/dev/null || true
	@echo "$(GREEN)✓ All resources removed!$(NC)"

# =============================================================================
# Info Commands
# =============================================================================

ps: ## List running containers
	@docker ps --filter "name=$(DOCKER_CONTAINER)" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

images: ## List Docker images
	@docker images $(DOCKER_IMAGE) --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.Created}}"

inspect: ## Inspect container details
	@docker inspect $(DOCKER_CONTAINER) | head -50

# =============================================================================
# Kubernetes Commands (optional)
# =============================================================================

k8s-deploy: ## Deploy to Kubernetes
	@echo "$(BLUE)Deploying to Kubernetes$(NC)"
	kubectl apply -k k8s/
	@echo "$(GREEN)✓ Deployed!$(NC)"

k8s-status: ## Check Kubernetes deployment status
	@kubectl get all -n crn

k8s-logs: ## Show Kubernetes pod logs
	@kubectl logs -f -n crn -l app=centre-reveil

k8s-delete: ## Delete Kubernetes deployment
	@echo "$(RED)Deleting Kubernetes deployment$(NC)"
	kubectl delete -k k8s/
	@echo "$(GREEN)✓ Deleted!$(NC)"

# =============================================================================
# Default target
# =============================================================================

.DEFAULT_GOAL := help
