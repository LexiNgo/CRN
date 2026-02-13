#!/bin/sh

set -eu

cd /app

LOCKFILE="package-lock.json"
LOCKHASH_FILE="node_modules/.package-lock.hash"

if [ ! -f "$LOCKFILE" ]; then
  echo "Missing $LOCKFILE in /app"
  exit 1
fi

CURRENT_HASH="$(sha256sum "$LOCKFILE" | awk '{print $1}')"
SHOULD_INSTALL=0

if [ ! -d node_modules ]; then
  SHOULD_INSTALL=1
elif [ ! -f node_modules/tailwindcss/package.json ]; then
  SHOULD_INSTALL=1
elif [ ! -f "$LOCKHASH_FILE" ]; then
  SHOULD_INSTALL=1
elif [ "$(cat "$LOCKHASH_FILE")" != "$CURRENT_HASH" ]; then
  SHOULD_INSTALL=1
fi

if [ "$SHOULD_INSTALL" -eq 1 ]; then
  echo "Installing dependencies in container..."
  npm ci --prefer-offline --no-audit
  printf "%s" "$CURRENT_HASH" > "$LOCKHASH_FILE"
fi

exec npm run dev -- --host
