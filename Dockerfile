FROM node:20-alpine

# Install Newman and reporters
RUN npm install -g newman newman-reporter-htmlextra

WORKDIR /app

# Copy all project files
COPY . .

# Install deps
RUN npm install --legacy-peer-deps

# Build Docusaurus docs
RUN npm run docs:build

# Create reports dir
RUN mkdir -p reports

# Default: run tests
CMD ["npm", "test"]
