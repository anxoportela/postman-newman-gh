# Rick and Morty API - Postman/Newman Test Suite

Comprehensive API testing suite for the [Rick and Morty API](https://rickandmortyapi.com/) using Postman collections and Newman CLI.

## Features

### Test Coverage (90 Assertions)

#### Characters Endpoints
- ✅ List all characters with pagination
- ✅ Get character by ID (using dynamic variables)
- ✅ Filter characters by name and status
- ✅ Pagination tests (next/previous pages)
- ✅ Get multiple characters by IDs

#### Locations Endpoints  
- ✅ List all locations
- ✅ Get location by ID
- ✅ Filter locations by name, type, and dimension

#### Episodes Endpoints
- ✅ List all episodes
- ✅ Get episode by ID
- ✅ Filter episodes by code (S01E01 format)
- ✅ Get multiple episodes by IDs

#### Error Handling
- ✅ 404 Not Found for invalid IDs
- ✅ 404 for invalid endpoints
- ✅ Error response structure validation

#### Performance Tests
- ✅ Response time < 500ms
- ✅ Response time < 1s

### Newman/Postman Features Demonstrated

- **Global test scripts** - Runs on every request (response time, status checks)
- **Pre-request scripts** - Set environment variables before requests
- **Environment variables** - Store and reuse data between requests
- **Chained requests** - Save data from one request, use in next
- **Response validation** - JSON structure, types, values
- **Header validation** - Content-Type checks
- **Regex matching** - Episode code format validation (SxxExx)
- **Array operations** - every(), some(), forEach()
- **Error handling** - Expected 404 responses
- **Performance testing** - Response time assertions

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Or with yarn
yarn install
```

### Running Tests

```bash
# Run locally with npm
npm test

# Or use make
make test
```

### Using Docker

```bash
# Run with Docker
make docker-build
make docker-test

# Or with docker-compose
docker-compose up --build
```

## Project Structure

```
├── rick-and-morty-api.json      # Postman collection (15 requests, 90 assertions)
├── rick-and-morty-env.json       # Postman environment configuration
├── package.json                  # Node dependencies
├── Makefile                      # Build commands
├── Dockerfile                    # Docker image
├── docker-compose.yml            # Docker Compose configuration
├── .github/workflows/            # GitHub Actions
│   └── newman.yml               # CI/CD workflow
├── reports/                      # Test reports
│   └── newman-report.html       # HTML report
└── README.md                     # This file
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run Newman tests locally |
| `make test` | Run tests with make |
| `make install` | Install dependencies |
| `make docker-build` | Build Docker image |
| `make docker-test` | Run tests in Docker |
| `make docker-test-report` | Run tests in Docker with report |

## GitHub Actions

Tests automatically run on:
- Every push to `main`
- Every pull request

Reports are available as GitHub Pages after each run.

## API Documentation

The collection tests these endpoints:
- `GET /character` - List all characters
- `GET /character/{id}` - Get character by ID
- `GET /location` - List all locations  
- `GET /location/{id}` - Get location by ID
- `GET /episode` - List all episodes
- `GET /episode/{id}` - Get episode by ID

## Customization

### Adding New Tests

1. Edit `rick-and-morty-api.json` in Postman or manually
2. Add new test scripts using chai assertions:

```javascript
pm.test('Test name', function() {
    const json = pm.response.json();
    pm.expect(json.property).to.equal('value');
});
```

### Modifying Environment

Edit `rick-and-morty-env.json` to change:
- `baseUrl` - API base URL
- Other environment-specific variables

## Example Output

```
✓ Global: Response time < 3s
✓ Global: Status code is success
✓ Status 200 OK
✓ Response has info with pagination
✓ Results is an array with items
✓ Save first character ID for next test

Total: 90 assertions, 0 failures
```

## License

MIT License
