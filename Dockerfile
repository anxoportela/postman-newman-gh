# Rick and Morty API Test Suite - Docker Image
FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --legacy-peer-deps || npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Create reports directory
RUN mkdir -p reports

# Default: run tests
CMD ["npm", "test"]
