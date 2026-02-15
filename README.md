# Rick and Morty API - Postman/Newman Test Suite

![Tests](https://github.com/anxoportela/postman-newman-gh/actions/workflows/newman.yml/badge.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

Comprehensive API testing suite for the [Rick and Morty API](https://rickandmortyapi.com/) using Postman collections and Newman CLI, with Docusaurus documentation and dynamic test results.

## Features

- **90 Test Assertions** - Full coverage of all API endpoints
- **Beautiful Reports** - Newman htmlextra with detailed HTML reports
- **Dynamic Test Results** - React page loading JSON data in real-time
- **Docker Support** - Containerized testing with Docker
- **Docusaurus Docs** - Beautiful documentation site
- **CI/CD** - GitHub Actions automation with Dependabot
- **GitHub Pages** - Auto-deployed documentation

## Quick Start

```bash
# Install dependencies
make install
# or: npm install

# Run tests
make test
# or: npm test

# Build docs
make docs:build
# or: npm run docs:build

# Serve docs locally
npm run docs:serve
```

## Docker

```bash
# Build Docker image
make docker-build

# Run tests in Docker
make docker-test

# Serve docs in Docker
make docker-docs
```

## Available Commands

| Command | Description |
|---------|-------------|
| `make install` | Install dependencies |
| `make test` | Run tests locally |
| `make docker-build` | Build Docker image |
| `make docker-test` | Run tests in Docker |
| `make docker-docs` | Serve docs in Docker |
| `make docs:build` | Build Docusaurus docs |
| `make clean` | Clean reports |

## Project Structure

```
.
├── src/pages/              # Docusaurus pages (React)
│   └── test-results.js    # Dynamic test results
├── docs/                  # API documentation (markdown)
│   ├── index.md          # Homepage
│   ├── setup.md          # Setup guide
│   ├── characters.md     # Characters API
│   ├── locations.md      # Locations API
│   └── episodes.md      # Episodes API
├── docusaurus.config.js  # Docusaurus config
├── rick-and-morty-api.json    # Postman collection
├── rick-and-morty-env.json    # Environment
├── package.json               # Dependencies
├── Makefile                  # Commands
├── Dockerfile                # Docker image
├── docker-compose.yml        # Docker Compose
└── .github/                 # CI/CD & Dependabot
```

## Test Coverage

| Endpoint | Assertions | Status |
|----------|-----------|--------|
| Characters | 30 | ✅ |
| Locations | 18 | ✅ |
| Episodes | 24 | ✅ |
| Error Handling | 10 | ✅ |
| Performance | 8 | ✅ |

## Documentation

Live at: https://anxoportela.github.io/postman-newman-gh/

- `/` - Homepage
- `/setup` - Setup guide
- `/characters` - Characters API docs
- `/locations` - Locations API docs
- `/episodes` - Episodes API docs
- `/test-results` - Dynamic test results (loads JSON)

## License

MIT - © 2026 Anxo Portela-Insua Blanco
