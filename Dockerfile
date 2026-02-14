FROM node:20-alpine

# Install Newman and reporters
RUN npm install -g newman newman-reporter-htmlextra

WORKDIR /app

# Copy files
COPY rick-and-morty-api.json rick-and-morty-env.json ./
COPY docs ./docs

# Create reports dir
RUN mkdir -p reports

# Run tests
CMD ["newman", "run", "rick-and-morty-api.json", "-e", "rick-and-morty-env.json", "--reporters", "cli,htmlextra", "--reporter-htmlextra-export", "reports/newman-report.html"]
