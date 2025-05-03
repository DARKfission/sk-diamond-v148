# Updated build.sh
#!/bin/bash
set -e

echo "Starting build process..."

# Remove lock files and use npm exclusively
rm -f pnpm-lock.yaml package-lock.json yarn.lock
echo "Installing dependencies with npm..."
npm install --no-package-lock

# Build with Next.js static export
echo "Running Next.js build..."
npm run next-build

echo "Build completed successfully!"
