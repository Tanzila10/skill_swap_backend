FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Copy MongoDB initialization script
COPY init-mongo.js /docker-entrypoint-initdb.d/

# Install dependencies
RUN npm install

# Generate Prisma client
RUN npx prisma generate

RUN npx prisma db push

# Copy source code
COPY . .

# Build the application (if needed)
# RUN npm run build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]