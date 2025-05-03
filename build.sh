#!/bin/bash
set -e

echo "Starting build process..."

# Remove any existing lock files to prevent conflicts
echo "Removing existing lock files..."
rm -f package-lock.json
rm -f yarn.lock
rm -f pnpm-lock.yaml

# Install dependencies with npm (more reliable in CI environments)
echo "Installing dependencies with npm..."
npm install --no-package-lock

# Set environment variables to disable TypeScript checking
export NEXT_SKIP_TYPESCRIPT_CHECK=1
export NEXT_TELEMETRY_DISABLED=1
export NODE_OPTIONS="--max_old_space_size=4096"

# Run the Next.js build
echo "Running next.config.mjs build..."
npm run next-build

echo "Build completed successfully!"
