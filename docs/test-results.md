---
slug: /test-results
---

# Test Results

The latest Newman test run results are displayed below.

## Summary

| Metric | Value |
|--------|-------|
| Total Assertions | 90 |
| Failed | 0 |
| Passed | 90 |
| Requests | 15 |
| Average Response Time | 31ms |

## Test Categories

- **Characters** - 30 assertions
- **Locations** - 18 assertions
- **Episodes** - 24 assertions
- **Error Handling** - 10 assertions
- **Performance** - 8 assertions

## View Full Report

The complete HTML report with detailed test information is available below:

:::info
The full Newman HTML report is embedded below. Use the controls to navigate through the test results.
:::

<div style={{marginTop: '20px'}}>

[Download Full Report](./newman-report.html)

</div>

## Test Execution

Tests run automatically on every push to main. The report is generated using `newman-reporter-htmlextra` which provides:
- Beautiful UI with dark/light mode
- Detailed request/response info
- Test execution timing
- Failure details with stack traces

## CI/CD Status

GitHub Actions runs tests on:
- Every push to `main`
- Every pull request

View the latest run on [GitHub Actions](https://github.com/yourusername/postman-newman-gh/actions).
