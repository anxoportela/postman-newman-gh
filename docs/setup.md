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

```bash
# Install dependencies
npm install

# Run tests
npm test
```

## Docker

```bash
# Build
make docker-build

# Run tests
make docker-test
```

## Available Commands

- `npm install` - Install dependencies
- `npm test` - Run Newman tests
- `make docker-test` - Run tests in Docker
