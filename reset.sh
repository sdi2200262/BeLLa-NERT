#!/bin/bash

# Echo commands as they are executed
set -x

# Remove all node_modules and lock files
rm -rf node_modules
rm -rf frontend/node_modules
rm -rf backend/node_modules
rm -f package-lock.json
rm -f frontend/package-lock.json
rm -f backend/package-lock.json

# Remove generated Shadcn UI components
rm -rf frontend/src/components/ui
rm -rf frontend/src/lib

# Clean any build artifacts
rm -rf frontend/dist
rm -rf backend/dist

# Remove any environment files
rm -f .env
rm -f frontend/.env
rm -f backend/.env

# Create necessary directories
mkdir -p frontend/src/components/ui
mkdir -p frontend/src/lib

# Reinstall Shadcn UI components
cd frontend
npx @shadcn/ui@latest add button card badge
cd ..

echo "Reset complete! Now run:"
echo "npm install"
echo "npm run dev" 