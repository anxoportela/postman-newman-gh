---
slug: /test-results
title: Test Results
description: View the latest test results and reports
---

# 📊 Test Results

Latest test results from the automated CI/CD pipeline.

## 📈 Summary

| Metric | Value |
|--------|-------|
| ✅ Total Assertions | 90 |
| ❌ Failed | 0 |
| ✅ Passed | 90 |
| 📝 Requests | 15 |
| ⏱️ Duration | ~1s |
| 📦 Data Received | ~130KB |

## 📋 Test Categories

| Category | Assertions | Status |
|----------|-----------|--------|
| 🔵 Characters | 30 | ✅ |
| 🟢 Locations | 18 | ✅ |
| 🟣 Episodes | 24 | ✅ |
| ⚠️ Error Handling | 10 | ✅ |
| ⚡ Performance | 8 | ✅ |

## 🎯 Test Details

### Characters Endpoint (30 tests)
- List all characters with pagination
- Get character by ID
- Filter by name and status
- Pagination verification
- Multiple character IDs

### Locations Endpoint (18 tests)
- List all locations
- Get location by ID
- Filter by name, type, dimension

### Episodes Endpoint (24 tests)
- List all episodes
- Get episode by ID
- Filter by episode code (S01E01 format)
- Multiple episode IDs

### Error Handling (10 tests)
- 404 Not Found for invalid IDs
- Invalid endpoint handling

### Performance (8 tests)
- Response time < 500ms
- Response time < 1s

## 📦 Newman Report

The complete HTML report is generated after running tests. You can find it in the `reports/` directory after running:

```bash
npm test
```

The report includes:
- Detailed test execution summary
- Response times
- Request/response payloads
- Failed test details (if any)

## 🔄 CI/CD Status

Tests run automatically on:
- Every push to `main`
- Every pull request

View the latest workflow runs: [GitHub Actions](https://github.com/anxoportela/postman-newman-gh/actions)

## ✅ All Tests Passing

```
┌─────────────────────────────┬──────────┬───────────┐
│ Name                       │ Passed   │ Failed    │
├─────────────────────────────┼──────────┼───────────┤
│ assertions                 │ 90       │ 0         │
├─────────────────────────────┴──────────┴───────────┤
│ total run duration: ~1s                                │
└──────────────────────────────────────────────────────┘
```
