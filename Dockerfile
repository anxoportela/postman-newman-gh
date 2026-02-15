FROM node:20-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package.json ./

# Install dependencies
RUN npm install --legacy-peer-deps --no-package-lock

# Copy all project files
COPY . .

# Build Docusaurus docs
RUN npm run docs:build

# Create reports directory
RUN mkdir -p reports

# Default: run tests
CMD ["npm", "test"]
