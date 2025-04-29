#!/bin/bash
# Remove pnpm-lock.yaml if it exists
if [ -f pnpm-lock.yaml ]; then
  rm pnpm-lock.yaml
fi

# Remove node_modules if it exists
if [ -d node_modules ]; then
  rm -rf node_modules
fi

# Install dependencies with npm
npm install

# Build the project
npm run build
