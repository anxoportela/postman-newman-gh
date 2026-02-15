# Rick and Morty API - Postman/Newman Test Suite

Comprehensive API testing suite for the [Rick and Morty API](https://rickandmortyapi.com/) using Postman collections and Newman CLI, with Docusaurus documentation.

## Features

### Test Coverage (90 Assertions)

- **Characters** - 30 tests (list, get, filter, pagination)
- **Locations** - 18 tests (list, get, filter)
- **Episodes** - 24 tests (list, get, filter)
- **Error Handling** - 10 tests (404, invalid endpoints)
- **Performance** - 8 tests (response time)

### Newman/Postman Features

- Global test scripts, pre-request scripts
- Environment variables, chained requests
- Response validation, header checks
- Regex matching, array operations

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build docs
npm run docs:build

# Serve docs locally
npm run docs:serve
```

## Docker

```bash
# Build and run
make docker-build
make docker-test
```

## Project Structure

```
.
├── src/pages/              # Docusaurus pages (homepage, setup, test-results)
├── docs/                  # API documentation (markdown)
├── docusaurus.config.js   # Docusaurus config
├── rick-and-morty-api.json    # Postman collection
├── rick-and-morty-env.json    # Environment
├── package.json               # Dependencies
├── Makefile                  # Commands
├── Dockerfile                # Docker image
├── docker-compose.yml        # Docker Compose
└── .github/workflows/       # CI/CD
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run Newman tests |
| `npm run docs:build` | Build Docusaurus |
| `npm run docs:serve` | Serve docs locally |
| `make docker-test` | Run tests in Docker |
| `make docker-build` | Build Docker image |

## GitHub Pages

Documentation deployed at: https://anxoportela.github.io/postman-newman-gh/

## License

MIT - Anxo Portela-Insua Blanco
