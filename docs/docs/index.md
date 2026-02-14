---
slug: /
---

# Welcome to Rick and Morty API Test Suite

This is a comprehensive API testing suite for the [Rick and Morty API](https://rickandmortyapi.com/) built with **Postman** and **Newman**.

## Features

- **90 Test Assertions** covering all API endpoints
- **Automatic CI/CD** with GitHub Actions
- **Beautiful HTML Reports** with Newman htmlextra
- **Docker Support** for containerized testing
- **Docusaurus Documentation** for easy navigation

## Quick Links

- [API Documentation](/docs/api/characters) - Explore all endpoints
- [Test Results](/docs/test-results) - View latest test run
- [Setup Guide](/docs/setup) - Get started

## Test Coverage

| Endpoint | Tests |
|----------|-------|
| Characters | 30 tests |
| Locations | 18 tests |
| Episodes | 24 tests |
| Error Handling | 10 tests |
| Performance | 8 tests |

## Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build docs
cd docs && npm run build
```

## Technologies

- **Postman** - API client and collection designer
- **Newman** - Command-line collection runner
- **Docusaurus** - Documentation framework
- **GitHub Actions** - CI/CD automation
