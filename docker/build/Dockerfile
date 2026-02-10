# =============================================================================
# Dockerfile - Centre de Réveil pour les Nations
# Multi-stage build: dependencies → builder → runtime
# =============================================================================

# =============================================================================
# Stage 1: Dependencies
# =============================================================================
FROM node:22-alpine AS dependencies

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --prefer-offline --no-audit

# =============================================================================
# Stage 2: Builder
# =============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN npm run build
RUN test -d dist || exit 1

# =============================================================================
# Stage 3: Runtime
# =============================================================================
FROM node:22-alpine

LABEL maintainer="CRN Team"
LABEL description="Centre de Réveil pour les Nations"
LABEL version="1.0.0"

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

RUN npm install -g serve --no-save && npm cache clean --force

RUN addgroup -g 1001 appuser && adduser -D -u 1001 -G appuser appuser

COPY --from=builder --chown=appuser:appuser /app/dist ./dist

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

USER appuser

CMD ["serve", "-s", "dist", "-l", "3000"]
