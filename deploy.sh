# Pull latest changes
git pull origin main

# Stop existing containers
docker-compose down

# Build and start containers
docker-compose up -d --build

# Run database migrations
docker-compose exec app npx prisma db push

# Restart application
docker-compose restart app