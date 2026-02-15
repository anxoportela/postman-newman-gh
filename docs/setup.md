---
slug: /setup
title: Setup Guide
description: Learn how to set up and run the Rick and Morty API test suite
---

# ⚙️ Setup Guide

This guide will help you set up and run the Rick and Morty API test suite.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

| Requirement | Version | Description |
|------------|---------|-------------|
| Node.js | 18+ | JavaScript runtime |
| npm | Latest | Package manager |
| Docker | Latest | Containerization (optional) |

## 🖥️ Local Installation

### 1. Install Dependencies

```bash
# Clone the repository
git clone https://github.com/anxoportela/postman-newman-gh.git

# Navigate to directory
cd postman-newman-gh

# Install dependencies
npm install
```

### 2. Run Tests

```bash
# Run Newman tests
npm test

# Or use make
make test
```

## 🐳 Docker Installation

### Option 1: Docker Compose

```bash
# Build the image
make docker-build

# Run tests in Docker
make docker-test

# Serve docs locally
make docker-docs
```

### Option 2: Manual Docker

```bash
# Build image
docker build -t rick-morty-newman .

# Run tests
docker run rick-morty-newman npm test
```

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm test` | Run Newman tests |
| `npm run docs:build` | Build documentation |
| `npm run docs:serve` | Serve docs locally |
| `make docker-build` | Build Docker image |
| `make docker-test` | Run tests in Docker |
| `make docker-docs` | Serve docs in Docker |

## ⚠️ Troubleshooting

### Common Issues

**npm install fails**
```bash
# Try with legacy peer deps
npm install --legacy-peer-deps
```

**Tests fail**
- Check your internet connection
- Verify the Rick and Morty API is accessible
- Ensure no firewall is blocking requests

## 🚀 Next Steps

- Check out the [API Documentation](/characters)
- View [Test Results](/test-results)
- Review the [GitHub Actions Workflow](https://github.com/anxoportela/postman-newman-gh/actions)
