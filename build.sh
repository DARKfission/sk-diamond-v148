#!/bin/bash
# Remove pnpm-lock.yaml if it exists
if [ -f pnpm-lock.yaml ]; then
  rm pnpm-lock.yaml
fi

# Install dependencies with pnpm without frozen lockfile
pnpm install --no-frozen-lockfile

# Build the project
pnpm run next-build
