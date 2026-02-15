---
slug: /
title: Home
description: Comprehensive API testing suite for the Rick and Morty API
---

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

# 🚀 Rick and Morty API Test Suite

<div style={{textAlign: 'center', padding: '2rem 0'}}>

![Rick and Morty](https://upload.wikimedia.org/wikipedia/en/c/c4/Rick_and_Morty_season_1.jpg)

**Comprehensive API testing suite for the [Rick and Morty API](https://rickandmortyapi.com/) using Postman and Newman**

</div>

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔬 **90 Test Assertions** | Full coverage of all API endpoints |
| 📊 **Beautiful Reports** | Newman htmlextra with detailed HTML reports |
| 🐳 **Docker Support** | Containerized testing with Docker |
| 📚 **Documentation** | Beautiful Docusaurus docs |
| ⚡ **CI/CD** | GitHub Actions automation |

---

## 📈 Test Coverage

<div className="grid-cards">

| Endpoint | Tests | Status |
|----------|-------|--------|
| Characters | 30 | ✅ |
| Locations | 18 | ✅ |
| Episodes | 24 | ✅ |
| Error Handling | 10 | ✅ |
| Performance | 8 | ✅ |

</div>

## 🚦 Quick Start

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build docs
npm run docs:build
```

## 📖 Documentation

<div className="button-group">

<Link className="button button--primary button--lg" to="/setup">
  ⚡ Get Started
</Link>

<Link className="button button--secondary button--lg" to="/characters">
  📚 API Docs
</Link>

</div>

## 🏗️ Project Structure

```
.
├── docs/                    # Documentation
│   ├── index.md            # Homepage
│   ├── setup.md            # Setup guide
│   ├── test-results.md     # Test results
│   └── api/                # API endpoints
├── rick-and-morty-api.json # Postman collection
├── rick-and-morty-env.json # Environment
├── Dockerfile              # Docker image
├── Makefile               # Commands
└── .github/workflows/     # CI/CD
```

## 📝 License

MIT License - © 2026 Anxo Portela-Insua Blanco
