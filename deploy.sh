#!/bin/bash

# Navigate to the project directory
cd ~/skillswap-app/skill_swap_backend

# Pull the latest changes from the main branch
echo "Pulling latest changes from Git..."
git pull origin main

# Stop existing containers
echo "Stopping existing containers..."
docker-compose down

# Build and start new containers
echo "Building and starting new containers..."
docker-compose up -d --build

# Push the Prisma schema to MongoDB (instead of migrations)
echo "Pushing Prisma schema to MongoDB..."
docker-compose exec app npx prisma db push

# Generate Prisma client (if not already done in build)
echo "Generating Prisma client..."
docker-compose exec app npx prisma generate

# Restart application
echo "Restarting application..."
docker-compose restart app

echo "Deployment completed successfully!"