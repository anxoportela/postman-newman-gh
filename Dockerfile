FROM node:20-alpine

# Install Newman and htmlextra reporter globally
RUN npm install -g newman
RUN npm install -g newman-reporter-htmlextra

# Set working directory
WORKDIR /app

# Copy collection and environment files
COPY rick-and-morty-api.json .
COPY rick-and-morty-env.json .

# Create reports directory
RUN mkdir -p reports

# Default command runs tests with htmlextra
CMD newman run rick-and-morty-api.json -e rick-and-morty-env.json --reporters cli,htmlextra --reporter-htmlextra-export reports/newman-report.html
