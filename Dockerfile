FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Generate Prisma client with the correct binary targets
RUN npx prisma generate

# Copy source code
COPY . .

# Build the application (if needed)
RUN npm run build

# Expose port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]