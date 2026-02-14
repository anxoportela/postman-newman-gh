---
slug: /setup
---

# Setup Guide

This guide will help you set up and run the Rick and Morty API test suite.

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (optional)

## Local Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/postman-newman-gh.git
cd postman-newman-gh
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Tests

```bash
# Run tests with HTML report
npm test

# Or use make
make test
```

### 4. View Reports

```bash
# Open HTML report
make reports
```

## Docker Installation

### Build and Run

```bash
# Build Docker image
make docker-build

# Run tests in Docker
make docker-test

# Run with report
make docker-test-report
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm test` | Run Newman tests |
| `make test` | Run tests with make |
| `make docker-build` | Build Docker image |
| `make docker-test` | Run tests in Docker |
| `make docker-test-report` | Run tests with HTML report |
| `make clean` | Clean up reports |

## GitHub Actions

Tests automatically run on:
- Every push to `main`
- Every pull request

Reports are deployed to GitHub Pages automatically.

## Project Structure

```
├── rick-and-morty-api.json      # Postman collection
├── rick-and-morty-env.json      # Environment config
├── package.json                  # Dependencies
├── Makefile                      # Build commands
├── Dockerfile                    # Docker image
├── docker-compose.yml            # Docker Compose
├── .github/workflows/            # GitHub Actions
└── docs/                        # Docusaurus docs
```
