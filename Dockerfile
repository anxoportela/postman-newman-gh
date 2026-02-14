FROM node:20-alpine

# Install Newman and reporters
RUN npm install -g newman newman-reporter-html

# Set working directory
WORKDIR /app

# Copy collection and environment files
COPY rick-and-morty-api.json .
COPY rick-and-morty-env.json .

# Create reports directory
RUN mkdir -p reports

# Default command runs tests
CMD ["newman", "run", "rick-and-morty-api.json", "-e", "rick-and-morty-env.json", "--reporters", "cli,html", "--reporter-html-export", "reports/newman-report.html"]
